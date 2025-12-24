import { getGoogleSheetsClient } from '../lib/googleSheets.js';

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
      deliveryTimeline
    } = req.body;

    // Validate required fields
    if (!companyName || !contactPerson || !email) {
      return res.status(400).json({
        error: 'Missing required fields: companyName, contactPerson, and email are required',
      });
    }

    console.log('[Product] Appending row:', { companyName, contactPerson, email, spiceName });

    const sheets = await getGoogleSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Product Lead Data!A:T',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[
          new Date().toLocaleDateString(),          // Date
          new Date().toLocaleTimeString(),          // Time
          companyName || '',                        // Company Name
          contactPerson || '',                      // Contact Person
          designation || '',                        // Designation
          email || '',                              // Email
          phone || '',                              // Phone
          countryOfImport || '',                   // Country of Import
          website || '',                            // Website
          spiceName || '',                          // Spice Name
          gradeType || '',                          // Grade Type
          organicConventional || '',               // Organic/Conventional
          quantity || '',                           // Quantity (MT)
          packing || '',                            // Packing
          remarks || '',                            // Remarks
          certifications || '',                    // Certifications
          portOfDelivery || '',                    // Port of Delivery
          deliveryTerms || '',                     // Delivery Terms
          shippingMethod || '',                    // Shipping Method
          deliveryTimeline || ''                   // Delivery Timeline
        ]]
      }
    });

    console.log('[Product] Lead submitted successfully');

    return res.status(200).json({ success: true, message: 'Product lead submitted successfully' });
  } catch (error) {
    console.error('Error submitting product lead:', error);
    return res.status(500).json({ error: 'Failed to submit product lead' });
  }
}
