export function Footer() {
    return (
        <footer className="bg-dark border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-primary font-display text-lg mb-2">TEYLIOM</p>
                <p className="text-light/50 text-sm">
                    © 2026 Teyliom Properties. Tous droits réservés.
                </p>
                <p className="text-light/30 text-xs mt-4">
                    <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
                    {' · '}
                    <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
                </p>
            </div>
        </footer>
    )
}
