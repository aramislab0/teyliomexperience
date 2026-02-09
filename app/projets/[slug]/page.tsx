export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
    return (
        <main className="min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-display text-primary mb-8">
                    Projet : {params.slug}
                </h1>
                <p className="text-light/70">
                    Détails du projet à venir...
                </p>
            </div>
        </main>
    )
}
