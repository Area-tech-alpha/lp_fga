import { google, sheets_v4 } from 'googleapis';

const SPREADSHEET_ID =
  process.env.GOOGLE_SHEETS_SPREADSHEET_ID ?? '1aaqiD2fEm_56WMN5kup38Lj79XEPTPVvHa-Zq1EEqGA';
const SHEET_NAME = 'Leads (aniversário FGA)';

declare global {
  var _sheetsClient: sheets_v4.Sheets | undefined;
}

function getSheetsClient() {
  if (!global._sheetsClient) {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    global._sheetsClient = google.sheets({ version: 'v4', auth });
  }
  return global._sheetsClient;
}

export type SheetLead = {
  id: number | string;
  nome: string;
  email: string;
  telefone: string;
  origem: string;
  createdAt: string | Date;
};

export async function appendLeadToSheet(lead: SheetLead) {
  try {
    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [lead.id, lead.nome, lead.email, lead.telefone, lead.origem, lead.createdAt],
        ],
      },
    });
  } catch (error) {
    console.error('Failed to append lead to Google Sheets:', error);
  }
}
