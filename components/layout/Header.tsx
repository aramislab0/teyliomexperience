'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Header() {
    const pathname = usePathname()
    const isHome = pathname === '/'

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 px-6 py-4',
                isHome ? 'bg-transparent' : 'bg-dark/90 backdrop-blur-sm border-b border-white/5'
            )}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-primary font-display text-xl tracking-wider">
                    TEYLIOM
                </Link>

                <div className="flex items-center gap-6">
                    <Link
                        href="/projets"
                        className="text-light/70 hover:text-primary transition-colors text-sm tracking-wide"
                    >
                        Nos Projets
                    </Link>
                    <Link
                        href="/contact"
                        className="btn-outline text-sm px-4 py-2"
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </motion.header>
    )
}
