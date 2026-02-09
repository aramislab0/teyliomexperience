'use client'

import { Button } from '@/components/ui/Button'

export function ContactForm() {
    return (
        <form className="space-y-6 bg-dark-lighter p-8 rounded-sm border border-white/5">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
                    Nom complet
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-dark border border-dark-gray text-light placeholder:text-light/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre nom"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-light mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-dark border border-dark-gray text-light placeholder:text-light/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="votre@email.com"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-light mb-2">
                    Téléphone
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-dark border border-dark-gray text-light placeholder:text-light/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="+221 XX XXX XX XX"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-dark border border-dark-gray text-light placeholder:text-light/40 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Parlez-nous de votre projet..."
                />
            </div>

            <Button type="submit" className="w-full" size="lg">
                Envoyer
            </Button>
        </form>
    )
}
