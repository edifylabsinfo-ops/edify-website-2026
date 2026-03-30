import { useState } from "react"
import { submitLead } from "../lib/api"
import { getUTM } from "../hooks/useUTM"
import { useNavigate } from "react-router-dom"
import { trackLead } from "../lib/tracking"

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const utm = getUTM()

    const res = await submitLead({
      ...form,
      source: "workshop_landing",
      tag: "davinci_resolve",
      ...utm
    })

    setLoading(false)

    if (res.success) {
      trackLead({ value: 10, currency: 'USD' }) // Fire conversion pixel
      navigate("/thank-you")
    } else {
      alert("Có lỗi xảy ra, thử lại!")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Tên của bạn" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Số điện thoại" onChange={handleChange} required />

      <button disabled={loading} style={{ width: '100%', marginTop: '10px' }}>
        {loading ? "Đang gửi..." : "Đăng ký miễn phí"}
      </button>
    </form>
  )
}
