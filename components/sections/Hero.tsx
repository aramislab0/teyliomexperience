'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(201, 168, 76, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(201, 168, 76, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-6"
                >
                    Bienvenue chez
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl text-light mb-4"
                >
                    TEYLIOM
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-primary text-2xl md:text-3xl tracking-[0.2em] font-light mb-8"
                >
                    EXPERIENCE
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-light/60 text-lg md:text-xl max-w-md mx-auto mb-12"
                >
                    Découvrez nos résidences d&apos;exception à Dakar
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Link href="/projets">
                        <Button size="lg">
                            Explorer nos projets
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown className="w-6 h-6 text-primary/50" />
                </motion.div>
            </motion.div>
        </section>
    )
}
