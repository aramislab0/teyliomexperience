'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/projects'
import { PannellumViewer } from '@/components/vr/PannellumViewer'
import { VRButton } from '@/components/vr/VRButton'
import { GyroscopeToggle } from '@/components/vr/GyroscopeToggle'
import { X, ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react'

interface Props {
    params: { slug: string }
}

export default function VirtualTourPage({ params }: Props) {
    const router = useRouter()
    const project = getProjectBySlug(params.slug)

    const [currentTourIndex, setCurrentTourIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [gyroscopeEnabled, setGyroscopeEnabled] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)

    // Vérifier que le projet existe et a des visites virtuelles
    if (!project || project.virtualTours.length === 0) {
        notFound()
    }

    const tours = project.virtualTours
    const currentTour = tours[currentTourIndex]
    const hasMultipleTours = tours.length > 1

    // Gestion fullscreen
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement)
        }
        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }, [])

    const toggleFullscreen = async () => {
        if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen()
        } else {
            await document.exitFullscreen()
        }
    }

    const handleEnterVR = () => {
        // Pour l&apos;instant, on affiche un message
        // L&apos;intégration A-Frame complète est post-event
        alert('Mode VR casque en cours de développement.\nUtilisez le mode navigateur pour l\'instant.')
    }

    const handleClose = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen()
        }
        router.push(`/projets/${project.slug}`)
    }

    const goNextTour = () => {
        setIsLoading(true)
        setCurrentTourIndex((prev) => (prev + 1) % tours.length)
    }

    const goPrevTour = () => {
        setIsLoading(true)
        setCurrentTourIndex((prev) => (prev - 1 + tours.length) % tours.length)
    }

    return (
        <div className="fixed inset-0 bg-dark z-50">
            {/* Loading overlay */}
            {isLoading && (
                <div className="absolute inset-0 z-20 bg-dark flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-light/60">Chargement de la visite...</p>
                    </div>
                </div>
            )}

            {/* Pannellum Viewer */}
            <PannellumViewer
                tour={currentTour}
                gyroscopeEnabled={gyroscopeEnabled}
                onLoad={() => setIsLoading(false)}
            />

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-dark/80 to-transparent">
                <div className="flex items-center justify-between">
                    {/* Left: Close + Project name */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleClose}
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            aria-label="Fermer"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                        <div>
                            <p className="text-primary text-sm">{project.name}</p>
                            <p className="text-white font-medium">{currentTour.name}</p>
                        </div>
                    </div>

                    {/* Right: Controls */}
                    <div className="flex items-center gap-2">
                        <GyroscopeToggle
                            enabled={gyroscopeEnabled}
                            onToggle={setGyroscopeEnabled}
                        />
                        <VRButton onEnterVR={handleEnterVR} />
                        <button
                            onClick={toggleFullscreen}
                            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            aria-label={isFullscreen ? 'Quitter plein écran' : 'Plein écran'}
                        >
                            {isFullscreen ? (
                                <Minimize className="w-5 h-5 text-white" />
                            ) : (
                                <Maximize className="w-5 h-5 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Tour navigation (if multiple tours) */}
            {hasMultipleTours && (
                <>
                    <button
                        onClick={goPrevTour}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Visite précédente"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={goNextTour}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Visite suivante"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Tour indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-dark/50 backdrop-blur-sm px-4 py-2 rounded-full">
                        {tours.map((tour, index) => (
                            <button
                                key={tour.id}
                                onClick={() => {
                                    setIsLoading(true)
                                    setCurrentTourIndex(index)
                                }}
                                className={`w-2 h-2 rounded-full transition-colors ${index === currentTourIndex ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={tour.name}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Bottom info bar */}
            <div className="absolute bottom-4 right-4 z-10 text-right">
                <p className="text-white/40 text-xs">
                    Glissez pour explorer • Pincez pour zoomer
                </p>
            </div>
        </div>
    )
}
