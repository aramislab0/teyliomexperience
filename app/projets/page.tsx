import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { getAllProjects } from '@/lib/projects'

export const metadata = {
    title: 'Nos Projets | TEYLIOM EXPERIENCE',
}

export default function ProjectsPage() {
    const projects = getAllProjects()

    return (
        <>
            <Header />
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
                <main className="flex grow flex-col pt-24 pb-12 px-6 lg:px-10 max-w-[1440px] mx-auto w-full">
                    {/* Title */}
                    <div className="mb-10 flex flex-col items-start gap-4 animate-enter">
                        <h2 className="text-3xl font-light text-slate-900 md:text-5xl lg:text-6xl tracking-tight">
                            Choisissez votre <span className="font-bold text-primary">Destination</span>
                        </h2>
                        <div className="h-1 w-20 rounded-full bg-primary" />
                        <p className="max-w-2xl text-base text-slate-500 font-light md:text-lg">
                            Découvrez notre collection de chefs-d'œuvre architecturaux conçus pour l'investisseur visionnaire.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 min-h-[600px] grow">
                        {projects.map((project, index) => (
                            <Link
                                key={project.id}
                                href={`/projets/${project.slug}`}
                                className={`card-project group relative flex aspect-[4/3] w-full flex-col justify-end animate-enter delay-${(index + 1) * 100}`}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center"
                                    style={{ backgroundImage: `url("${project.coverImage}")` }}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col p-6 lg:p-10">
                                    {/* Status Badge */}
                                    <div className="mb-2 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
                                        <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${project.status === 'available'
                                                ? 'bg-primary text-white'
                                                : 'bg-slate-200 text-slate-700'
                                            }`}>
                                            {project.status === 'available' ? 'Disponible' : 'Bientôt'}
                                        </span>
                                        <span className="text-xs text-slate-600 font-medium">{project.location}</span>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div>
                                            <h3 className="font-display text-4xl font-bold uppercase tracking-widest text-slate-900 md:text-5xl">
                                                {project.name}
                                            </h3>
                                            <p className="mt-2 text-sm text-slate-600 line-clamp-2 max-w-sm">
                                                {project.tagline}
                                            </p>
                                        </div>
                                        <div className="flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-900 backdrop-blur-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                                            <span className="material-symbols-outlined">arrow_outward</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>

                {/* Bottom CTA Bar */}
                <div className="sticky bottom-0 z-40 w-full border-t border-slate-200 bg-white/95 backdrop-blur">
                    <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row lg:px-10">
                        <div className="hidden flex-col gap-1 md:flex">
                            <p className="text-sm font-bold text-slate-900">Nos projets vous intéressent ?</p>
                            <p className="text-xs text-slate-500">Passez la visite et exprimez votre intérêt directement.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-light px-6 text-sm font-bold tracking-wide text-white transition-all hover:shadow-lg hover:shadow-primary/25 md:w-auto md:min-w-[240px]"
                        >
                            <span>Accéder au formulaire</span>
                            <span className="material-symbols-outlined text-[18px]">assignment</span>
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <footer className="w-full bg-slate-50 py-6 text-center border-t border-slate-200">
                    <p className="text-xs text-slate-500">© 2026 Teyliom Group. Tous droits réservés.</p>
                </footer>
            </div>
        </>
    )
}
