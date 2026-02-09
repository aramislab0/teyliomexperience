'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
    images: string[]
    currentIndex: number
    isOpen: boolean
    onClose: () => void
    onNavigate: (index: number) => void
    projectName: string
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onNavigate, projectName }: LightboxProps) {
    const goNext = useCallback(() => {
        onNavigate((currentIndex + 1) % images.length)
    }, [currentIndex, images.length, onNavigate])

    const goPrev = useCallback(() => {
        onNavigate((currentIndex - 1 + images.length) % images.length)
    }, [currentIndex, images.length, onNavigate])

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') goNext()
            if (e.key === 'ArrowLeft') goPrev()
        }

        window.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose, goNext, goPrev])

    // Touch swipe
    useEffect(() => {
        if (!isOpen) return

        let touchStartX = 0
        let touchEndX = 0

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX
        }

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX
            const diff = touchStartX - touchEndX
            if (Math.abs(diff) > 50) {
                if (diff > 0) goNext()
                else goPrev()
            }
        }

        window.addEventListener('touchstart', handleTouchStart)
        window.addEventListener('touchend', handleTouchEnd)

        return () => {
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchend', handleTouchEnd)
        }
    }, [isOpen, goNext, goPrev])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm"
                    onClick={onClose}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Fermer"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>

                    {/* Counter */}
                    <div className="absolute top-4 left-4 z-10 text-white/60 text-sm">
                        {currentIndex + 1} / {images.length}
                    </div>

                    {/* Image container */}
                    <div
                        className="absolute inset-0 flex items-center justify-center p-4 md:p-16"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full h-full max-w-6xl max-h-[85vh]"
                        >
                            <Image
                                src={images[currentIndex]}
                                alt={`${projectName} - Image ${currentIndex + 1}`}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Navigation buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                                aria-label="Image précédente"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); goNext(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                                aria-label="Image suivante"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
