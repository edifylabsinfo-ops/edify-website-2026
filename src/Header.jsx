import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const NAV = [
  { label: 'TRANG CHỦ', href: '#' },
  { label: 'DỊCH VỤ',   href: '#solutions' },
  { label: 'GIẢI PHÁP', href: '#solutions' },
  { label: 'GIỚI THIỆU',href: '#' },
  { label: 'BLOG',       href: '#' },
]

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg    = scrolled ? 'rgba(238,240,229,0.97)' : 'transparent'
  const navBlur  = scrolled ? 'blur(12px)'             : 'none'
  const textCol  = scrolled ? '#163020'                : '#EEF0E5'
  const logoBlk  = scrolled ? '#304D30'                : '#EEF0E5'
  const logoE    = scrolled ? '#EEF0E5'                : '#163020'

  return (
    <>
      <header className="fixed left-0 right-0 z-50 transition-all duration-300"
              style={{ top: 36, backgroundColor: navBg, backdropFilter: navBlur,
                       borderBottom: scrolled ? '1px solid rgba(22,48,32,0.1)' : 'none' }}>
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                 style={{ backgroundColor: logoBlk }}>
              <span style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 22,
                             color: logoE, letterSpacing: '-0.03em', lineHeight: 1 }}>E</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 13,
                             letterSpacing: '0.15em', color: textCol,
                             transition: 'color 0.3s', lineHeight: 1 }}>EDIFY LABS</span>
              <span style={{ fontFamily: 'Montserrat', fontWeight: 500, fontSize: 7.5,
                             letterSpacing: '0.22em', color: scrolled ? 'rgba(22,48,32,0.42)' : 'rgba(238,240,229,0.42)',
                             transition: 'color 0.3s', lineHeight: 1 }}>FROM KNOWLEDGE TO EXECUTION</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.label} href={n.href}
                 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10,
                          letterSpacing: '0.18em', color: scrolled ? 'rgba(22,48,32,0.65)' : 'rgba(238,240,229,0.65)',
                          textDecoration: 'none', transition: 'color 0.2s' }}
                 onMouseEnter={(e) => e.target.style.color = textCol}
                 onMouseLeave={(e) => e.target.style.color = scrolled ? 'rgba(22,48,32,0.65)' : 'rgba(238,240,229,0.65)'}>
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#lead-form" className="btn-solid flex items-center gap-2"
               style={{ color: '#EEF0E5', textDecoration: 'none' }}
               onClick={() => { window.fbq?.('track', 'Lead', { content_name: 'header_cta' }); window.dataLayer?.push({ event: 'cta_click', cta_id: 'header_cta' }) }}>
              BẮT ĐẦU MIỄN PHÍ <ArrowRight size={12} />
            </a>
          </div>

          {/* Hamburger */}
          <button className="lg:hidden p-1" onClick={() => setMobileOpen(true)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Menu size={22} color={textCol} />
          </button>
        </div>
      </header>

      {/* FULLSCREEN OVERLAY — mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
             style={{ backgroundColor: '#163020' }}>

          <button className="absolute top-11 right-6" onClick={() => setMobileOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={28} color="#EEF0E5" />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {NAV.map((n, i) => (
              <a key={n.label} href={n.href} onClick={() => setMobileOpen(false)}
                 className="reveal visible"
                 style={{
                   fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(28px, 8vw, 52px)',
                   letterSpacing: '-0.02em', color: '#EEF0E5',
                   textDecoration: 'none', textTransform: 'uppercase',
                   opacity: 0, animation: `reveal-up 0.5s ease ${i * 0.07}s forwards`,
                 }}>
                {n.label}
              </a>
            ))}
          </nav>

          <a href="#lead-form" onClick={() => setMobileOpen(false)}
             className="btn-solid mt-14 flex items-center gap-2"
             style={{ textDecoration: 'none', color: '#EEF0E5' }}>
            BẮT ĐẦU MIỄN PHÍ <ArrowRight size={12} />
          </a>
        </div>
      )}
    </>
  )
}
