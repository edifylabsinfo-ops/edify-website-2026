import LeadForm from "../components/LeadForm"

export default function Workshop() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "56px" }}>
        Học DaVinci Resolve 20 trong 2 ngày
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "40px" }}>
        Dựng video chuyên nghiệp từ con số 0 – không cần thuê editor
      </p>

      <div className="card" style={{ maxWidth: "500px", margin: "auto" }}>
        <h3 style={{ marginTop: 0 }}>Đăng ký ngay</h3>
        <LeadForm />
      </div>
    </div>
  )
}
