// Partners.jsx — flat architecture
// No external deps beyond React

const PARTNERS = [
  { name: 'Meta Business',     abbr: 'META' },
  { name: 'Google Partners',   abbr: 'GOOGLE' },
  { name: 'TikTok for Business', abbr: 'TIKTOK' },
  { name: 'HubSpot',           abbr: 'HUBSPOT' },
  { name: 'Canva for Teams',   abbr: 'CANVA' },
  { name: 'Notion',            abbr: 'NOTION' },
  { name: 'Lark Suite',        abbr: 'LARK' },
  { name: 'Shopify',           abbr: 'SHOPIFY' },
]

// Duplicate for seamless infinite loop
const TRACK = [...PARTNERS, ...PARTNERS]

const S = {
  section: {
    backgroundColor: '#0c1910',
    borderTop:    '1px solid rgba(182,196,182,0.07)',
    borderBottom: '1px solid rgba(182,196,182,0.07)',
    padding: '32px 0',
    overflow: 'hidden',
  },
  label: {
    fontFamily: 'Montserrat', fontSize: 9, fontWeight: 700,
    letterSpacing: '0.24em', color: 'rgba(238,240,229,0.28)',
    textTransform: 'uppercase', textAlign: 'center',
    marginBottom: 24,
  },
  track: {
    display: 'flex',
    width: 'max-content',
    animation: 'marquee 32s linear infinite',
    gap: 0,
  },
  chip: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 32px',
    margin: '0 12px',
    border: '1px solid rgba(238,240,229,0.09)',
    fontFamily: 'Montserrat', fontSize: 11, fontWeight: 700,
    letterSpacing: '0.18em', color: 'rgba(238,240,229,0.35)',
    whiteSpace: 'nowrap', flexShrink: 0,
    transition: 'color 0.3s, border-color 0.3s',
  },
}

export default function Partners() {
  return (
    <section style={S.section}>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .partner-chip:hover {
          color: #B6C4B6 !important;
          border-color: rgba(182,196,182,0.3) !important;
        }
      `}</style>

      <p style={S.label}>ĐỐI TÁC & NỀN TẢNG</p>

      <div style={{ overflow: 'hidden' }}>
        <div style={S.track}>
          {TRACK.map((p, i) => (
            <span key={i} className="partner-chip" style={S.chip}>
              {p.abbr}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
