import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nom, email, telephone, projet, message } = body;

        if (!nom || !email || !telephone || !projet) {
            return NextResponse.json(
                { error: 'Champs manquants' },
                { status: 400 }
            );
        }

        const emailBody = {
            _subject: `🔥 Teyliom Lead - ${projet}`,
            Nom: nom,
            Email: email,
            Telephone: telephone,
            Projet: projet,
            Message: message || 'Aucun message',
            Date: new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Dakar' }),
            _template: 'box',
            _captcha: 'false',
            _cc: 'dkonte26@gmail.com'
        };

        const response = await fetch('https://formsubmit.co/ajax/diama.konte@teyliom.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(emailBody)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('FormSubmit failed');
        }

        return NextResponse.json({
            success: true,
            message: 'Demande envoyée'
        });

    } catch (error) {
        console.error('Backup error:', error);
        return NextResponse.json(
            { error: 'Erreur serveur' },
            { status: 500 }
        );
    }
}
