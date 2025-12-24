import { appendToSheet, getISTDateTime } from '../lib/googleSheets.js';

const SHEET_NAME = 'Service page data';

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

    const { date, time } = getISTDateTime();
    const values = [date, time, fullName, email, phone, service, message || ''];

    await appendToSheet(SHEET_NAME, values, 'A:G');

    return res.status(200).json({ success: true, message: 'Service lead submitted successfully' });
  } catch (error) {
    console.error('Error submitting service lead:', error);
    return res.status(500).json({ error: 'Failed to submit service lead' });
  }
}
