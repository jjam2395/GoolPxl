import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/hero-banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Success green accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-success/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-2 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/Logo-GP-transparent.webp"
              alt="GoolPxl"
              fill
              className="object-contain drop-shadow-2xl filter brightness-110"
              loading="eager"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
          <span className="text-accent">GoolPxl</span>
        </h1>

        {/* Subtitle */}
        <p className="font-display text-lg md:text-3xl font-bold text-foreground max-w-2xl mx-auto leading-relaxed">
        El fútbol que amas, contado como una película
        </p>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        Camino al Mundial 2026: historias, leyendas y momentos que pueden cambiarlo todo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.youtube.com/playlist?list=PLTjzhFbASibxRhraxg73rIZpw-JWkI8t9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-success text-success-foreground rounded-lg hover:bg-opacity-90 transition-all font-normal text-lg shadow-md hover:shadow-lg"
          >
            Iniciar Serie
          </a>
          <a
            href="#featured"
            className="px-8 py-4 border-2 border-success-foreground hover:border-success text-success-foreground rounded-lg hover:text-success transition-all font-normal text-lg"
          >
            Ver Episodios
          </a>
        </div>
      </div>
    </section>
  )
}
