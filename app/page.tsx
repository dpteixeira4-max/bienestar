import { VslPlayer } from '@/components/vsl-player'

export default function Page() {
  return (
    <main className="vsl-page">
      <header className="site-header">
        <h1>BIENESTAR</h1>
      </header>

      <div className="ticker" aria-label="Actualizaciones diarias sobre bienestar y salud">
        <div className="ticker-track">
          <span>ACTUALIZACIONES DIARIAS SOBRE BIENESTAR Y SALUD</span>
          <span aria-hidden="true">ACTUALIZACIONES DIARIAS SOBRE BIENESTAR Y SALUD</span>
        </div>
      </div>

      <section className="player-section" aria-label="Video sobre bienestar y salud">
        <VslPlayer />
      </section>

      <footer>© Todos los derechos reservados</footer>
    </main>
  )
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}
