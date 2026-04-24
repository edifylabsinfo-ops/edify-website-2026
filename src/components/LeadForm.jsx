import { useState } from 'react'
import Quiz from './Quiz.jsx'
import { ArrowRight, CheckCircle, Loader } from 'lucide-react'

// ─── Config ───────────────────────────────────────────────────────────────────
const WEBHOOK_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

// ─── Google Apps Script submission ───────────────────────────────────────────
async function submitToSheet(payload) {
  const res = await fetch(WEBHOOK_URL, {
    method:  'POST',
    mode:    'no-cors', // GAS requires no-cors
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(payload),
  })
  // no-cors returns opaque response — treat as success if no throw
  return true
}

// ─── Input ────────────────────────────────────────────────────────────────────
function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                      letterSpacing: '0.18em', color: 'rgba(238,240,229,0.5)',
                      textTransform: 'uppercase' }}>
        {label}
      </label>
      <input
        {...props}
        style={{
          fontFamily: 'Montserrat', fontSize: 13, fontWeight: 500,
          backgroundColor: 'rgba(238,240,229,0.04)',
          border: '1px solid rgba(238,240,229,0.15)',
          color: '#EEF0E5', padding: '14px 16px',
          outline: 'none', width: '100%',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e)  => (e.target.style.borderColor = '#B6C4B6')}
        onBlur={(e)   => (e.target.style.borderColor = 'rgba(238,240,229,0.15)')}
      />
    </div>
  )
}

// ─── Contact Step (step 3 of overall flow) ───────────────────────────────────
function ContactStep({ quizAnswers, onSuccess }) {
  const [form,    setForm]    = useState({ name: '', phone: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')

  const valid = form.name.trim() && form.phone.trim().length >= 9

  const handleSubmit = async () => {
    if (!valid) { setError('Vui lòng nhập đầy đủ họ tên và số điện thoại.'); return }
    setError('')
    setLoading(true)

    const payload = {
      timestamp:   new Date().toISOString(),
      name:        form.name.trim(),
      phone:       form.phone.trim(),
      email:       form.email.trim(),
      budget:      quizAnswers?.[0] ?? '',
      pain:        quizAnswers?.[1] ?? '',
      goal:        quizAnswers?.[2] ?? '',
      source:      'edifylabs.vn — LeadForm',
    }

    try {
      await submitToSheet(payload)

      // Tracking
      window.fbq?.('track', 'Lead', { content_name: 'lead_form_submit', value: 1, currency: 'VND' })
      window.dataLayer?.push({ event: 'lead_form_submit', ...payload })

      onSuccess()
    } catch {
      setError('Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <div className="mb-8">
        <span style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                       letterSpacing: '0.2em', color: '#B6C4B6', textTransform: 'uppercase' }}>
          BƯỚC CUỐI — THÔNG TIN LIÊN HỆ
        </span>
        <h3 className="mt-3" style={{ fontFamily: 'Montserrat', fontWeight: 900,
                                      fontSize: 'clamp(20px, 3vw, 30px)',
                                      letterSpacing: '-0.02em', color: '#EEF0E5',
                                      textTransform: 'uppercase', lineHeight: 1.1 }}>
          NHẬN TƯ VẤN 1-1<br />
          <span style={{ color: '#B6C4B6' }}>HOÀN TOÀN MIỄN PHÍ.
          </span>
        </h3>
        <p className="mt-3" style={{ fontFamily: 'Montserrat', fontSize: 12, fontWeight: 400,
                                     color: 'rgba(238,240,229,0.45)', lineHeight: 1.6 }}>
          Chuyên viên Edify Labs sẽ phân tích bài toán và đề xuất lộ trình phù hợp trong 24 giờ.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <Input
          label="Họ & Tên *"
          type="text"
          placeholder="Nguyễn Văn A"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          label="Số Điện Thoại *"
          type="tel"
          placeholder="0901 234 567"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <Input
          label="Email (tuỳ chọn)"
          type="email"
          placeholder="email@domain.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {error && (
          <p style={{ fontFamily: 'Montserrat', fontSize: 11, fontWeight: 500,
                      color: '#e05252', letterSpacing: '0.04em' }}>
            {error}
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-solid flex items-center justify-center gap-2 mt-2"
          style={{ width: '100%', opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}>
          {loading
            ? <><Loader size={14} className="animate-spin" /> ĐANG GỬI...</>
            : <>NHẬN TƯ VẤN CHIẾN LƯỢC <ArrowRight size={13} /></>}
        </button>

        <p style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 400,
                    color: 'rgba(238,240,229,0.28)', letterSpacing: '0.06em',
                    textAlign: 'center', marginTop: 4 }}>
          Thông tin được bảo mật tuyệt đối. Không spam.
        </p>
      </div>
    </div>
  )
}

// ─── Success Screen ───────────────────────────────────────────────────────────
function SuccessScreen() {
  return (
    <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center', padding: '40px 0' }}>
      <CheckCircle size={48} color="#B6C4B6" style={{ margin: '0 auto 24px' }} />
      <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 28,
                   letterSpacing: '-0.02em', color: '#EEF0E5',
                   textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 16 }}>
        ĐÃ NHẬN ĐƯỢC<br />
        <span style={{ color: '#B6C4B6' }}>THÔNG TIN CỦA BẠN.</span>
      </h3>
      <p style={{ fontFamily: 'Montserrat', fontSize: 13, fontWeight: 400,
                  color: 'rgba(238,240,229,0.52)', lineHeight: 1.65 }}>
        Chuyên viên Edify Labs sẽ liên hệ trong vòng <strong style={{ color: '#EEF0E5' }}>24 giờ làm việc</strong>. 
        Trong thời gian chờ, hãy theo dõi kênh TikTok của chúng tôi để nhận thêm insight miễn phí.
      </p>
      <a href="https://tiktok.com/@edifylabs" target="_blank" rel="noreferrer"
         className="btn-outline flex items-center gap-2 justify-center mt-10"
         style={{ textDecoration: 'none' }}>
        THEO DÕI TIKTOK EDIFY LABS <ArrowRight size={12} />
      </a>
    </div>
  )
}

