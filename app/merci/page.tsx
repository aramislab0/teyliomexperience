import Link from 'next/link';

export default function Merci() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="max-w-lg mx-auto px-4 text-center">
                <div className="mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Demande envoyée avec succès !
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Merci pour votre intérêt pour Teyliom Experience.
                    </p>
                    <p className="text-gray-600 mb-8">
                        Notre équipe vous contactera dans les <strong>24 heures</strong> pour discuter de votre projet.
                    </p>
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="inline-block bg-[#b91c2e] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#9a1625] transition-colors"
                        >
                            Retour à l'accueil
                        </Link>
                        <p className="text-sm text-gray-500">
                            Vous recevrez également un email de confirmation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
