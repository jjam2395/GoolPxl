import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Gift, Trophy } from 'lucide-react'

export function GiveawaySection() {
  return (
    <section className="bg-secondary px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-background/70 px-4 py-2 text-sm font-semibold text-accent backdrop-blur-sm">
            <Gift className="size-4" />
            Giveaway activo
          </div>

          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Giveaway oficial <span className="text-accent">GoolPxl</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Participa comentando en los videos y suma puntos para ganar una
            gift card de Steam, Xbox, PlayStation o Google Play.
          </p>

          <div className="mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-muted bg-background p-4">
              <div className="text-sm font-semibold text-accent">
                Premio
              </div>
              <p className="mt-1 text-muted-foreground">
                $200 MXN o 10 USD fuera de Mexico
              </p>
            </div>
            <div className="rounded-lg border border-muted bg-background p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                <Calendar className="size-4" />
                Duracion
              </div>
              <p className="mt-1 text-muted-foreground">
                23/05/2026 al 20/06/2026
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/giveaway"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-success px-8 py-4 text-lg font-normal text-success-foreground shadow-md transition-all hover:bg-opacity-90 hover:shadow-lg"
            >
              <Trophy className="size-5" />
              Ver dinamica
            </Link>
          </div>
        </div>

        <Link
          href="/giveaway"
          aria-label="Ir al giveaway de GoolPxl"
          className="group relative mx-auto block w-full max-w-lg"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-muted bg-background shadow-[0_24px_64px_-24px_rgba(0,0,0,0.85)] transition-colors group-hover:border-accent">
            <Image
              src="/giveaway-prize.png"
              alt="Gift cards del giveaway GoolPxl"
              fill
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-105 md:p-4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="font-headline text-2xl font-bold text-accent md:text-3xl">
                Gift Card a elegir
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Cada 3 puntos equivalen a 1 oportunidad en el sorteo.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