// ─── LeadForm Root ────────────────────────────────────────────────────────────
export default function LeadForm() {
  const [phase,       setPhase]       = useState('quiz')   // 'quiz' | 'contact' | 'success'
  const [quizAnswers, setQuizAnswers] = useState(null)

  const handleQuizDone = (answers) => {
    setQuizAnswers(answers)
    setPhase('contact')
  }

  return (
    <section id="lead-form"
             style={{ backgroundColor: '#0c1910', padding: '0 24px',
                      borderTop: '1px solid rgba(182,196,182,0.08)' }}>
      <div className="max-w-[1280px] mx-auto py-20 lg:py-28">

        {/* Section label — shown only during quiz */}
        {phase === 'quiz' && (
          <div className="reveal mb-14 text-center">
            <span style={{ fontFamily: 'Montserrat', fontSize: 10, fontWeight: 700,
                           letterSpacing: '0.22em', color: '#B6C4B6', textTransform: 'uppercase' }}>
              ĐÁNH GIÁ NHANH
            </span>
            <h2 className="mt-4" style={{ fontFamily: 'Montserrat', fontWeight: 900,
                                          fontSize: 'clamp(28px, 4vw, 52px)',
                                          letterSpacing: '-0.03em', color: '#EEF0E5',
                                          textTransform: 'uppercase', lineHeight: 1 }}>
              3 CÂU HỎI.<br />
              <span style={{ color: '#B6C4B6' }}>1 LỘ TRÌNH RÕ RÀNG.</span>
            </h2>
          </div>
        )}

        {/* Content switch */}
        {phase === 'quiz'    && <Quiz onComplete={handleQuizDone} />}
        {phase === 'contact' && <ContactStep quizAnswers={quizAnswers} onSuccess={() => setPhase('success')} />}
        {phase === 'success' && <SuccessScreen />}
      </div>
    </section>
  )
}
