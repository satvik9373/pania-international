import { getGoogleSheetsClient } from '../lib/googleSheets.js';

/**
 * Handle service form submission
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function submitServiceLead(req, res) {
  try {
    const { fullName, email, phone, service, message } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !service) {
      return res.status(400).json({
        error: 'Missing required fields: fullName, email, phone, and service are required',
      });
    }

    console.log('[Service] Appending row:', { fullName, email, phone, service, message });

    const sheets = await getGoogleSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Service page data!A:G',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[
          new Date().toLocaleDateString(),
          new Date().toLocaleTimeString(),
          fullName || '',
          email || '',
          phone || '',
          service || '',
          message || ''
        ]]
      }
    });

    console.log('[Service] Lead submitted successfully');

    return res.status(200).json({ success: true, message: 'Service lead submitted successfully' });
  } catch (error) {
    console.error('Error submitting service lead:', error);
    return res.status(500).json({ error: 'Failed to submit service lead' });
  }
}
