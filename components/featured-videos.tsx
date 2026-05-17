'use client'

import { useState } from 'react'
import Image from 'next/image'

interface VideoCard {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  views: string
  url: string
}

const videos: VideoCard[] = [
  {
    id: '1',
    title: 'The Last Dance: Messi, CR7, Modric',
    description: 'Las últimas figuras del futbol moderno jugarán su último mundial, ¿Estás listo para verlos por última vez? ¿Aún tienen el nivel que demostraron antes?',
    thumbnail: '/videos/1_last_dance.webp',
    duration: '6:22',
    views: '1.5k',
    url: 'https://youtu.be/twRGUAKEXpk'
  },
  {
    id: '2',
    title: 'Las Joyas del mundial 2026',
    description: 'Los futbolistas más jovenes que no debes perder de vista, a su corta edad tienen contratos millonarios y la presión del mundo entero por verlos brillar',
    thumbnail: '/videos/2_las_joyas.webp',
    duration: '11:40',
    views: '902',
    url: 'https://youtu.be/IXHFRAEP8MU'
  },
  {
    id: '3',
    title: 'Las historias más crueles de los Mundiales: Ronaldo, Mbappe, Neymar…',
    description: 'Ser el mejor del mundo, hacer el partido de tu vida, ser la estrella del equipo local y el más habilidoso, no es suficiente para ser campeon del mundo',
    thumbnail: '/videos/4_espina_clavada.png',
    duration: '18:08',
    views: '8',
    url: 'https://youtu.be/al4Nkcnl-O0'
  }
]

function VideoCard({ video, index }: { video: VideoCard; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative h-48 md:h-31 lg:h-40 xl:h-57 rounded-lg overflow-hidden bg-muted mb-6 cursor-pointer">
        <a 
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full h-full">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />

        {/* Duration badge */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 rounded text-sm text-foreground font-medium">
          {video.duration}
        </div>

        {/* Play button on hover */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-l-12 border-l-success-foreground border-y-8 border-y-transparent ml-1" />
            </div>
          </div>
        )}
        </a>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-success transition-colors line-clamp-1">
          {video.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {video.description}
        </p>
        <div className="flex items-center justify-end">
          <a 
          href={video.url}
          target="_blank"
          rel="noopener noreferrer">
          <span className="text-xs text-success font-semibold group-hover:translate-x-2 transition-transform">
            Ver ahora →
          </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export function FeaturedVideos() {
  return (
    <section id="featured" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Episodios <span className="text-accent">Épicos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explora los últimos capítulos que revelan la mística del mundial.
          </p>
        </div>

        {/* Videos grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
