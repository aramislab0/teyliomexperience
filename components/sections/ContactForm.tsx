'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { User, Mail, Phone, Building2, ChevronDown, Info, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// Interface pour les données du lead (compatible avec l'API)
interface LeadData {
    nom: string;
    email: string;
    telephone: string;
    projet: 'Divinity' | 'Lynea' | 'Shiramba' | 'Coralie';
    message: string;
}

const schema = z.object({
    nom: z.string().min(2, 'Le nom complet doit contenir au moins 2 caractères'),
    email: z.string().email('Adresse email invalide'),
    telephone: z.string()
        .transform((val) => val.replace(/\s/g, '')) // Remove spaces for validation
        .pipe(
            z.string()
                .min(8, 'Numéro de téléphone invalide')
                .regex(/^[+]?[\d-]+$/, 'Format de numéro invalide')
        ),
    projet: z.enum(['Divinity', 'Lynea', 'Shiramba', 'Coralie']),
    message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const projects = [
    { name: 'DIVINITY', slug: 'Divinity', location: 'Mamelles' },
    { name: 'LYNEA', slug: 'Lynea', location: 'Avenue Cheikh Anta Diop' },
    { name: 'SHIRAMBA', slug: 'Shiramba', location: 'Diamniadio' },
    { name: 'CORALIE', slug: 'Coralie', location: 'Corniche Ouest' },
]

export function ContactForm() {
    const router = useRouter()
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            nom: '',
            email: '',
            telephone: '+221 ',
            projet: undefined,
            message: '',
        },
    })

    const onSubmit = async (data: FormData) => {
        setStatus('loading')
        setErrorMessage('')

        try {
            console.log('[Form] Envoi des données:', data)

            const response = await fetch('/api/submit-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (response.ok && result.success) {
                console.log('[Form] Succès!')
                setStatus('success')
                reset() // Réinitialiser le formulaire

                // Redirection après 2 secondes
                setTimeout(() => {
                    router.push('/merci')
                }, 2000)
            } else {
                console.error('[Form] Erreur:', result.error)
                setStatus('error')
                setErrorMessage(result.error || 'Une erreur est survenue')
            }
        } catch (error) {
            console.error('[Form] Erreur réseau:', error)
            setStatus('error')
            setErrorMessage('Erreur de connexion. Veuillez réessayer.')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Nom complet */}
            <div>
                <label htmlFor="nom" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-700">
                    Nom complet *
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <User size={20} className="text-slate-400" />
                    </div>
                    <input
                        id="nom"
                        type="text"
                        {...register('nom')}
                        disabled={status === 'loading'}
                        className={`h-12 w-full rounded-lg border bg-white pl-12 pr-4 text-slate-900 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${errors.nom ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                            }`}
                        placeholder="Prénom et Nom"
                    />
                </div>
                {errors.nom && (
                    <p className="mt-1 text-sm text-red-500">{errors.nom.message}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-700">
                    Email *
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <Mail size={20} className="text-slate-400" />
                    </div>
                    <input
                        id="email"
                        type="email"
                        {...register('email')}
                        disabled={status === 'loading'}
                        className={`h-12 w-full rounded-lg border bg-white pl-12 pr-4 text-slate-900 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                            }`}
                        placeholder="votre@email.com"
                    />
                </div>
                {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
            </div>

            {/* Téléphone */}
            <div>
                <label htmlFor="telephone" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-700">
                    Téléphone *
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <Phone size={20} className="text-slate-400" />
                    </div>
                    <input
                        id="telephone"
                        type="tel"
                        {...register('telephone')}
                        disabled={status === 'loading'}
                        className={`h-12 w-full rounded-lg border bg-white pl-12 pr-4 text-slate-900 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${errors.telephone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                            }`}
                        placeholder="+221 77 123 45 67"
                    />
                </div>
                {errors.telephone && (
                    <p className="mt-1 text-sm text-red-500">{errors.telephone.message}</p>
                )}
            </div>

            {/* Projet */}
            <div>
                <label htmlFor="projet" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-700">
                    Projet qui vous intéresse *
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <Building2 size={20} className="text-slate-400" />
                    </div>
                    <select
                        id="projet"
                        {...register('projet')}
                        disabled={status === 'loading'}
                        className={`h-12 w-full appearance-none rounded-lg border bg-white pl-12 pr-10 text-slate-900 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${errors.projet ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                            }`}
                    >
                        <option value="">Sélectionnez un projet</option>
                        {projects.map((project) => (
                            <option key={project.slug} value={project.slug}>
                                {project.name} — {project.location}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <ChevronDown size={20} className="text-slate-400" />
                    </div>
                </div>
                {errors.projet && (
                    <p className="mt-1 text-sm text-red-500">{errors.projet.message}</p>
                )}
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-700">
                    Message *
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute top-3 left-0 flex items-start pl-4">
                        <MessageSquare size={20} className="text-slate-400" />
                    </div>
                    <textarea
                        id="message"
                        {...register('message')}
                        disabled={status === 'loading'}
                        rows={4}
                        className={`w-full rounded-lg border bg-white pl-12 pr-4 pt-3 pb-3 text-slate-900 outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                            }`}
                        placeholder="Parlez-nous de votre projet..."
                    />
                </div>
                {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
            </div>

            {/* Success message */}
            {status === 'success' && (
                <div className="flex items-start gap-3 rounded-lg bg-green-50 border border-green-200 p-4">
                    <Info size={20} className="text-green-500 flex-shrink-0" />
                    <p className="text-sm text-green-700">
                        ✓ Votre demande a été enregistrée avec succès ! Redirection en cours...
                    </p>
                </div>
            )}

            {/* Error message */}
            {status === 'error' && (
                <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4">
                    <Info size={20} className="text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-700">
                        {errorMessage || 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'}
                    </p>
                </div>
            )}

            {/* Submit */}
            <Button
                type="submit"
                className="w-full"
                size="lg"
                isLoading={status === 'loading'}
                disabled={status === 'loading' || status === 'success'}
            >
                {status === 'loading' ? 'Envoi en cours...' : status === 'success' ? 'Envoyé !' : 'Envoyer ma demande'}
            </Button>

            {/* Privacy notice */}
            <p className="text-center text-xs text-slate-400">
                En soumettant ce formulaire, vous acceptez que vos données soient traitées par Teyliom Properties
                pour répondre à votre demande.
            </p>
        </form>
    )
}
