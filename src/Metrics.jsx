import { useRef, useState, useEffect } from 'react'
import useCountUp from '../../hooks/useCountUp.js'

const STATS = [
  { value: 568,  suffix: '+',  label: 'HỌC VIÊN ĐÃ TRIỂN KHAI',   sub: 'across all programs'  },
  { value: 320,  suffix: '%',  label: 'ROAS TRUNG BÌNH',            sub: 'verified client data'  },
  { value: 42,   suffix: 'M+', label: 'NGÂN SÁCH ADS ĐÃ TỐI ƯU',   sub: 'VND managed monthly'  },
  { value: 98,   suffix: '%',  label: 'TỶ LỆ DỰ ÁN ĐÚN TIẾN ĐỘ',   sub: 'delivery on-time'     },
]

function StatCard({ value, suffix, label, sub, trigger }) {
  const count = useCountUp(value, 1800, trigger)
  return (
    <div className="reveal border-l pl-6"
         style={{ borderColor: 'rgba(182,196,182,0.2)' }}>
      <div style={{ fontFamily: 'Montserrat', fontWeight: 900,
                    fontSize: 'clamp(36px, 5vw, 58px)',
                    letterSpacing: '-0.03em', color: '#EEF0E5',
                    lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div className="mt-2" style={{ fontFamily: 'Montserrat', fontWeight: 700,
                                     fontSize: 10, letterSpacing: '0.18em',
                                     color: '#B6C4B6', textTransform: 'uppercase' }}>
        {label}
      </div>
      <div className="mt-0.5" style={{ fontFamily: 'Montserrat', fontWeight: 400,
                                       fontSize: 11, color: 'rgba(238,240,229,0.38)',
                                       letterSpacing: '0.04em' }}>
        {sub}
      </div>
    </div>
  )
}

export default function Metrics() {
  const ref     = useRef(null)
  const [hit, setHit] = useState(false)

  useEffect(() => {
    const el  = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHit(true); obs.disconnect() } }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref}
             className="sticky top-0 z-10 transition-transform duration-500"
             style={{
               backgroundColor: '#0c1910',
               borderTop:    '1px solid rgba(182,196,182,0.08)',
               borderBottom: '1px solid rgba(182,196,182,0.08)',
               padding: '56px 24px',
             }}>
      <div className="max-w-[1280px] mx-auto">

        <div className="reveal mb-10 flex items-center gap-3">
          <span style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                         letterSpacing: '0.22em', color: '#B6C4B6', textTransform: 'uppercase' }}>
            KẾT QUẢ THỰC TẾ
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: 'rgba(182,196,182,0.15)', maxWidth: 60 }} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} trigger={hit} />
          ))}
        </div>
      </div>
    </section>
  )
}
