import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Gallery } from '@/components/sections/Gallery'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'
import { MapPin, Eye } from 'lucide-react'

interface Props {
    params: { slug: string }
}

export function generateStaticParams() {
    return getAllProjects().map((project) => ({
        slug: project.slug,
    }))
}

export function generateMetadata({ params }: Props) {
    const project = getProjectBySlug(params.slug)
    if (!project) return { title: 'Projet non trouvé' }
    return {
        title: `${project.name} | TEYLIOM EXPERIENCE`,
        description: project.tagline,
    }
}

export default function ProjectPage({ params }: Props) {
    const project = getProjectBySlug(params.slug)

    if (!project) {
        notFound()
    }

    const hasVirtualTour = project.virtualTours.length > 0

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero */}
                <section className="relative h-[70vh] min-h-[500px]">
                    <Image
                        src={project.coverImage}
                        alt={project.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center gap-2 text-primary mb-4">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm tracking-wide">{project.location}</span>
                            </div>
                            <h1 className="font-display text-5xl md:text-7xl text-light mb-4">
                                {project.name}
                            </h1>
                            <p className="text-light/80 text-xl max-w-2xl">
                                {project.tagline}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Description */}
                            <div className="lg:col-span-2">
                                <h2 className="font-display text-3xl text-light mb-6">Le Projet</h2>
                                <p className="text-light/70 text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <h3 className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
                                    Équipements
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-light/70">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-28 bg-dark-lighter p-6 rounded-sm border border-white/5">
                                    <h3 className="font-display text-2xl text-light mb-4">
                                        Intéressé ?
                                    </h3>
                                    <p className="text-light/60 text-sm mb-6">
                                        Nos conseillers sont à votre disposition pour vous présenter ce projet.
                                    </p>

                                    <div className="space-y-3">
                                        <Link href={`/contact?projet=${project.slug}`} className="block">
                                            <Button className="w-full">
                                                Je suis intéressé
                                            </Button>
                                        </Link>

                                        {hasVirtualTour && (
                                            <Link href={`/visite/${project.slug}`} className="block">
                                                <Button variant="outline" className="w-full">
                                                    <Eye className="w-4 h-4 mr-2" />
                                                    Visite virtuelle 360°
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                {project.images.length > 0 && (
                    <section className="py-16 bg-dark-lighter">
                        <div className="max-w-7xl mx-auto px-6">
                            <h2 className="font-display text-3xl text-light mb-8 text-center">
                                Galerie
                            </h2>
                            <Gallery images={project.images} projectName={project.name} />
                        </div>
                    </section>
                )}

                {/* Bottom CTA */}
                <section className="py-16">
                    <div className="max-w-2xl mx-auto px-6 text-center">
                        <h2 className="font-display text-3xl text-light mb-4">
                            Prêt à découvrir {project.name} ?
                        </h2>
                        <p className="text-light/60 mb-8">
                            Prenez rendez-vous avec nos conseillers pour une présentation personnalisée.
                        </p>
                        <Link href={`/contact?projet=${project.slug}`}>
                            <Button size="lg">
                                Nous contacter
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
