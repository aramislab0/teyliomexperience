import { Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { ContactForm } from '@/components/sections/ContactForm'
import { Mail, BadgeHelp } from 'lucide-react'

export const metadata = {
    title: 'Contact | TEYLIOM EXPERIENCE',
}

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-16 bg-background">
                <div className="max-w-2xl mx-auto px-6">
                    {/* Title */}
                    <div className="text-center mb-12 animate-enter">
                        <div className="mb-4 inline-flex items-center justify-center">
                            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                                <Mail size={28} className="text-primary" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
                            Parlons de <span className="font-bold text-primary">votre projet</span>
                        </h1>
                        <div className="mx-auto h-1 w-20 rounded-full bg-primary mb-6" />
                        <p className="text-slate-600 max-w-xl mx-auto">
                            Remplissez ce formulaire et notre équipe vous contactera sous <span className="font-semibold">24h</span> pour répondre à toutes vos questions.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-lg shadow-gray-200/60 animate-enter delay-100">
                        <Suspense fallback={
                            <div className="flex items-center justify-center py-12">
                                <div className="flex items-center gap-3 text-slate-500">
                                    <div className="size-5 animate-spin rounded-full border-2 border-slate-300 border-t-primary" />
                                    <span>Chargement...</span>
                                </div>
                            </div>
                        }>
                            <ContactForm />
                        </Suspense>
                    </div>

                    {/* Help Box */}
                    <div className="mt-8 rounded-lg border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-6 animate-enter delay-200">
                        <div className="flex items-start gap-4">
                            <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                                <BadgeHelp size={20} className="text-gold" />
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-bold text-slate-900">Besoin d'aide ?</p>
                                <p className="text-sm text-slate-600">
                                    Notre équipe est disponible du lundi au vendredi de 9h à 18h pour répondre à vos questions par téléphone au <span className="font-semibold text-primary">338296259</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
