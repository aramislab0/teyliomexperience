'use client'

import { useEffect, useRef } from 'react'
import type { VirtualTour } from '@/lib/projects'

// Import dynamique pour éviter SSR issues
declare global {
    interface Window {
        pannellum: any
    }
}

interface PannellumViewerProps {
    tour: VirtualTour
    onLoad?: () => void
    gyroscopeEnabled?: boolean
}

export function PannellumViewer({ tour, onLoad, gyroscopeEnabled = false }: PannellumViewerProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const viewerRef = useRef<any>(null)

    useEffect(() => {
        // Charger Pannellum dynamiquement
        const loadPannellum = async () => {
            if (typeof window === 'undefined') return

            // CSS
            if (!document.querySelector('link[href*="pannellum"]')) {
                const css = document.createElement('link')
                css.rel = 'stylesheet'
                css.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css'
                document.head.appendChild(css)
            }

            // JS
            if (!window.pannellum) {
                await new Promise<void>((resolve) => {
                    const script = document.createElement('script')
                    script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js'
                    script.onload = () => resolve()
                    document.head.appendChild(script)
                })
            }

            // Initialiser le viewer
            if (containerRef.current && window.pannellum) {
                try {
                    viewerRef.current = window.pannellum.viewer(containerRef.current, {
                        type: 'equirectangular',
                        panorama: tour.panoramaUrl,
                        autoLoad: true,
                        showControls: true,
                        compass: false,
                        orientationOnByDefault: gyroscopeEnabled,
                        pitch: tour.initialView?.pitch ?? 0,
                        yaw: tour.initialView?.yaw ?? 0,
                        hfov: tour.initialView?.hfov ?? 110,
                        minHfov: 50,
                        maxHfov: 120,
                        mouseZoom: true,
                        draggable: true,
                        friction: 0.15,
                        keyboardZoom: true,
                        crossOrigin: 'anonymous',
                        onLoad: () => {
                            console.log('✅ Panorama loaded successfully:', tour.panoramaUrl)
                            onLoad?.()
                        },
                        onError: (error: string) => {
                            console.error('❌ Pannellum error:', error, 'URL:', tour.panoramaUrl)
                            onLoad?.() // Call onLoad anyway to remove loading overlay
                        },
                    })

                    // Timeout de sécurité : forcer le onLoad après 5 secondes
                    setTimeout(() => {
                        if (onLoad) {
                            console.warn('⏱️ Timeout: forcing onLoad callback')
                            onLoad()
                        }
                    }, 5000)
                } catch (error) {
                    console.error('❌ Failed to initialize Pannellum:', error)
                    onLoad?.() // Remove loading overlay even on error
                }
            }
        }

        loadPannellum()

        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy()
                viewerRef.current = null
            }
        }
    }, [tour, gyroscopeEnabled, onLoad])

    // Toggle gyroscope
    useEffect(() => {
        if (viewerRef.current) {
            if (gyroscopeEnabled) {
                viewerRef.current.startOrientation()
            } else {
                viewerRef.current.stopOrientation()
            }
        }
    }, [gyroscopeEnabled])

    return (
        <div
            ref={containerRef}
            className="w-full h-full"
            style={{ background: '#0A0A0A' }}
        />
    )
}
