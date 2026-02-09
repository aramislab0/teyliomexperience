import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Gallery } from '@/components/sections/Gallery'
import { getProjectBySlug } from '@/lib/projects'

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug)
    if (!project) return { title: 'Projet non trouvé' }

    return {
        title: `${project.name} | TEYLIOM EXPERIENCE`,
        description: project.tagline,
    }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug)
    if (!project) return notFound()

    return (
        <>
            <Header />
            <div className="min-h-screen bg-background pt-20">
                {/* Hero Section */}
                <section className="relative h-[70vh] w-full overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url("${project.coverImage}")` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

                    <div className="relative z-10 flex h-full flex-col justify-end p-6 lg:p-12 max-w-[1440px] mx-auto">
                        <div className="max-w-3xl space-y-4 pb-8 animate-enter">
                            <div className="flex items-center gap-3">
                                <span className="rounded bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                                    {project.location}
                                </span>
                                {project.status === 'available' && (
                                    <span className="rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                                        Disponible maintenant
                                    </span>
                                )}
                            </div>
                            <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-widest text-white drop-shadow-2xl">
                                {project.name}
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-white/90">
                                {project.tagline}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Description */}
                <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12">
                    <div className="grid gap-12 md:grid-cols-[2fr,1fr]">
                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">À propos</p>
                                <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                                    Une résidence <span className="font-bold">d&apos;exception</span>
                                </h2>
                            </div>
                            <p className="text-lg leading-relaxed text-slate-600">
                                {project.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Équipements</p>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <div className="flex size-5 items-center justify-center rounded-full bg-primary/10">
                                                <span className="material-symbols-outlined text-[14px] text-primary">check</span>
                                            </div>
                                        </div>
                                        <span className="text-sm text-slate-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-12">
                    <div className="mb-8">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Galerie</p>
                        <h2 className="text-3xl font-light text-slate-900">
                            Découvrez <span className="font-bold">{project.name}</span>
                        </h2>
                    </div>
                    <Gallery images={project.images} projectName={project.name} />
                </section>

                {/* CTA Section */}
                <section className="border-y border-slate-200 bg-slate-50 py-16">
                    <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
                                    Intéressé par <span className="font-bold text-primary">{project.name}</span> ?
                                </h2>
                                <p className="text-slate-600">
                                    Remplissez notre formulaire de contact et notre équipe vous contactera sous 24h pour organiser une visite.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                {project.virtualTours.length > 0 && (
                                    <Link
                                        href={`/visite/${project.slug}`}
                                        className="flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-primary bg-white px-6 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">360</span>
                                        <span>Visite virtuelle 360°</span>
                                    </Link>
                                )}
                                <Link
                                    href={`/contact?projet=${project.slug}`}
                                    className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                                >
                                    <span>Je suis intéressé</span>
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full bg-white py-8 text-center border-t border-slate-200">
                    <div className="mx-auto max-w-[1440px] px-6">
                        <p className="text-xs text-slate-500">© 2026 Teyliom Group. Tous droits réservés.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}
