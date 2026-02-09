import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { getAllProjects } from '@/lib/projects'

export const metadata = {
    title: 'Nos Projets | TEYLIOM EXPERIENCE',
}

export default function ProjectsPage() {
    const projects = getAllProjects()

    return (
        <>
            <Header />
            <main className="min-h-screen pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Title */}
                    <div className="text-center mb-16">
                        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                            Portfolio
                        </p>
                        <h1 className="font-display text-4xl md:text-5xl text-light mb-4">
                            Choisissez votre destination
                        </h1>
                        <p className="text-light/60 max-w-lg mx-auto">
                            Quatre résidences d&apos;exception, quatre visions uniques de l&apos;art de vivre à Dakar.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
