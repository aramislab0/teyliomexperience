import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// Interface pour les données du lead
interface LeadData {
  nom: string;
  email: string;
  telephone: string;
  projet: 'Divinity' | 'Lynea' | 'Shiramba' | 'Coralie';
  message?: string; // Optional field
}

// Configuration Google Sheets
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

export async function POST(request: NextRequest) {
  console.log('=== DÉBUT API SUBMIT-LEAD ===');

  try {
    // 1. Parse body
    console.log('1. Parsing request body...');
    const leadData: LeadData = await request.json();
    console.log('Body reçu:', JSON.stringify(leadData, null, 2));

    // 2. Validation des données
    console.log('2. Validation des champs...');
    const { nom, email, telephone, projet, message } = leadData;

    if (!nom || !email || !telephone || !projet) {
      console.error('❌ Validation échouée - Champs manquants:', { nom: !!nom, email: !!email, telephone: !!telephone, projet: !!projet });
      return NextResponse.json(
        { success: false, error: 'Les champs nom, email, téléphone et projet sont requis' },
        { status: 400 }
      );
    }
    console.log('✅ Validation OK');

    // 3. Validation des variables d'environnement
    console.log('3. Vérification variables environnement...');
    console.log('SPREADSHEET_ID présent:', !!SPREADSHEET_ID);
    console.log('SERVICE_ACCOUNT_EMAIL présent:', !!SERVICE_ACCOUNT_EMAIL);
    console.log('PRIVATE_KEY présent:', !!PRIVATE_KEY);
    console.log('PRIVATE_KEY longueur:', PRIVATE_KEY?.length);

    if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
      console.error('❌ Variables d\'environnement manquantes');
      return NextResponse.json(
        { success: false, error: 'Configuration serveur invalide' },
        { status: 500 }
      );
    }
    console.log('✅ Variables environnement OK');

    // 4. Format Private Key
    console.log('4. Formatage Private Key...');
    let formattedPrivateKey = PRIVATE_KEY;

    // Si la clé est entre guillemets, les enlever
    if (formattedPrivateKey.startsWith('"') && formattedPrivateKey.endsWith('"')) {
      formattedPrivateKey = formattedPrivateKey.slice(1, -1);
      console.log('Guillemets retirés de la clé');
    }

    // Remplacer les \\n littéraux par de vrais retours à ligne
    formattedPrivateKey = formattedPrivateKey.replace(/\\n/g, '\n');

    console.log('Private Key commence par:', formattedPrivateKey.substring(0, 30));
    console.log('Private Key finit par:', formattedPrivateKey.substring(formattedPrivateKey.length - 30));
    console.log('✅ Private Key formatée');

    // 5. Authentification Google
    console.log('5. Création client Google Auth...');
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: SERVICE_ACCOUNT_EMAIL,
        private_key: formattedPrivateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log('✅ GoogleAuth créé');

    // 6. Obtention du client
    console.log('6. Obtention authClient...');
    const authClient = await auth.getClient();
    console.log('✅ AuthClient obtenu');

    // 7. Client Google Sheets
    console.log('7. Création client Sheets...');
    const sheets = google.sheets({ version: 'v4', auth: authClient as any });
    console.log('✅ Sheets client créé');

    // 8. Préparation des données
    const timestamp = new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Dakar' });
    const rowData = [timestamp, nom, email, telephone, projet, message || ''];

    console.log('8. Données à insérer:', rowData);
    console.log('SpreadsheetId:', SPREADSHEET_ID);
    console.log('Range: Feuille 1!A:F');

    // 9. Ajout de la ligne dans Google Sheets
    console.log('9. Insertion dans Google Sheet...');
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Feuille 1!A:F',  // Updated to use French sheet name
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('✅ Insertion réussie!');
    console.log('Response status:', response.status);
    console.log('Updates:', response.data.updates);
    console.log('=== FIN API SUBMIT-LEAD (SUCCESS) ===');

    return NextResponse.json(
      {
        success: true,
        message: 'Votre demande a été enregistrée avec succès',
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('=== ERREUR API SUBMIT-LEAD ===');
    console.error('Type erreur:', error.constructor.name);
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);

    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }

    if (error.code) {
      console.error('Error code:', error.code);
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Une erreur est survenue lors de l\'enregistrement',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
