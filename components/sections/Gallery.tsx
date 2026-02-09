'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Lightbox } from './Lightbox'

interface GalleryProps {
    images: string[]
    projectName: string
}

export function Gallery({ images, projectName }: GalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openLightbox = (index: number) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
    }

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <motion.div
                        key={image}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-sm group"
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={image}
                            alt={`${projectName} - Image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 33vw"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors" />

                        {/* Zoom icon on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Lightbox
                images={images}
                currentIndex={currentIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNavigate={setCurrentIndex}
                projectName={projectName}
            />
        </>
    )
}
