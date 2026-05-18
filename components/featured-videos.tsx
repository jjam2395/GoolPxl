'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface VideoCard {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  views: string
  url: string
}

const SCROLL_START_THRESHOLD = 8
const ROW_PEEK = '3rem'

const videos: VideoCard[] = [
  {
    id: '1',
    title: 'Las historias más crueles de los Mundiales: Ronaldo, Mbappe, Neymar…',
    description:
      'El Mundial tiene historias inconclusas. Hay 6 jugadores a los que el torneo nunca saldó su deuda. En 2026, tres todavía pueden cobrarla. Ronaldo Nazário tuvo la redención. Ronaldinho, Robben y Neymar nunca pudieron escribir su capítulo. Y ahora Kane, Mbappé y Cristiano Ronaldo llegan al Mundial 2026 con la espina más abierta del fútbol moderno. Este video recorre 6 historias de genios que el torneo más grande del mundo trató diferente a lo que merecían, y termina con una sola pregunta: ¿quién cobra la deuda en 2026?',
    thumbnail: '/videos/4_espina_clavada.png',
    duration: '14:54',
    views: '16',
    url: 'https://youtu.be/al4Nkcnl-O0',
  },
  {
    id: '2',
    title: 'México 70: El Mundial que Cambió el Fútbol para Siempre (y Nadie te Contó por Qué)',
    description:
      'Ser México 70 no fue solo un torneo: fue una cortina de humo política, una negociación televisiva que cambió los horarios para siempre, y el escenario del partido más dramático de la historia mundialista. En este video descubrirás por qué Italia 4 – Alemania 3 tiene una placa grabada en el Azteca, qué papel jugó Televisa en los horarios de los partidos, y qué le dejó México 70 al fútbol moderno.',
    thumbnail: '/videos/3_mexico_70.webp',
    duration: '18:08',
    views: '1110',
    url: 'https://youtu.be/al4Nkcnl-O0',
    
  },
  {
    id: '3',
    title: 'Las Joyas del mundial 2026',
    description:
      'Lamine Yamal. Arda Güler. Endrick. Franco Mastantuono. Cuatro nombres que el fútbol ya decidió que son el futuro. Cuatro chicos de entre 17 y 21 años que en 2026 van a cargar con el peso de sus países en el escenario más grande del mundo. Yamal y Güler vivieron en carne propia lo que es fallar cuando más se espera de ti. Y eso fue solo la Champions League. En el Mundial no habrá Bellingham al lado. No habrá sistema que absorba el error. Solo ellos. Y la presión de una nación entera. En este video no analizamos si son buenos — eso ya está fuera de discusión. Analizamos algo más difícil: qué le pasa a un genio de 18 años cuando todo un país lo convierte en su única esperanza.',
    thumbnail: '/videos/2_las_joyas.webp',
    duration: '11:40',
    views: '902',
    url: 'https://youtu.be/IXHFRAEP8MU',
  },
  {
    id: '4',
    title: 'The Last Dance: Messi, CR7, Modric',
    description:
      'Las últimas figuras del futbol moderno jugarán su último mundial, ¿Estás listo para verlos por última vez? ¿Aún tienen el nivel que demostraron antes?',
    thumbnail: '/videos/1_last_dance.webp',
    duration: '6:22',
    views: '1.5k',
    url: 'https://youtu.be/twRGUAKEXpk',
  },
]

function VideoCardItem({ video }: { video: VideoCard }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className={cn(
        'group/card flex-shrink-0',
        'w-[min(420px,calc(min(100vw-3rem,77rem)-var(--row-peek)))]',
        'transition-[transform,box-shadow] duration-500 ease-out',
        'hover:scale-[1.03] hover:-translate-y-1 hover:z-10',
        'hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.65)]',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted mb-5 cursor-pointer ring-1 ring-white/5">
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full h-full"
        >
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 1024px) 85vw, 420px"
            className={cn(
              'object-cover transition-transform duration-700 ease-out',
              isHovered ? 'scale-110' : 'scale-100',
            )}
          />

          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20 transition-opacity duration-500',
              isHovered ? 'opacity-100' : 'opacity-60',
            )}
          />
          <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors duration-500" />

          <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm rounded text-xs text-foreground font-medium tracking-wide">
            {video.duration}
          </div>

          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center transition-opacity duration-300',
              isHovered ? 'opacity-100' : 'opacity-0',
            )}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-success rounded-full flex items-center justify-center shadow-lg scale-95 group-hover/card:scale-100 transition-transform duration-300">
              <div className="w-0 h-0 border-l-[12px] border-l-success-foreground border-y-8 border-y-transparent ml-1" />
            </div>
          </div>
        </a>
      </div>

      <div>
        <h3 className="font-headline text-lg md:text-xl font-bold text-foreground mb-2 group-hover/card:text-success transition-colors duration-300 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {video.description}
        </p>
        <div className="flex items-center justify-end">
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <span className="text-xs text-foreground group-hover/card:text-success font-semibold inline-block group-hover/card:translate-x-1 transition-transform duration-300">
              Ver episodio →
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}

