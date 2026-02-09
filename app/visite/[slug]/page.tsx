export default function VRTourPage({ params }: { params: { slug: string } }) {
    return (
        <main className="min-h-screen">
            <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-display text-primary mb-4">
                        Visite 360° : {params.slug}
                    </h1>
                    <p className="text-light/70">
                        Visionneuse VR à venir...
                    </p>
                </div>
            </div>
        </main>
    )
}
