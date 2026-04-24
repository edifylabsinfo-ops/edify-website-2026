// Faq.jsx — flat architecture
// Accordion with CSS max-height transition, zero external deps

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'Edify Labs phù hợp với ai?',
    a: 'Cá nhân đang làm Content Creator, Freelancer Marketing, hoặc doanh nghiệp SME trong ngành đào tạo, F&B, và dịch vụ — những ai muốn xây hệ thống Marketing dựa trên dữ liệu thay vì cảm tính.',
  },
  {
    q: 'Cam kết hiệu quả như thế nào?',
    a: 'Với gói Edify Partner: cam kết số lượng Lead tối thiểu theo ngân sách. Nếu tháng đầu không đạt KPI, hoàn 30% phí dịch vụ hoặc làm miễn phí tháng tiếp theo cho đến khi đạt. Mọi cam kết được ghi rõ trong hợp đồng.',
  },
  {
    q: 'Tôi cần chuẩn bị gì trước khi bắt đầu?',
    a: 'Chỉ cần: (1) Quyền truy cập Fanpage/Tài khoản Ads, (2) Sản phẩm/Dịch vụ đã rõ ràng, (3) Ngân sách tối thiểu 10 triệu/tháng cho phần chạy Ads. Edify Labs lo phần còn lại.',
  },
  {
    q: 'Khác gì so với Agency thông thường?',
    a: 'Agency truyền thống làm thay và báo cáo chỉ số ảo (Like, Reach). Edify Labs cam kết bằng số liệu kinh doanh thật (Lead, CPL, ROAS) và minh bạch 100% dữ liệu — bạn thấy mọi thứ real-time, không qua trung gian.',
  },
  {
    q: 'Thời gian hợp đồng tối thiểu là bao lâu?',
    a: 'Gói Agency: tối thiểu 3 tháng (đủ thời gian để test, optimize và thấy kết quả bền vững). Gói Studio: có thể bắt đầu từng tháng. Gói E-learning: truy cập trọn đời sau khi mua.',
  },
  {
    q: 'Làm sao để bắt đầu nhanh nhất?',
    a: 'Điền form tư vấn bên dưới — chuyên viên sẽ liên hệ trong 24 giờ. Sau cuộc gọi 30 phút, bạn sẽ có ngay bản đề xuất kế hoạch và KPI cam kết cụ thể.',
  },
]

function FaqItem({ item, index, open, toggle }) {
  const isOpen = open === index

  return (
    <div style={{
      borderBottom: '1px solid rgba(238,240,229,0.08)',
      transition: 'border-color 0.2s',
    }}>
      {/* Question row */}
      <button
        onClick={() => toggle(index)}
        style={{
          width: '100%', background: 'none', border: 'none',
          cursor: 'pointer', padding: '22px 0',
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: 20,
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'Montserrat', fontWeight: 700,
          fontSize: 'clamp(13px, 1.5vw, 15px)',
          color: isOpen ? '#EEF0E5' : 'rgba(238,240,229,0.75)',
          lineHeight: 1.4, transition: 'color 0.2s',
          letterSpacing: '0.01em',
        }}>
          {item.q}
        </span>
        <div style={{
          width: 28, height: 28, flexShrink: 0,
          border: `1px solid ${isOpen ? '#B6C4B6' : 'rgba(238,240,229,0.15)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'border-color 0.2s',
        }}>
          {isOpen
            ? <Minus size={13} color="#B6C4B6" />
            : <Plus  size={13} color="rgba(238,240,229,0.4)" />}
        </div>
      </button>

      {/* Answer — CSS max-height accordion */}
      <div style={{
        maxHeight: isOpen ? 300 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <p style={{
          fontFamily: 'Montserrat', fontWeight: 400, fontSize: 13,
          color: 'rgba(238,240,229,0.52)', lineHeight: 1.75,
          paddingBottom: 22,
        }}>
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section style={{
      backgroundColor: '#163020', padding: '80px 24px',
      borderTop: '1px solid rgba(182,196,182,0.07)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Two-col layout: heading left, FAQ right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px 80px',
          alignItems: 'start',
        }}>

          {/* Left */}
          <div className="reveal" style={{ position: 'sticky', top: 100 }}>
            <span style={{
              fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.22em', color: '#B6C4B6', textTransform: 'uppercase',
            }}>
              CÂU HỎI THƯỜNG GẶP
            </span>
            <h2 style={{
              fontFamily: 'Montserrat', fontWeight: 900,
              fontSize: 'clamp(28px, 4vw, 52px)',
              letterSpacing: '-0.03em', color: '#EEF0E5',
              textTransform: 'uppercase', lineHeight: 1, marginTop: 16,
            }}>
              BẠN ĐANG<br />
              <span style={{ color: '#B6C4B6' }}>THẮC MẮC GÌ?</span>
            </h2>
            <p style={{
              fontFamily: 'Montserrat', fontSize: 13, fontWeight: 400,
              color: 'rgba(238,240,229,0.45)', lineHeight: 1.7, marginTop: 20,
              maxWidth: 320,
            }}>
              Không tìm thấy câu trả lời? Đặt câu hỏi trực tiếp với chuyên viên — miễn phí, không áp lực.
            </p>
            <a href="#lead-form" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28,
              fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10,
              letterSpacing: '0.18em', color: '#B6C4B6',
              textDecoration: 'none', textTransform: 'uppercase',
              borderBottom: '1px solid rgba(182,196,182,0.3)',
              paddingBottom: 2, transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#EEF0E5')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#B6C4B6')}>
              ĐẶT CÂU HỎI NGAY →
            </a>
          </div>

          {/* Right — accordion */}
          <div className="reveal">
            {FAQS.map((item, i) => (
              <FaqItem key={i} item={item} index={i} open={open} toggle={toggle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
