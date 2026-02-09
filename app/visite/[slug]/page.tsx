import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'

interface Props {
    params: { slug: string }
}

export function generateStaticParams() {
    return getAllProjects()
        .filter(p => p.virtualTours.length > 0)
        .map((project) => ({ slug: project.slug }))
}

export default function VirtualTourPage({ params }: Props) {
    const project = getProjectBySlug(params.slug)

    if (!project || project.virtualTours.length === 0) {
        notFound()
    }

    return (
        <div className="h-screen w-screen bg-dark flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-display text-primary mb-4">
                    Visite virtuelle - {project.name}
                </h1>
                <p className="text-light/60">
                    Visionneuse 360° sera intégrée en Phase 4
                </p>
            </div>
            {/* PannellumViewer sera intégré en Phase 4 */}
        </div>
    )
}
