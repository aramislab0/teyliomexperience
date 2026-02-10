import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// Interface pour les données du lead
interface LeadData {
  nom: string;
  email: string;
  telephone: string;
  projet: 'Divinity' | 'Lynea' | 'Shiramba' | 'Coralie';
  message: string;
}

// Configuration Google Sheets
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

export async function POST(request: NextRequest) {
  try {
    console.log('[API] Début de traitement de la soumission de lead');

    // 1. Validation des variables d'environnement
    if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
      console.error('[API] Variables d\'environnement manquantes');
      return NextResponse.json(
        { success: false, error: 'Configuration serveur invalide' },
        { status: 500 }
      );
    }

    // 2. Parser les données de la requête
    let leadData: LeadData;
    try {
      leadData = await request.json();
      console.log('[API] Données reçues:', { ...leadData, message: leadData.message?.substring(0, 50) });
    } catch (error) {
      console.error('[API] Erreur de parsing JSON:', error);
      return NextResponse.json(
        { success: false, error: 'Données invalides' },
        { status: 400 }
      );
    }

    // 3. Validation des données
    const { nom, email, telephone, projet, message } = leadData;
    
    if (!nom || !email || !telephone || !projet || !message) {
      console.error('[API] Champs manquants:', { nom: !!nom, email: !!email, telephone: !!telephone, projet: !!projet, message: !!message });
      return NextResponse.json(
        { success: false, error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation du format email (simple)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Format email invalide' },
        { status: 400 }
      );
    }

    // 4. Authentification avec Google Sheets API
    console.log('[API] Authentification avec Google Service Account...');
    const auth = new google.auth.JWT({
      email: SERVICE_ACCOUNT_EMAIL,
      key: PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // 5. Préparation des données pour Google Sheets
    const timestamp = new Date().toISOString();
    const rowData = [timestamp, nom, email, telephone, projet, message];

    console.log('[API] Écriture dans Google Sheets...');

    // 6. Ajout de la ligne dans Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A:F', // Colonnes A à F (Timestamp, Nom, Email, Téléphone, Projet, Message)
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('[API] Lead enregistré avec succès:', { nom, email, projet });

    return NextResponse.json(
      {
        success: true,
        message: 'Votre demande a été enregistrée avec succès',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[API] Erreur lors de l\'enregistrement du lead:', error);
    
    // Log plus détaillé de l'erreur
    if (error instanceof Error) {
      console.error('[API] Message d\'erreur:', error.message);
      console.error('[API] Stack trace:', error.stack);
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Une erreur est survenue lors de l\'enregistrement. Veuillez réessayer.',
      },
      { status: 500 }
    );
  }
}

// Méthode GET pour vérifier que l'API est active
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'API de soumission de leads active',
  });
}
