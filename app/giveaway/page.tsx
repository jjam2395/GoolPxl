import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar,
  CheckCircle2,
  Gift,
  MessageCircle,
  Play,
  ShieldCheck,
  Trophy,
} from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Giveaway Oficial | GoolPxl',
  description:
    'Giveaway oficial de GoolPxl: participa por una gift card de Steam, Xbox, PlayStation o Google Play.',
}

const giftCards = ['Steam', 'Xbox', 'PlayStation', 'Google Play']

const pointRules = [
  'Comentar un video: +1 punto',
  'Ser el primer comentario: +3 puntos',
  'Responder la pregunta secreta de forma coherente: +3 puntos',
  'Participar en un video despues de haber comentado anteriormente: bonus de +2 puntos',
]

const importantRules = [
  'Solo se permitira una participacion valida por persona/cuenta.',
  'El primer comentario debe ser legitimo y relacionado con el video.',
  'Los comentarios spam o intentos de manipulacion podran causar descalificacion inmediata.',
  'Los participantes deben mantener visibles sus comentarios hasta finalizar el giveaway.',
  'GoolPxl se reserva el derecho de verificar manualmente todas las participaciones.',
]

const winnerSteps = [
  'Se revisaran los puntos acumulados.',
  'Se preparara la lista final de oportunidades.',
  'El ganador sera elegido con Wheel of Names durante un LIVE.',
]

