import { getGoogleSheetsClient } from '../lib/googleSheets.js';

/**
 * Handle contact form submission
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function submitContactLead(req, res) {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Missing required fields: name and email are required' });
    }

    console.log('[Contact] Appending row:', { name, email, phone, subject, message });

    const sheets = await getGoogleSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Contact page data!A:G',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[
          new Date().toLocaleDateString(),
          new Date().toLocaleTimeString(),
          name || '',
          email || '',
          phone || '',
          subject || '',
          message || ''
        ]]
      }
    });

    console.log('[Contact] Lead submitted successfully');

    return res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact lead:', error);
    return res.status(500).json({ error: 'Failed to submit contact form' });
  }
}
