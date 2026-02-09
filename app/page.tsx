import Link from 'next/link'
import { Building2, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full opacity-10 mix-blend-multiply contrast-125 grayscale"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background/80" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full flex justify-center py-8 md:py-12 animate-enter">
        <div className="flex flex-col items-center gap-3 opacity-90 hover:opacity-100 transition-opacity duration-300">
          <div className="size-10 text-primary">
            <Building2 size={40} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 w-full max-w-5xl mx-auto text-center h-[calc(100vh-200px)]">
        <div className="flex flex-col gap-6 md:gap-8 items-center">
          <div className="flex flex-col items-center gap-2 animate-enter delay-100">
            <h1 className="text-slate-900 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-[0.1em] uppercase drop-shadow-sm">
              Teyliom
            </h1>
            <h1 className="text-slate-500 text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-[0.2em] uppercase">
              Experience
            </h1>
          </div>

          <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent my-4 animate-enter delay-200" />

          <h2 className="text-slate-600 text-sm md:text-lg font-medium leading-relaxed tracking-widest max-w-xl animate-enter delay-200 uppercase">
            Une invitation à l&apos;excellence immobilière
          </h2>

          <div className="h-8 md:h-12" />

          <div className="animate-enter delay-300">
            <Link
              href="/projets"
              className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-primary px-8 py-4 md:px-10 md:py-5 text-white transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(185,28,50,0.39)] hover:shadow-[0_6px_20px_rgba(185,28,50,0.23)]"
            >
              <span className="relative z-10 text-sm md:text-base font-bold uppercase tracking-[0.15em]">
                Entrer dans l&apos;expérience
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 text-center animate-enter delay-300">
        <div className="flex flex-col items-center gap-4">
          <p className="text-slate-500 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase opacity-60">
            © Groupe Teyliom 2026
          </p>
          <div className="flex gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <a className="text-slate-500 hover:text-primary text-[10px] uppercase tracking-wider transition-colors" href="#">
              Confidentialité
            </a>
            <a className="text-slate-500 hover:text-primary text-[10px] uppercase tracking-wider transition-colors" href="#">
              Mentions légales
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
