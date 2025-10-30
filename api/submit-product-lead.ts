import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

const SPREADSHEET_ID = '1FEOYHBfSG8l5yxarkJBY1HDayHyjKy86uDB7v2LSbfQ';
const SHEET_NAME = 'Product Lead Data';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
      deliveryTimeline
    } = req.body;

    // Validate required fields
    if (!companyName || !contactPerson || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare data row with separate date and time
    const now = new Date();
    const date = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
    const time = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
    const values = [[
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
      deliveryTimeline || ''
    ]];

    // Append to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:T`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    return res.status(200).json({ success: true, message: 'Product lead submitted successfully' });
  } catch (error) {
    console.error('Error submitting product lead:', error);
    return res.status(500).json({ error: 'Failed to submit product lead' });
  }
}
