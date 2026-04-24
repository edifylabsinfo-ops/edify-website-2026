import { BarChart2, Database, Video, BookOpen, Users, Activity, TrendingUp, Award, ArrowRight } from 'lucide-react'
import useScrollReveal from '../../hooks/useScrollReveal.js'

const PERSONAL = [
  { icon: BarChart2, label: 'Performance Ads',  desc: 'Facebook, TikTok — tối ưu theo chỉ số ROAS thật.' },
  { icon: Database,  label: 'Data & Analytics', desc: 'Tracking, đo lường, ra quyết định dựa trên dữ liệu.' },
  { icon: Video,     label: 'Content Creator',  desc: 'Video, livestream, thiết kế nội dung quảng cáo.' },
  { icon: BookOpen,  label: 'Kỹ Năng Số',       desc: 'Digital Marketing nền tảng cho người mới bắt đầu.' },
]

const ENTERPRISE = [
  { icon: Users,      label: 'Đào Tạo Tuỳ Chỉnh',   desc: 'Chương trình riêng theo quy mô và mục tiêu doanh nghiệp.' },
  { icon: Activity,   label: 'Quản Lý Đội Ngũ',      desc: 'Đánh giá năng lực và theo dõi phát triển real-time.' },
  { icon: TrendingUp, label: 'Chuyển Đổi Số',         desc: 'Nâng cấp kỹ năng toàn tổ chức, đo lường ROI cụ thể.' },
  { icon: Award,      label: 'Chứng Nhận Quốc Tế',   desc: 'Gap analysis, bài kiểm tra đầu vào, chứng nhận chuẩn.' },
]

function ItemRow({ icon: Icon, label, desc, dark }) {
  return (
    <div className="reveal flex items-start gap-4 py-5"
         style={{ borderBottom: `1px solid ${dark ? 'rgba(238,240,229,0.08)' : 'rgba(22,48,32,0.08)'}` }}>
      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5"
           style={{ backgroundColor: dark ? 'rgba(238,240,229,0.07)' : 'rgba(22,48,32,0.06)' }}>
        <Icon size={14} color={dark ? '#B6C4B6' : '#304D30'} strokeWidth={2} />
      </div>
      <div>
        <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 13,
                      color: dark ? '#EEF0E5' : '#163020', letterSpacing: '0.02em' }}>
          {label}
        </div>
        <div className="mt-1" style={{ fontFamily: 'Montserrat', fontWeight: 400, fontSize: 12,
                                       color: dark ? 'rgba(238,240,229,0.52)' : 'rgba(22,48,32,0.55)',
                                       lineHeight: 1.55 }}>
          {desc}
        </div>
      </div>
    </div>
  )
}

export default function Solutions() {
  useScrollReveal()

  return (
    <section id="solutions" style={{ backgroundColor: '#163020' }}>
      <div className="max-w-[1280px] mx-auto px-6 py-20 lg:py-28">

        <div className="reveal mb-16">
          <span style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                         letterSpacing: '0.22em', color: '#B6C4B6', textTransform: 'uppercase' }}>
            GIẢI PHÁP
          </span>
          <h2 className="mt-4" style={{ fontFamily: 'Montserrat', fontWeight: 900,
                                        fontSize: 'clamp(28px, 4vw, 52px)',
                                        letterSpacing: '-0.03em', color: '#EEF0E5',
                                        textTransform: 'uppercase', lineHeight: 1 }}>
            MỘT HỆ SINH THÁI.<br />
            <span style={{ color: '#B6C4B6' }}>HAI ĐỐI TƯỢNG.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-0">

          {/* Col 1 — Light */}
          <div className="p-8 lg:p-12" style={{ backgroundColor: '#EEF0E5' }}>
            <div className="reveal mb-8">
              <div style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                            letterSpacing: '0.22em', color: 'rgba(22,48,32,0.45)',
                            textTransform: 'uppercase', marginBottom: 8 }}>
                DÀNH CHO CÁ NHÂN / CREATOR
              </div>
              <div style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 22,
                            letterSpacing: '-0.02em', color: '#163020', textTransform: 'uppercase' }}>
                XÂY DỰNG KỸ NĂNG
              </div>
            </div>
            {PERSONAL.map((item) => <ItemRow key={item.label} {...item} dark={false} />)}
            <a href="#lead-form" className="reveal btn-solid mt-8 flex items-center gap-2 w-fit"
               style={{ textDecoration: 'none', color: '#EEF0E5', marginTop: 32 }}>
              TRẢI NGHIỆM LỘ TRÌNH <ArrowRight size={12} />
            </a>
          </div>

          {/* Col 2 — Dark */}
          <div className="p-8 lg:p-12" style={{ backgroundColor: '#0c1910' }}>
            <div className="reveal mb-8">
              <div style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                            letterSpacing: '0.22em', color: 'rgba(182,196,182,0.55)',
                            textTransform: 'uppercase', marginBottom: 8 }}>
                DÀNH CHO DOANH NGHIỆP
              </div>
              <div style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 22,
                            letterSpacing: '-0.02em', color: '#EEF0E5', textTransform: 'uppercase' }}>
                SCALE HỆ THỐNG
              </div>
            </div>
            {ENTERPRISE.map((item) => <ItemRow key={item.label} {...item} dark={true} />)}
            <a href="#lead-form" className="reveal btn-outline mt-8 flex items-center gap-2 w-fit"
               style={{ textDecoration: 'none', marginTop: 32 }}>
              TƯ VẤN CHIẾN LƯỢC <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
