import { google } from 'googleapis';

const SPREADSHEET_ID = '1FEOYHBfSG8l5yxarkJBY1HDayHyjKy86uDB7v2LSbfQ';

// Sheet names
export const SHEETS = {
  PRODUCT_LEADS: 'Product Lead Data',
  SERVICE_LEADS: 'Service page data',
  CONTACT_LEADS: 'Contact page data',
};

// Initialize Google Sheets API
export async function getGoogleSheetsClient() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: './service-account-key.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client as any });
    
    return sheets;
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error);
    throw error;
  }
}

// Append data to a specific sheet
export async function appendToSheet(sheetName: string, values: any[]) {
  try {
    const sheets = await getGoogleSheetsClient();
    
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw error;
  }
}
