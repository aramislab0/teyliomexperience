'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Building2, ArrowRight, Menu } from 'lucide-react'

export function Header() {
    const pathname = usePathname()
    const isHome = pathname === '/'

    if (isHome) return null

    return (
        <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Building2 size={20} />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold tracking-[0.2em] text-slate-900">TEYLIOM</h1>
                        <span className="block text-[10px] font-medium tracking-[0.3em] text-gold uppercase">Experience</span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/projets" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                        Projets
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden md:flex h-10 items-center gap-2 rounded-lg bg-primary hover:bg-primary-dark px-6 text-sm font-bold text-white transition-all"
                    >
                        <span>Je suis intéressé</span>
                        <ArrowRight size={18} />
                    </Link>
                    <button className="flex size-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 md:hidden">
                        <Menu size={20} />
                    </button>
                </div>
            </div>
        </header>
    )
}
