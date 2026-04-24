const LINKS = {
  'Dịch Vụ':    ['Performance Ads', 'Data & Analytics', 'Content Creator', 'Edify Studio'],
  'Đào Tạo':    ['AI Filmmaking', 'TikTok Livestream', 'Khoá Học Doanh Nghiệp', 'Lộ Trình Cá Nhân'],
  'Công Ty':    ['Về Edify Labs', 'Blog', 'Case Studies', 'Tuyển Dụng'],
}

const POLICIES = ['Chính Sách Bảo Mật', 'Điều Khoản Sử Dụng', 'Chính Sách Hoàn Tiền']

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#060e09', borderTop: '1px solid rgba(182,196,182,0.07)' }}>

      {/* Main grid */}
      <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: '#304D30' }}>
                <span style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 22,
                               color: '#EEF0E5', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  E
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 13,
                               letterSpacing: '0.15em', color: '#EEF0E5', lineHeight: 1 }}>
                  EDIFY LABS
                </span>
                <span style={{ fontFamily: 'Montserrat', fontWeight: 500, fontSize: 7.5,
                               letterSpacing: '0.22em', color: 'rgba(238,240,229,0.3)', lineHeight: 1 }}>
                  FROM KNOWLEDGE TO EXECUTION
                </span>
              </div>
            </div>

            <p style={{ fontFamily: 'Montserrat', fontSize: 12, fontWeight: 400,
                        color: 'rgba(238,240,229,0.38)', lineHeight: 1.7, maxWidth: 240 }}>
              Education &amp; Growth Lab. Học để làm, làm để đo lường, đo để tối ưu.
            </p>

            {/* Social micro-links */}
            <div className="flex gap-4 mt-6">
              {['TIKTOK', 'FACEBOOK', 'YOUTUBE'].map((s) => (
                <a key={s} href="#"
                   style={{ fontFamily: 'Montserrat', fontSize: 9, fontWeight: 700,
                             letterSpacing: '0.18em', color: 'rgba(238,240,229,0.3)',
                             textDecoration: 'none', transition: 'color 0.2s' }}
                   onMouseEnter={(e) => (e.target.style.color = '#B6C4B6')}
                   onMouseLeave={(e) => (e.target.style.color = 'rgba(238,240,229,0.3)')}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(LINKS).map(([col, items]) => (
            <div key={col}>
              <p style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                          letterSpacing: '0.2em', color: 'rgba(238,240,229,0.4)',
                          textTransform: 'uppercase', marginBottom: 16 }}>
                {col}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex',
                           flexDirection: 'column', gap: 10 }}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#"
                       style={{ fontFamily: 'Montserrat', fontSize: 12, fontWeight: 500,
                                 color: 'rgba(238,240,229,0.45)', textDecoration: 'none',
                                 letterSpacing: '0.03em', transition: 'color 0.2s' }}
                       onMouseEnter={(e) => (e.target.style.color = '#EEF0E5')}
                       onMouseLeave={(e) => (e.target.style.color = 'rgba(238,240,229,0.45)')}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(238,240,229,0.05)' }}>
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <span style={{ fontFamily: 'Montserrat', fontSize: 9, fontWeight: 600,
                         letterSpacing: '0.22em', color: 'rgba(238,240,229,0.22)',
                         textTransform: 'uppercase' }}>
            © 2026 EDIFY LABS TRAINING AND CONSULTING. ALL RIGHTS RESERVED.
          </span>

          {/* Policy links */}
          <div className="flex items-center gap-5">
            {POLICIES.map((p, i) => (
              <span key={p} className="flex items-center gap-5">
                <a href="#"
                   style={{ fontFamily: 'Montserrat', fontSize: 9, fontWeight: 600,
                             letterSpacing: '0.16em', color: 'rgba(238,240,229,0.22)',
                             textDecoration: 'none', transition: 'color 0.2s',
                             textTransform: 'uppercase' }}
                   onMouseEnter={(e) => (e.target.style.color = 'rgba(238,240,229,0.55)')}
                   onMouseLeave={(e) => (e.target.style.color = 'rgba(238,240,229,0.22)')}>
                  {p}
                </a>
                {i < POLICIES.length - 1 && (
                  <span style={{ color: 'rgba(238,240,229,0.12)', fontSize: 9 }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
