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
                        className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={image}
                            alt={`${projectName} - Image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 33vw"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors" />

                        {/* Zoom icon on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex size-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                                <span className="material-symbols-outlined text-primary text-[24px]">zoom_in</span>
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
