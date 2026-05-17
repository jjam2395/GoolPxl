import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t border-muted px-6 py-18">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">GoolPxl</h3>
            <p className="text-muted-foreground text-sm">
              Mini documentales de fútbol con historias que trascienden el juego.
            </p>
          </div>

          {/* Navigation + Follow: two columns on mobile, separate grid cells on md+ */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Navegación</h4>
              <ul className="space-y-4">
              <li>
                <Link href="#featured" className="text-muted-foreground hover:text-success text-sm transition-colors">
                  Historias
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-success text-sm transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <a href="https://youtube.com/@goolpxl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-success text-sm transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Síguenos</h4>
              <ul className="space-y-4">
              <li>
                <a href="https://instagram.com/goolpxl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-success text-sm transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/goolpxl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-success text-sm transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@goolpxl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-success text-sm transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contacto</h4>
            <a href="mailto:hello@goolpxl.com" className="text-muted-foreground hover:text-success text-sm transition-colors">
              goolpxl@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 GoolPxl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
