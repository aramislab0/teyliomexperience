import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        console.log('[BACKUP] Début de traitement FormSubmit');

        const body = await request.json();
        const { nom, email, telephone, projet, message } = body;

        // Validation des champs requis
        if (!nom || !email || !telephone || !projet) {
            return NextResponse.json(
                { success: false, error: 'Les champs nom, email, téléphone et projet sont requis' },
                { status: 400 }
            );
        }

        // Envoi à FormSubmit
        console.log('[BACKUP] Envoi à FormSubmit pour:', email);

        const formSubmitResponse = await fetch('https://formsubmit.co/ajax/niangassane1@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: `🏢 Nouvelle demande Teyliom - ${projet}`,
                'Nom complet': nom,
                'Email': email,
                'Téléphone': telephone,
                'Projet intéressé': projet,
                'Message': message || 'Aucun message',
                _template: 'box',
                _captcha: 'false',
                _cc: 'assane@aramislab.sn'
            })
        });

        const formSubmitData = await formSubmitResponse.json();

        if (!formSubmitResponse.ok) {
            console.error('[BACKUP] Erreur FormSubmit:', formSubmitData);
            throw new Error('FormSubmit error');
        }

        console.log('[BACKUP] Lead enregistré avec succès via FormSubmit');

        return NextResponse.json(
            {
                success: true,
                message: 'Votre demande a été enregistrée avec succès',
            },
            { status: 200 }
        );

    } catch (error: any) {
        console.error('[BACKUP] Erreur:', error.message);
        return NextResponse.json(
            {
                success: false,
                error: 'Une erreur est survenue lors de l\'enregistrement'
            },
            { status: 500 }
        );
    }
}
