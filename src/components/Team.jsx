// Team.jsx — flat architecture

const TEAM = [
  {
    name:    'Vũ Đức Anh',
    role:    'CREATIVE DIRECTOR',
    bio:     'Chuyên gia sản xuất nội dung video & thương hiệu cá nhân. 5+ năm xây dựng hệ thống content cho các trung tâm đào tạo lớn tại Việt Nam.',
    tags:    ['VIDEO PRODUCTION', 'BRAND IDENTITY', 'CONTENT SYSTEM'],
    initial: 'A',
    accent:  '#304D30',
  },
  {
    name:    'Lê Quang Khải',
    role:    'TECHNICAL LEAD',
    bio:     'Kiến trúc sư hệ thống tracking & performance ads. Chuyên tối ưu ROAS và xây dựng data pipeline cho doanh nghiệp SME.',
    tags:    ['PERFORMANCE ADS', 'DATA PIPELINE', 'SYSTEM DESIGN'],
    initial: 'K',
    accent:  '#1e3d2a',
  },
  {
    name:    'John Lee',
    role:    'LEAD MENTOR',
    bio:     'International marketing strategist. Đã tư vấn và triển khai chiến lược tăng trưởng cho 40+ doanh nghiệp tại ASEAN.',
    tags:    ['GROWTH STRATEGY', 'INTERNATIONAL', 'HIGH-TICKET SALES'],
    initial: 'J',
    accent:  '#253d2c',
  },
]

const S = {
  section: {
    backgroundColor: '#163020',
    padding: '80px 24px',
  },
  tag: {
    fontFamily: 'Montserrat', fontSize: 9, fontWeight: 700,
    letterSpacing: '0.2em', textTransform: 'uppercase',
    color: '#B6C4B6', border: '1px solid rgba(182,196,182,0.2)',
    padding: '3px 10px', whiteSpace: 'nowrap',
  },
}

function MemberCard({ member }) {
  return (
    <div className="reveal"
         style={{
           border: '1px solid rgba(238,240,229,0.08)',
           padding: 32,
           display: 'flex', flexDirection: 'column', gap: 20,
           transition: 'border-color 0.3s',
         }}
         onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(182,196,182,0.25)')}
         onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(238,240,229,0.08)')}
    >
      {/* Avatar + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{
          width: 52, height: 52, flexShrink: 0,
          backgroundColor: member.accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid rgba(182,196,182,0.15)',
        }}>
          <span style={{
            fontFamily: 'Montserrat', fontWeight: 900, fontSize: 22,
            color: '#EEF0E5', letterSpacing: '-0.02em',
          }}>
            {member.initial}
          </span>
        </div>
        <div>
          <div style={{
            fontFamily: 'Montserrat', fontWeight: 800, fontSize: 16,
            color: '#EEF0E5', letterSpacing: '0.01em', lineHeight: 1.2,
          }}>
            {member.name}
          </div>
          <div style={{
            fontFamily: 'Montserrat', fontWeight: 700, fontSize: 9,
            letterSpacing: '0.22em', color: '#B6C4B6',
            textTransform: 'uppercase', marginTop: 4,
          }}>
            {member.role}
          </div>
        </div>
      </div>

      {/* Bio */}
      <p style={{
        fontFamily: 'Montserrat', fontWeight: 400, fontSize: 13,
        color: 'rgba(238,240,229,0.52)', lineHeight: 1.7,
        flexGrow: 1,
      }}>
        {member.bio}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {member.tags.map((t) => <span key={t} style={S.tag}>{t}</span>)}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section style={S.section}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Heading */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span style={{
            fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.22em', color: '#B6C4B6', textTransform: 'uppercase',
          }}>
            ĐỘI NGŨ
          </span>
          <h2 style={{
            fontFamily: 'Montserrat', fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 52px)',
            letterSpacing: '-0.03em', color: '#EEF0E5',
            textTransform: 'uppercase', lineHeight: 1, marginTop: 16,
          }}>
            CON NGƯỜI<br />
            <span style={{ color: '#B6C4B6' }}>ĐỨNG SAU HỆ THỐNG.</span>
          </h2>
        </div>

        {/* Grid — 1 col mobile, 3 col desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {TEAM.map((m) => <MemberCard key={m.name} member={m} />)}
        </div>
      </div>
    </section>
  )
}
