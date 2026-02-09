'use client'

import Image from 'next/image'

interface GalleryProps {
    images: string[]
    projectName: string
}

export function Gallery({ images, projectName }: GalleryProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="relative aspect-video overflow-hidden rounded-sm bg-dark-gray group cursor-pointer"
                >
                    <Image
                        src={image}
                        alt={`${projectName} - Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                </div>
            ))}
        </div>
    )
}
