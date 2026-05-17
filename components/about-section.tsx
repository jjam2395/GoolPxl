export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre <span className="text-accent">GoolPxl</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              En GoolPxl análizamos el futbol a profundidad para ofrecerte historias que transmiten.</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Gloria, rivalidad y momentos que marcaron generaciones.
            </p>

          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 lg:px-0">
            <div className="bg-background p-6 lg:p-10 rounded-lg border border-muted hover:border-accent transition-colors">
              <div className="text-2xl font-bold text-accent mb-2">Producción Emotiva</div>
              <p className="text-muted-foreground">Historias contadas con emoción y tensión documental.</p>
            </div>

            <div className="bg-background p-6 lg:p-10 rounded-lg border border-muted hover:border-accent transition-colors">
              <div className="text-2xl font-bold text-accent mb-2">Mundiales Legendarios</div>
              <p className="text-muted-foreground">Revive rivalidades, héroes y momentos históricos.</p>
            </div>

            <div className="bg-background p-6 lg:p-10 rounded-lg border border-muted hover:border-accent transition-colors">
              <div className="text-2xl font-bold text-accent mb-2">Análisis Profundo</div>
              <p className="text-muted-foreground">Contexto, historia y fútbol más allá de la superficie.</p>
            </div>

            <div className="bg-background p-6 lg:p-10 rounded-lg border border-muted hover:border-accent transition-colors">
              <div className="text-2xl font-bold text-accent mb-2">Nuevos Episodios</div>
              <p className="text-muted-foreground">Descubre historias cada semana rumbo al Mundial 2026.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
