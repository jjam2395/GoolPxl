import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-muted">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <Image
              src="/Logo-GP-transparent.webp"
              alt="GoolPxl"
              loading="eager"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            GoolPxl
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#featured" className="text-md text-muted-foreground hover:text-foreground transition-colors">
            Historias
          </Link>
          <Link href="#about" className="text-md text-muted-foreground hover:text-foreground transition-colors">
            Nosotros
          </Link>
          <a
            href="https://www.youtube.com/@goolpxl?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-success text-success-foreground rounded-lg hover:bg-opacity-90 transition-all text-md font-normal shadow-md hover:shadow-lg"
          >
            Suscribirse
          </a>
        </nav>
      </div>
    </header>
  )
}
