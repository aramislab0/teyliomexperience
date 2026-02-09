import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata = {
    title: 'Contact | TEYLIOM EXPERIENCE',
}

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-16 flex items-center">
                <div className="max-w-lg mx-auto px-6 w-full">
                    <div className="text-center mb-10">
                        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                            Contact
                        </p>
                        <h1 className="font-display text-4xl text-light mb-4">
                            Parlons de votre projet
                        </h1>
                        <p className="text-light/60">
                            Nos conseillers sont à votre disposition pour répondre à toutes vos questions.
                        </p>
                    </div>

                    <ContactForm />
                </div>
            </main>
            <Footer />
        </>
    )
}
