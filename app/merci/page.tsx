import Link from 'next/link'

export const metadata = {
    title: 'Merci | TEYLIOM EXPERIENCE',
}

export default function ThankYouPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-6">
            {/* Background texture */}
            <div className="absolute inset-0 z-0 opacity-5">
                <div
                    className="h-full w-full bg-cover bg-center mix-blend-multiply grayscale"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920")',
                    }}
                />
            </div>

            <main className="relative z-10 flex flex-col items-center text-center max-w-2xl">
                {/* Success Icon */}
                <div className="mb-8 flex size-20 items-center justify-center rounded-full bg-primary/10 animate-enter">
                    <div className="flex size-16 items-center justify-center rounded-full bg-primary">
                        <span className="material-symbols-outlined text-4xl text-white">check</span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="mb-6 text-4xl md:text-5xl font-light text-slate-900 animate-enter delay-100">
                    Merci pour <span className="font-bold text-primary">votre intérêt</span>.
                </h1>

                {/* Message */}
                <p className="mb-4 text-lg text-slate-600 animate-enter delay-200">
                    Votre demande a été transmise à notre équipe.
                </p>
                <p className="mb-12 text-base text-slate-500 animate-enter delay-200">
                    Un conseiller vous contactera sous <span className="font-semibold text-slate-700">24 heures</span> pour répondre à toutes vos questions et organiser une visite personnalisée de votre projet.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-enter delay-300">
                    <Link
                        href="/"
                        className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                    >
                        <span className="material-symbols-outlined text-[18px]">home</span>
                        <span>Retour à l'accueil</span>
                    </Link>
                    <Link
                        href="/projets"
                        className="flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-slate-200 bg-white px-8 text-sm font-bold text-slate-900 transition-all hover:border-primary hover:text-primary"
                    >
                        <span>Découvrir nos projets</span>
                    </Link>
                </div>

                {/* Additional Info */}
                <div className="mt-16 rounded-lg border border-slate-200 bg-white/60 backdrop-blur-sm p-6 animate-enter delay-400">
                    <div className="flex items-start gap-4">
                        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                            <span className="material-symbols-outlined text-[20px] text-gold">info</span>
                        </div>
                        <div className="text-left">
                            <p className="mb-2 text-sm font-bold text-slate-900">Que se passe-t-il ensuite ?</p>
                            <ul className="space-y-1 text-sm text-slate-600">
                                <li>• Un expert Teyliom vous contactera personnellement</li>
                                <li>• Nous répondrons à toutes vos questions</li>
                                <li>• Nous planifierons une visite du projet qui vous intéresse</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full py-6 text-center">
                <p className="text-xs text-slate-500">© 2026 Teyliom Group. Tous droits réservés.</p>
            </footer>
        </div>
    )
}
