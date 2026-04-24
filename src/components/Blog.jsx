// Blog.jsx — flat architecture

import { ArrowRight } from 'lucide-react'

const POSTS = [
  {
    tag:     'PERFORMANCE ADS',
    date:    'THÁNG 3, 2026',
    title:   'Tại Sao 80% Ngân Sách Ads Của Bạn Đang Bị Lãng Phí',
    excerpt: 'Phân tích 42 tài khoản ads thực tế — 3 lỗi cơ bản khiến CPL cao gấp 3 lần benchmark ngành.',
    readTime: '5 PHÚT ĐỌC',
  },
  {
    tag:     'DATA & TRACKING',
    date:    'THÁNG 3, 2026',
    title:   'Setup Meta Pixel Chuẩn Cho Trung Tâm Đào Tạo Trong 30 Phút',
    excerpt: 'Hướng dẫn kỹ thuật từng bước — từ Event đến Custom Conversion, tối ưu cho vòng đời học viên.',
    readTime: '8 PHÚT ĐỌC',
  },
  {
    tag:     'CONTENT SYSTEM',
    date:    'THÁNG 2, 2026',
    title:   'Quy Trình "1 Buổi Quay — Dùng Cả Tháng" Của Edify Studio',
    excerpt: 'Tối ưu chi phí sản xuất video xuống 70% mà không đánh đổi chất lượng — đây là SOP chúng tôi dùng.',
    readTime: '6 PHÚT ĐỌC',
  },
]

export default function Blog() {
  return (
    <section style={{ backgroundColor: '#0c1910', padding: '80px 24px',
                      borderTop: '1px solid rgba(182,196,182,0.07)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: 16, marginBottom: 52,
        }}>
          <div>
            <span style={{
              fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.22em', color: '#B6C4B6', textTransform: 'uppercase',
            }}>
              BLOG & INSIGHT
            </span>
            <h2 style={{
              fontFamily: 'Montserrat', fontWeight: 900,
              fontSize: 'clamp(26px, 3.5vw, 48px)',
              letterSpacing: '-0.03em', color: '#EEF0E5',
              textTransform: 'uppercase', lineHeight: 1, marginTop: 12,
            }}>
              KIẾN THỨC<br />
              <span style={{ color: '#B6C4B6' }}>THỰC CHIẾN.</span>
            </h2>
          </div>
          <a href="#" style={{
            fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10,
            letterSpacing: '0.18em', color: 'rgba(238,240,229,0.45)',
            textDecoration: 'none', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 6,
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#EEF0E5')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(238,240,229,0.45)')}>
            XEM TẤT CẢ <ArrowRight size={12} />
          </a>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {POSTS.map((post, i) => (
            <a key={i} href="#" className="reveal"
               style={{
                 textDecoration: 'none',
                 display: 'flex', flexDirection: 'column',
                 border: '1px solid rgba(238,240,229,0.07)',
                 padding: 28, gap: 16,
                 transition: 'border-color 0.3s',
               }}
               onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(182,196,182,0.25)')}
               onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(238,240,229,0.07)')}>

              {/* Tag + date */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                <span style={{
                  fontFamily: 'Montserrat', fontSize: 9, fontWeight: 700,
                  letterSpacing: '0.2em', color: '#B6C4B6',
                  border: '1px solid rgba(182,196,182,0.2)', padding: '3px 10px',
                  textTransform: 'uppercase',
                }}>
                  {post.tag}
                </span>
                <span style={{
                  fontFamily: 'Montserrat', fontSize: 9, fontWeight: 500,
                  letterSpacing: '0.14em', color: 'rgba(238,240,229,0.3)',
                }}>
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Montserrat', fontWeight: 800, fontSize: 15,
                color: '#EEF0E5', letterSpacing: '-0.01em', lineHeight: 1.3,
                flexGrow: 1,
              }}>
                {post.title}
              </h3>

              {/* Excerpt */}
              <p style={{
                fontFamily: 'Montserrat', fontWeight: 400, fontSize: 12,
                color: 'rgba(238,240,229,0.48)', lineHeight: 1.65,
              }}>
                {post.excerpt}
              </p>

              {/* Read time */}
              <div style={{
                fontFamily: 'Montserrat', fontSize: 9, fontWeight: 700,
                letterSpacing: '0.18em', color: 'rgba(238,240,229,0.28)',
                display: 'flex', alignItems: 'center', gap: 6,
                borderTop: '1px solid rgba(238,240,229,0.06)',
                paddingTop: 14, marginTop: 4,
              }}>
                {post.readTime} <ArrowRight size={10} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
