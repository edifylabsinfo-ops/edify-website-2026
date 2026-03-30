import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [enrolling, setEnrolling] = useState(false)

  useEffect(() => {
    const fetchCourse = async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", id)
        .single()

      if (!error && data) {
        setCourse(data)
      }
      setLoading(false)
    }

    if (id) {
      fetchCourse()
    }
  }, [id])

  const enroll = async () => {
    setEnrolling(true)
    const { error } = await supabase.from("enrollments").insert([
      {
        user_id: "00000000-0000-0000-0000-000000000000", // TEMP_USER_ID mockup for MVP
        course_id: course.id,
        status: "pending"
      }
    ])

    setEnrolling(false)
    if (!error) {
      alert("Đã đăng ký thành công!")
    } else {
      alert("Đã xảy ra lỗi!")
      console.error(error)
    }
  }

  if (loading) return <div className="container"><p>Loading...</p></div>
  if (!course) return <div className="container"><p>Không tìm thấy khoá học.</p></div>

  return (
    <div className="container">
      <Link to="/courses" style={{ display: "inline-block", marginBottom: "20px" }}>
        &larr; Quay lại danh sách
      </Link>
      
      <h1 style={{ fontSize: "56px" }}>{course.title}</h1>
      <div className="card" style={{ marginBottom: "20px" }}>
        <p>{course.description}</p>
        <h2 style={{ color: "var(--accent)", textShadow: "1px 1px 0 #000" }}>
            {Number(course.price).toLocaleString('vi-VN')}đ
        </h2>

        <button onClick={enroll} disabled={enrolling}>
            {enrolling ? "Processing..." : "Đăng ký khoá học"}
        </button>
      </div>
    </div>
  )
}
