import { appendToSheet, getISTDateTime } from '../lib/googleSheets.js';

const SHEET_NAME = 'Contact page data';

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

    const { date, time } = getISTDateTime();
    const values = [date, time, name, email, phone || '', subject || '', message || ''];

    console.log('[Contact] Submitting lead:', { name, email, phone, subject });
    await appendToSheet(SHEET_NAME, values, 'A:G');
    console.log('[Contact] Lead submitted successfully');

    return res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact lead:', error);
    return res.status(500).json({ error: 'Failed to submit contact form' });
  }
}
