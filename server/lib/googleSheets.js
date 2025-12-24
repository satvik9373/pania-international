import { google } from 'googleapis';

/**
 * Get authenticated Google Sheets client using environment variables
 * @returns {Promise<import('googleapis').sheets_v4.Sheets>}
 */
export async function getGoogleSheetsClient() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error(
      'Missing required environment variables: GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, or GOOGLE_SHEET_ID'
    );
  }

  // Handle private key - support both escaped newlines (\n) and actual newlines
  const formattedPrivateKey = privateKey.replace(/\\n/g, '\n');

  const auth = new google.auth.GoogleAuth({
    credentials: {
      type: 'service_account',
      client_email: clientEmail,
      private_key: formattedPrivateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  return sheets;
}

/**
 * Append data to a specific sheet
 * @param {string} sheetName - Name of the sheet tab
 * @param {any[]} values - Array of values to append as a row
 * @param {string} range - Column range (e.g., 'A:G')
 */
export async function appendToSheet(sheetName, values, range = 'A:Z') {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error('Missing GOOGLE_SHEET_ID environment variable');
  }

  const sheets = await getGoogleSheetsClient();
  const fullRange = `'${sheetName}'!${range}`;

  console.log('[GoogleSheets] Appending to sheet:', {
    spreadsheetId,
    range: fullRange,
    rowData: values,
  });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: fullRange,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [values],
    },
  });

  console.log('[GoogleSheets] Append response:', {
    updatedRange: response.data.updates?.updatedRange,
    updatedRows: response.data.updates?.updatedRows,
    updatedCells: response.data.updates?.updatedCells,
  });

  return response.data;
}

/**
 * Get current date and time in Indian Standard Time
 * @returns {{ date: string, time: string }}
 */
export function getISTDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
  const time = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
  return { date, time };
}
