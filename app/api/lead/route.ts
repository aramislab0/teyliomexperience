import { NextRequest, NextResponse } from 'next/server'

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        // Validation basique
        if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.project) {
            return NextResponse.json(
                { success: false, error: 'Champs requis manquants' },
                { status: 400 }
            )
        }

        // Vérifier que l'URL est configurée
        if (!GOOGLE_SCRIPT_URL) {
            console.error('GOOGLE_SCRIPT_URL non configurée')
            // En dev, on simule le succès
            if (process.env.NODE_ENV === 'development') {
                console.log('DEV MODE - Lead simulé:', data)
                return NextResponse.json({ success: true })
            }
            return NextResponse.json(
                { success: false, error: 'Configuration serveur manquante' },
                { status: 500 }
            )
        }

        // Envoi vers Google Sheets
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                project: data.project,
                source: 'teyliom-experience',
            }),
        })

        if (!response.ok) {
            throw new Error(`Google Script error: ${response.status}`)
        }

        const result = await response.json()

        if (!result.success) {
            throw new Error(result.error || 'Erreur inconnue')
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Lead submission error:', error)
        return NextResponse.json(
            { success: false, error: 'Erreur lors de l\'envoi' },
            { status: 500 }
        )
    }
}
