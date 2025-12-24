import { appendToSheet, getISTDateTime } from '../lib/googleSheets.js';

const SHEET_NAME = 'Product Lead Data';

/**
 * Handle product lead form submission
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function submitProductLead(req, res) {
  try {
    const {
      companyName,
      contactPerson,
      designation,
      email,
      phone,
      countryOfImport,
      website,
      spiceName,
      gradeType,
      organicConventional,
      quantity,
      packing,
      remarks,
      certifications,
      portOfDelivery,
      deliveryTerms,
      shippingMethod,
      deliveryTimeline,
    } = req.body;

    // Validate required fields
    if (!companyName || !contactPerson || !email) {
      return res.status(400).json({
        error: 'Missing required fields: companyName, contactPerson, and email are required',
      });
    }

    const { date, time } = getISTDateTime();
    const values = [
      date,
      time,
      companyName,
      contactPerson,
      designation || '',
      email,
      phone || '',
      countryOfImport || '',
      website || '',
      spiceName || '',
      gradeType || '',
      organicConventional || '',
      quantity || '',
      packing || '',
      remarks || '',
      certifications || '',
      portOfDelivery || '',
      deliveryTerms || '',
      shippingMethod || '',
      deliveryTimeline || '',
    ];

    await appendToSheet(SHEET_NAME, values, 'A:T');

    return res.status(200).json({ success: true, message: 'Product lead submitted successfully' });
  } catch (error) {
    console.error('Error submitting product lead:', error);
    return res.status(500).json({ error: 'Failed to submit product lead' });
  }
}