export function FeaturedVideos() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollEdges = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    setCanScrollLeft(el.scrollLeft > SCROLL_START_THRESHOLD)

    const maxScroll = el.scrollWidth - el.clientWidth
    setCanScrollRight(
      maxScroll > SCROLL_START_THRESHOLD &&
        el.scrollLeft < maxScroll - SCROLL_START_THRESHOLD,
    )
  }, [])

  const scrollByDirection = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const distance = Math.min(el.clientWidth * 0.75, 440)

    if (direction === 'left' && el.scrollLeft <= distance) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }

    el.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    el.scrollLeft = 0
    updateScrollEdges()

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
      if (el.scrollWidth <= el.clientWidth) return

      e.preventDefault()
      const maxScroll = el.scrollWidth - el.clientWidth
      el.scrollLeft = Math.max(0, Math.min(el.scrollLeft + e.deltaY, maxScroll))
    }

    let scrollEndTimer: ReturnType<typeof setTimeout>
    const onScroll = () => {
      updateScrollEdges()
      clearTimeout(scrollEndTimer)
      scrollEndTimer = setTimeout(() => {
        if (el.scrollLeft > 0 && el.scrollLeft <= SCROLL_START_THRESHOLD) {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        }
      }, 150)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    el.addEventListener('wheel', onWheel, { passive: false })

    const onResize = () => updateScrollEdges()
    window.addEventListener('resize', onResize)

    return () => {
      clearTimeout(scrollEndTimer)
      el.removeEventListener('scroll', onScroll)
      el.removeEventListener('wheel', onWheel)
      window.removeEventListener('resize', onResize)
    }
  }, [updateScrollEdges])

  return (
    <section
      id="featured"
      className="bg-background overflow-hidden pt-28 pb-24 md:pt-32 md:pb-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Episodios <span className="text-accent">Épicos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Explora los últimos capítulos que revelan la mística del mundial.
          </p>
        </div>

        <div className="relative group/row">
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-y-0 left-0 z-20 w-8 sm:w-12',
            'bg-gradient-to-r from-background via-background/80 to-transparent',
            'transition-opacity duration-500',
            canScrollLeft ? 'opacity-100' : 'opacity-0',
          )}
        />
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-y-0 right-0 z-20 w-10 sm:w-14',
            'bg-gradient-to-l from-background via-background/90 to-transparent',
            'transition-opacity duration-500',
            canScrollRight ? 'opacity-100' : 'opacity-70',
          )}
        />

        <button
          type="button"
          onClick={() => scrollByDirection('left')}
          aria-label="Ver episodios anteriores"
          className={cn(
            'absolute left-0 sm:left-1 top-[28%] z-30 -translate-y-1/2',
            'flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full',
            'text-muted-foreground hover:text-foreground',
            'bg-background/30 hover:bg-background/50 backdrop-blur-[2px]',
            'transition-all duration-500 ease-out',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30',
            canScrollLeft
              ? 'pointer-events-auto opacity-50 sm:opacity-60 md:opacity-35 md:group-hover/row:opacity-80'
              : 'pointer-events-none opacity-0',
          )}
        >
          <ChevronLeft className="size-6 sm:size-8" strokeWidth={1.5} />
        </button>

        <button
          type="button"
          onClick={() => scrollByDirection('right')}
          aria-label="Ver más episodios"
          className={cn(
            'absolute right-0 sm:right-2 top-[28%] z-30 -translate-y-1/2',
            'flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full',
            'text-muted-foreground hover:text-foreground',
            'bg-background/25 hover:bg-background/45 backdrop-blur-[2px]',
            'transition-all duration-500 ease-out',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30',
            canScrollRight
              ? 'pointer-events-auto opacity-55 sm:opacity-65 md:opacity-35 md:group-hover/row:opacity-80'
              : 'pointer-events-none opacity-0',
          )}
        >
          <ChevronRight className="size-6 sm:size-8" strokeWidth={1.5} />
        </button>

        <div
          ref={scrollRef}
          className={cn(
            'flex gap-4 md:gap-5 overflow-x-auto overscroll-x-contain',
            'scroll-smooth',
            'touch-pan-x [-webkit-overflow-scrolling:touch]',
            '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
            'pb-1 pr-6 md:pr-8',
          )}
          style={{
            ['--row-peek' as string]: ROW_PEEK,
          }}
        >
          {videos.map((video) => (
            <VideoCardItem key={video.id} video={video} />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
