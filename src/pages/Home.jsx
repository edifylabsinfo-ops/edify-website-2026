import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "56px" }}>Edify Labs</h1>
      <p style={{ fontSize: "20px", marginBottom: "40px" }}>
        Giải pháp tăng trưởng cho trung tâm đào tạo
      </p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link to="/workshop">
            <button>Tham gia Workshop</button>
          </Link>
          <Link to="/courses">
            <button style={{ background: "white" }}>Xem tất cả khoá học</button>
          </Link>
      </div>

      <div style={{ marginTop: "80px", textAlign: "left" }}>
        <h2>Khoá học nổi bật</h2>
        <div className="card">
            <h3>Khoá học mẫu</h3>
            <p>Bắt đầu xây dựng kỹ năng của bạn với các khoá học chuyên sâu.</p>
            <Link to="/courses">
                <button>Khám phá ngay</button>
            </Link>
        </div>
      </div>
    </div>
  )
}
