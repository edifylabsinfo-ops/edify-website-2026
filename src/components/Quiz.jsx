import { useState } from 'react'
import { ArrowRight, ChevronLeft } from 'lucide-react'

const STEPS = [
  {
    title: 'NGÂN SÁCH HÀNG THÁNG',
    sub:   'Chọn mức phù hợp với giai đoạn hiện tại của bạn.',
    options: ['Dưới 10 triệu', '10 – 30 triệu', '30 – 100 triệu', 'Trên 100 triệu'],
  },
  {
    title: 'NỖI ĐAU LỚN NHẤT',
    sub:   'Bạn đang bị kéo chậm bởi điều gì?',
    options: [
      'Ads tốn tiền, không ra Lead chất lượng',
      'Không có đội ngũ Content chuyên nghiệp',
      'Không biết đo lường hiệu quả Marketing',
      'Thiếu quy trình chốt Sale bài bản',
    ],
  },
  {
    title: 'MỤC TIÊU 6 THÁNG',
    sub:   'Kết quả nào bạn muốn đạt được?',
    options: [
      'Tối ưu CPL xuống 50%',
      'Xây kênh TikTok/Reels đạt 100K+',
      'Tuyển sinh đều đặn hơn 30%',
      'Xây hệ thống Marketing tự động',
    ],
  },
]

export default function Quiz({ onComplete }) {
  const [step,    setStep]    = useState(0)
  const [answers, setAnswers] = useState({})
  const [chosen,  setChosen]  = useState(null)

  const current = STEPS[step]

  const choose = (opt) => {
    setChosen(opt)
    setTimeout(() => {
      const next = { ...answers, [step]: opt }
      setAnswers(next)
      setChosen(null)
      if (step < STEPS.length - 1) setStep(step + 1)
      else onComplete?.(next)
    }, 260)
  }

  const progress = ((step) / STEPS.length) * 100

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>

      {/* Progress bar */}
      <div className="mb-10" style={{ height: 1, backgroundColor: 'rgba(238,240,229,0.1)' }}>
        <div style={{ height: '100%', width: `${progress}%`,
                      backgroundColor: '#B6C4B6',
                      transition: 'width 0.4s ease' }} />
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-6">
        <span style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                       letterSpacing: '0.2em', color: '#B6C4B6', textTransform: 'uppercase' }}>
          BƯỚC {step + 1}/{STEPS.length}
        </span>
      </div>

      {/* Question */}
      <h3 className="mb-2" style={{ fontFamily: 'Montserrat', fontWeight: 900,
                                    fontSize: 'clamp(20px, 3vw, 30px)',
                                    letterSpacing: '-0.02em', color: '#EEF0E5',
                                    textTransform: 'uppercase', lineHeight: 1.1 }}>
        {current.title}
      </h3>
      <p className="mb-8" style={{ fontFamily: 'Montserrat', fontSize: 13, fontWeight: 400,
                                   color: 'rgba(238,240,229,0.5)', lineHeight: 1.6 }}>
        {current.sub}
      </p>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {current.options.map((opt) => (
          <button key={opt} onClick={() => choose(opt)}
                  style={{
                    fontFamily: 'Montserrat', fontWeight: 600, fontSize: 13,
                    textAlign: 'left', padding: '16px 20px',
                    backgroundColor: chosen === opt ? '#304D30' : 'transparent',
                    color: chosen === opt ? '#EEF0E5' : 'rgba(238,240,229,0.75)',
                    border: `1px solid ${chosen === opt ? '#304D30' : 'rgba(238,240,229,0.15)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}
                  onMouseEnter={(e) => { if (chosen !== opt) e.currentTarget.style.borderColor = 'rgba(238,240,229,0.4)' }}
                  onMouseLeave={(e) => { if (chosen !== opt) e.currentTarget.style.borderColor = 'rgba(238,240,229,0.15)' }}>
            {opt}
            <ArrowRight size={13} style={{ flexShrink: 0, opacity: 0.5 }} />
          </button>
        ))}
      </div>

      {/* Back */}
      {step > 0 && (
        <button onClick={() => setStep(step - 1)} className="mt-6 flex items-center gap-1.5"
                style={{ background: 'none', border: 'none', cursor: 'pointer',
                         fontFamily: 'Montserrat', fontSize: 11, fontWeight: 600,
                         letterSpacing: '0.1em', color: 'rgba(238,240,229,0.35)',
                         textTransform: 'uppercase' }}>
          <ChevronLeft size={13} /> QUAY LẠI
        </button>
      )}
    </div>
  )
}
