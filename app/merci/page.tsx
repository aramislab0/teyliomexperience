import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'

export const metadata = {
    title: 'Merci | TEYLIOM EXPERIENCE',
}

export default function ThankYouPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center max-w-md">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-primary" />
                    </div>

                    <h1 className="font-display text-4xl text-light mb-4">
                        Merci pour votre intérêt
                    </h1>

                    <p className="text-light/60 mb-8">
                        Nos conseillers vous contacteront dans les plus brefs délais pour vous accompagner dans votre projet.
                    </p>

                    <Link href="/">
                        <Button variant="outline">
                            Retour à l&apos;accueil
                        </Button>
                    </Link>
                </div>
            </main>
        </>
    )
}
