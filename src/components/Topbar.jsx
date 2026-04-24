const TICKER_TEXT = [
  'Khoá học mới: TikTok Livestream Master 2026',
  'AI Filmmaking Masterclass — Khai giảng Tháng 3',
  'Edify Partner: Chi phí 1 nhân sự — Hiệu quả 1 phòng ban',
  'Edify Studio: Sản xuất video chuẩn 4K từ 25tr/tháng',
]

export default function Topbar() {
  const repeated = [...TICKER_TEXT, ...TICKER_TEXT].join('  ·  ')

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-9 bg-topbar flex items-center overflow-hidden"
         style={{ borderBottom: '1px solid rgba(238,240,229,0.07)' }}>

      {/* Ticker */}
      <div className="flex-1 overflow-hidden">
        <div className="ticker-track whitespace-nowrap">
          {[0, 1].map((i) => (
            <span key={i} className="inline-block"
                  style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 500,
                           letterSpacing: '0.1em', color: 'rgba(238,240,229,0.6)',
                           paddingRight: 80 }}>
              {repeated}
              &nbsp;&nbsp;
              <a href="#lead-form"
                 style={{ color: '#B6C4B6', fontWeight: 700, textDecoration: 'none' }}>
                <span className="animate-pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-[#B6C4B6] mr-1.5 align-middle" />
                XEM NGAY →
              </a>
            </span>
          ))}
        </div>
      </div>

      {/* Language toggle */}
      <div className="flex-shrink-0 px-5 flex items-center gap-2"
           style={{ borderLeft: '1px solid rgba(238,240,229,0.07)' }}>
        <button style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                         letterSpacing: '0.14em', color: '#EEF0E5',
                         background: 'none', border: 'none', cursor: 'pointer' }}>
          VI
        </button>
        <span style={{ color: 'rgba(238,240,229,0.25)', fontSize: 10 }}>|</span>
        <button style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 600,
                         letterSpacing: '0.14em', color: 'rgba(238,240,229,0.4)',
                         background: 'none', border: 'none', cursor: 'pointer' }}>
          EN
        </button>
      </div>
    </div>
  )
}
