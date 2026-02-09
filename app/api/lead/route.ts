import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // TODO: Intégrer avec Google Apps Script (Phase 6)
        // const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL
        // if (!googleScriptUrl) {
        //   throw new Error('GOOGLE_SCRIPT_URL not configured')
        // }

        // Placeholder response
        console.log('Lead received:', body)

        return NextResponse.json({
            success: true,
            message: 'Lead enregistré (placeholder)'
        })
    } catch (error) {
        console.error('Error processing lead:', error)
        return NextResponse.json(
            { success: false, error: 'Erreur lors de l\'enregistrement' },
            { status: 500 }
        )
    }
}
