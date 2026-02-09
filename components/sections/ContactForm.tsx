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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                <label htmlFor="firstName" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-700">
                    Prénom *
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <span className="material-symbols-outlined text-[20px] text-slate-400">person</span>
                    </div>
                    <input
                        id="firstName"
                        type="text"
                        {...register('firstName')}
                        className={`h-12 w-full rounded-lg border bg-white pl-12 pr-4 text-slate-900 outline-none transition-colors ${errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                            }`}
                        placeholder="Votre prénom"
                    />
                </div>
                {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                )}
            </div>

            {/* Nom */}
            <div>
                <label htmlFor="lastName" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-700">
                    Nom *
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <span className="material-symbols-outlined text-[20px] text-slate-400">badge</span>
                    </div>
                    <input
                        id="lastName"
                        type="text"
                        {...register('lastName')}
                        className={`h-12 w-full rounded-lg border bg-white pl-12 pr-4 text-slate-900 outline-none transition-colors ${errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                            }`}
                        placeholder="Votre nom"
                    />
                </div>
                {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-700">
                    Email *
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <span className="material-symbols-outlined text-[20px] text-slate-400">mail</span>
                    </div>
                    <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className={`h-12 w-full rounded-lg border bg-white pl-12 pr-4 text-slate-900 outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-primary'
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
                <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-700">
                    Téléphone *
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <span className="material-symbols-outlined text-[20px] text-slate-400">call</span>
                    </div>
                    <input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        className={`h-12 w-full rounded-lg border bg-white pl-12 pr-4 text-slate-900 outline-none transition-colors ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                            }`}
                        placeholder="+221 77 123 45 67"
                    />
                </div>
                {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
            </div>

            {/* Projet */}
            <div>
                <label htmlFor="project" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-700">
                    Projet qui vous intéresse *
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <span className="material-symbols-outlined text-[20px] text-slate-400">apartment</span>
                    </div>
                    <select
                        id="project"
                        {...register('project')}
                        className={`h-12 w-full appearance-none rounded-lg border bg-white pl-12 pr-10 text-slate-900 outline-none transition-colors ${errors.project ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-primary'
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
                        <span className="material-symbols-outlined text-[20px] text-slate-400">expand_more</span>
                    </div>
                </div>
                {errors.project && (
                    <p className="mt-1 text-sm text-red-500">{errors.project.message}</p>
                )}
            </div>

            {/* Error message */}
            {status === 'error' && (
                <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4">
                    <span className="material-symbols-outlined text-red-500">error</span>
                    <p className="text-sm text-red-700">
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
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </Button>

            {/* Privacy notice */}
            <p className="text-center text-xs text-slate-400">
                En soumettant ce formulaire, vous acceptez que vos données soient traitées par Teyliom Properties
                pour répondre à votre demande.
            </p>
        </form>
    )
}