export default function GiveawayPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/hero-banner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-success/20 via-transparent to-accent/10" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-background/60 px-4 py-2 text-sm font-semibold text-accent backdrop-blur-sm">
              <Gift className="size-4" />
              Giveaway oficial GoolPxl
            </div>

            <h1 className="font-display text-5xl font-bold leading-tight text-foreground md:text-7xl">
              Gana una <span className="text-accent">gift card</span> apoyando
              al canal
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
              Gracias por apoyar a GoolPxl. Para celebrar a la comunidad, el
              ganador podra elegir una gift card de Steam, Xbox, PlayStation o
              Google Play.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-muted bg-background/70 p-5 backdrop-blur-sm">
                <div className="text-sm font-semibold text-accent">
                  Valor del premio
                </div>
                <p className="mt-2 text-lg text-foreground">
                  $200 MXN o 10 USD
                </p>
                <p className="text-sm text-muted-foreground">
                  Para participantes fuera de Mexico.
                </p>
              </div>
              <div className="rounded-lg border border-muted bg-background/70 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                  <Calendar className="size-4" />
                  Duracion
                </div>
                <p className="mt-2 text-lg text-foreground">
                  23/05/2026 - 20/06/2026
                </p>
                <p className="text-sm text-muted-foreground">
                  Cierra al iniciar Alemania vs Costa de Marfil.
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.youtube.com/@goolpxl?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-success px-8 py-4 text-lg font-normal text-success-foreground shadow-md transition-all hover:bg-opacity-90 hover:shadow-lg"
              >
                <Play className="size-5 fill-current" />
                Ir al canal
              </a>
              <Link
                href="#como-participar"
                className="inline-flex items-center justify-center rounded-lg border-2 border-success-foreground px-8 py-4 text-lg font-normal text-success-foreground transition-all hover:border-success hover:text-success"
              >
                Ver reglas
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-white/10 bg-card shadow-[0_32px_80px_-24px_rgba(0,0,0,0.85)] lg:aspect-[16/12]">
              <Image
                src="/giveaway-prize.webp"
                alt="Gift cards del giveaway GoolPxl"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 640px"
                className="object-contain p-3 md:p-4"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 md:p-7">
                <div className="font-headline text-3xl font-bold text-accent">
                  Steam, Xbox, PlayStation o Google Play
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  El ganador elige la gift card. Participar es gratis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-participar" className="bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Requisito <span className="text-accent">obligatorio</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Para participar oficialmente y aceptar estos terminos y
              condiciones, debes comentar al menos una vez en cualquier video
              participante la frase:
            </p>
          </div>

          <div className="flex flex-col gap-5 rounded-lg border border-accent/50 bg-card p-7 md:flex-row md:items-center md:p-9">
            <MessageCircle className="size-8 flex-none text-accent md:size-10" />
            <p className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
              "Yo tambien soy parte de GoolPxl"
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Premio y <span className="text-accent">fechas</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              La dinamica comienza el 23/05/2026 y termina el 20/06/2026. Ya
              no podran sumarse puntos una vez que comience el partido Alemania
              vs Costa de Marfil.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {giftCards.map((card) => (
              <div
                key={card}
                className="flex items-center gap-4 rounded-lg border border-muted bg-background p-5 transition-colors hover:border-accent"
              >
                <Gift className="size-6 flex-none text-accent" />
                <span className="text-lg text-foreground">{card}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Como ganar <span className="text-accent">puntos</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Solo contara 1 punto por comentarios por cada video. No importa
              cuantos comentarios hagas en el mismo video.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {pointRules.map((rule) => (
              <div
                key={rule}
                className="flex items-start gap-4 rounded-lg border border-muted bg-card p-6 transition-colors hover:border-accent"
              >
                <CheckCircle2 className="mt-0.5 size-7 flex-none text-success" />
                <p className="text-lg leading-relaxed text-foreground">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-lg border border-muted bg-card p-6 leading-relaxed text-muted-foreground">
            La respuesta de la pregunta secreta no necesita ser correcta, pero
            si coherente y relacionada con el tema planteado, ya que en algunas
            ocasiones sera una pregunta de opinion.
          </p>
        </div>
      </section>

      <section className="bg-secondary px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Como funciona el{' '}
              <span className="text-accent">sorteo</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Cada 3 puntos equivalen a 1 oportunidad dentro del sorteo.
              Mientras mas puntos tengas, mas veces aparecera tu nombre y
              mayores seran tus probabilidades de ganar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {['3 puntos = 1 oportunidad', '9 puntos = 3 oportunidades', '15 puntos = 5 oportunidades'].map(
              (example) => (
                <div
                  key={example}
                  className="flex items-center gap-4 rounded-lg border border-muted bg-background p-5 transition-colors hover:border-accent"
                >
                  <Trophy className="size-6 flex-none text-accent" />
                  <span className="text-lg text-foreground">{example}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-muted bg-card p-7">
            <MessageCircle className="mb-5 size-7 text-accent" />
            <h3 className="font-headline text-2xl font-bold text-foreground">
              Likes y comentarios
            </h3>
            <p className="mt-3 text-muted-foreground">
              YouTube no permite verificar publicamente quien dio like. Por
              eso, se asumira que toda persona que participe mediante
              comentarios tambien apoyo el video con un like.
            </p>
          </div>
          <div className="rounded-lg border border-muted bg-card p-7">
            <ShieldCheck className="mb-5 size-7 text-accent" />
            <h3 className="font-headline text-2xl font-bold text-foreground">
              Tabla de puntos
            </h3>
            <p className="mt-3 text-muted-foreground">
              Al final de cada video se publicara una tabla actualizada con los
              puntos acumulados por cada participante.
            </p>
          </div>
          <div className="rounded-lg border border-muted bg-card p-7">
            <Trophy className="mb-5 size-7 text-accent" />
            <h3 className="font-headline text-2xl font-bold text-foreground">
              Reclamo del premio
            </h3>
            <p className="mt-3 text-muted-foreground">
              El ganador tendra 48 horas para responder despues del anuncio
              oficial. Si no responde, se podra elegir un nuevo ganador.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Reglas <span className="text-accent">importantes</span>
            </h2>
            <div className="mt-8 space-y-4">
              {importantRules.map((rule) => (
                <p
                  key={rule}
                  className="rounded-lg border border-muted bg-background p-5 text-muted-foreground"
                >
                  {rule}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              Eleccion del <span className="text-accent">ganador</span>
            </h2>
            <div className="mt-8 space-y-4">
              {winnerSteps.map((step) => (
                <p
                  key={step}
                  className="rounded-lg border border-muted bg-background p-5 text-muted-foreground"
                >
                  {step}
                </p>
              ))}
            </div>
            <p className="mt-6 rounded-lg border border-accent/40 bg-background p-5 text-muted-foreground">
              Este giveaway no esta patrocinado ni administrado por YouTube,
              Steam, Xbox, PlayStation o Google Play. Participar es
              completamente gratuito. La decision final sobre validacion de
              participaciones correspondera a GoolPxl.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
