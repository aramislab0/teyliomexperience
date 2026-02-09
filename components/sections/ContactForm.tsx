'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { getAllProjects } from '@/lib/projects'

const schema = z.object({
    firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
    lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Adresse email invalide'),
    phone: z.string()
        .min(8, 'Numéro de téléphone invalide')
        .regex(/^[+]?[\d\s-]+$/, 'Format de numéro invalide'),
    project: z.string().min(1, 'Veuillez sélectionner un projet'),
    honeypot: z.string().max(0), // Anti-spam
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const preselectedProject = searchParams.get('projet')

    const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
    const projects = getAllProjects()

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '+221 ',
            project: preselectedProject || '',
            honeypot: '',
        },
    })

    // Préremplir le projet si paramètre URL
    useEffect(() => {
        if (preselectedProject) {
            setValue('project', preselectedProject)
        }
    }, [preselectedProject, setValue])

    const onSubmit = async (data: FormData) => {
        // Anti-spam check
        if (data.honeypot) {
            router.push('/merci')
            return
        }

        setStatus('loading')

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    phone: data.phone,
                    project: data.project,
                }),
            })

            if (response.ok) {
                router.push('/merci')
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot - invisible pour les humains */}
            <input
                type="text"
                {...register('honeypot')}
                className="absolute -left-[9999px]"
                tabIndex={-1}
                autoComplete="off"
            />

            {/* Prénom */}
            <div>
                <label htmlFor="firstName" className="block text-light/80 text-sm mb-2">
                    Prénom *
                </label>
                <input
                    id="firstName"
                    type="text"
                    {...register('firstName')}
                    className={`w-full bg-dark-lighter border ${errors.firstName ? 'border-red-500' : 'border-white/10 focus:border-primary'
                        } rounded-sm px-4 py-3 text-light outline-none transition-colors`}
                    placeholder="Votre prénom"
                />
                {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                )}
            </div>

            {/* Nom */}
            <div>
                <label htmlFor="lastName" className="block text-light/80 text-sm mb-2">
                    Nom *
                </label>
                <input
                    id="lastName"
                    type="text"
                    {...register('lastName')}
                    className={`w-full bg-dark-lighter border ${errors.lastName ? 'border-red-500' : 'border-white/10 focus:border-primary'
                        } rounded-sm px-4 py-3 text-light outline-none transition-colors`}
                    placeholder="Votre nom"
                />
                {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-light/80 text-sm mb-2">
                    Email *
                </label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`w-full bg-dark-lighter border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-primary'
                        } rounded-sm px-4 py-3 text-light outline-none transition-colors`}
                    placeholder="votre@email.com"
                />
                {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            {/* Téléphone */}
            <div>
                <label htmlFor="phone" className="block text-light/80 text-sm mb-2">
                    Téléphone *
                </label>
                <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className={`w-full bg-dark-lighter border ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-primary'
                        } rounded-sm px-4 py-3 text-light outline-none transition-colors`}
                    placeholder="+221 77 123 45 67"
                />
                {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                )}
            </div>

            {/* Projet */}
            <div>
                <label htmlFor="project" className="block text-light/80 text-sm mb-2">
                    Projet qui vous intéresse *
                </label>
                <select
                    id="project"
                    {...register('project')}
                    className={`w-full bg-dark-lighter border ${errors.project ? 'border-red-500' : 'border-white/10 focus:border-primary'
                        } rounded-sm px-4 py-3 text-light outline-none transition-colors`}
                >
                    <option value="">Sélectionnez un projet</option>
                    {projects.map((project) => (
                        <option key={project.slug} value={project.slug}>
                            {project.name} — {project.location}
                        </option>
                    ))}
                </select>
                {errors.project && (
                    <p className="text-red-400 text-sm mt-1">{errors.project.message}</p>
                )}
            </div>

            {/* Error message */}
            {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-sm p-4">
                    <p className="text-red-400 text-sm">
                        Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                    </p>
                </div>
            )}

            {/* Submit */}
            <Button
                type="submit"
                className="w-full"
                size="lg"
                isLoading={status === 'loading'}
                disabled={status === 'loading'}
            >
                Envoyer ma demande
            </Button>

            {/* Privacy notice */}
            <p className="text-light/40 text-xs text-center">
                En soumettant ce formulaire, vous acceptez que vos données soient traitées par Teyliom Properties
                pour répondre à votre demande. Voir notre politique de confidentialité.
            </p>
        </form>
    )
}
