import { useRef } from 'react'
import { ArrowRight, Zap } from 'lucide-react'
import useCanvasEffect  from '../hooks/useCanvasEffect.js'
import useScrollReveal  from '../hooks/useScrollReveal.js'

export default function Hero() {
  const canvasRef = useRef(null)
  useCanvasEffect(canvasRef)
  useScrollReveal()

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden"
             style={{ backgroundColor: '#163020', paddingTop: 100 }}>

      {/* Canvas — particle network */}
      <canvas ref={canvasRef}
              className="absolute inset-0 w-full h-full"
              style={{ pointerEvents: 'none', zIndex: 0 }} />

      {/* Subtle grain overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
        backgroundSize: '180px',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-24 lg:py-32">

        {/* Badge */}
        <div className="reveal flex items-center gap-2.5 mb-8"
             style={{ opacity: 0, animation: 'reveal-up 0.6s ease 0.1s forwards' }}>
          <Zap size={11} color="#B6C4B6" fill="#B6C4B6" />
          <span style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                         letterSpacing: '0.22em', color: '#B6C4B6', textTransform: 'uppercase' }}>
            EDIFY LABS OS V2.0
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(182,196,182,0.25)', maxWidth: 80 }} />
        </div>

        {/* Headline */}
        <h1 className="reveal"
            style={{
              fontFamily: 'Montserrat', fontWeight: 900,
              fontSize: 'clamp(40px, 7vw, 92px)',
              lineHeight: 0.95, letterSpacing: '-0.03em',
              color: '#EEF0E5', textTransform: 'uppercase',
              maxWidth: 900,
              opacity: 0, animation: 'reveal-up 0.7s ease 0.25s forwards',
            }}>
          HỌC ĐỂ LÀM.<br />
          LÀM ĐỂ ĐO LƯỜNG.<br />
          <span style={{ color: '#B6C4B6' }}>ĐO ĐỂ TỐI ƯU.</span>
        </h1>

        {/* Subtext */}
        <p className="reveal mt-8 mb-12"
           style={{
             fontFamily: 'Montserrat', fontWeight: 400, fontSize: 15,
             lineHeight: 1.7, color: 'rgba(238,240,229,0.62)',
             maxWidth: 520,
             opacity: 0, animation: 'reveal-up 0.7s ease 0.4s forwards',
           }}>
          Edify Labs là Education &amp; Growth Lab — nơi Performance Ads, Data Analytics
          và Content Production hội tụ thành hệ thống thực chiến đo lường được.
        </p>

        {/* CTA group */}
        <div className="reveal flex flex-wrap gap-4"
             style={{ opacity: 0, animation: 'reveal-up 0.7s ease 0.55s forwards' }}>
          <a href="#lead-form"
             className="btn-solid flex items-center gap-2"
             style={{ textDecoration: 'none', color: '#EEF0E5' }}
             onClick={() => {
               window.fbq?.('track', 'Lead', { content_name: 'hero_cta_primary' })
               window.dataLayer?.push({ event: 'cta_click', cta_id: 'hero_cta_primary' })
             }}>
            TRẢ NGHIỆM LỘ TRÌNH <ArrowRight size={13} />
          </a>
          <a href="#solutions"
             className="btn-outline flex items-center gap-2"
             style={{ textDecoration: 'none' }}>
            TƯ VẤN CHIẾN LƯỢC
          </a>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, rgba(238,240,229,0.6), transparent)' }} />
          <span style={{ fontFamily: 'Montserrat', fontSize: 8, fontWeight: 700,
                         letterSpacing: '0.25em', color: '#EEF0E5', textTransform: 'uppercase' }}>
            SCROLL
          </span>
        </div>
      </div>
    </section>
  )
}
