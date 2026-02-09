'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
    project: Project
    index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Link href={`/projets/${project.slug}`}>
                <article className="group relative aspect-[4/3] overflow-hidden bg-dark-lighter rounded-sm">
                    {/* Image */}
                    <Image
                        src={project.coverImage}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <p className="text-primary text-xs tracking-[0.2em] uppercase mb-2">
                            {project.location}
                        </p>
                        <h3 className="font-display text-3xl text-light mb-2">
                            {project.name}
                        </h3>
                        <p className="text-light/60 text-sm line-clamp-2">
                            {project.tagline}
                        </p>

                        {/* Hover indicator */}
                        <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-sm">Découvrir</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Status badge */}
                    {project.status !== 'available' && (
                        <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm px-3 py-1 rounded-sm">
                            <span className="text-xs text-primary">
                                {project.status === 'coming_soon' ? 'Bientôt' : 'Complet'}
                            </span>
                        </div>
                    )}
                </article>
            </Link>
        </motion.div>
    )
}
