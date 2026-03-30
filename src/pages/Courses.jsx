import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"
import { Link } from "react-router-dom"

export default function Courses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from("courses").select("*")
      if (!error && data) {
        setCourses(data)
      }
      setLoading(false)
    }

    fetchCourses()
  }, [])

  return (
    <div className="container">
      <h1 style={{ fontSize: "56px" }}>Khoá học</h1>

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : courses.length === 0 ? (
        <p>Hiện chưa có khoá học nào.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {courses.map((course) => (
            <div className="card" key={course.id}>
              <h3>{course.title || "Khoá học"}</h3>
              {course.price ? <p>{Number(course.price).toLocaleString('vi-VN')}đ</p> : <p>Miễn phí</p>}

              <Link to={`/course/${course.id}`}>
                <button style={{ width: "100%", marginTop: "10px" }}>Xem chi tiết</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
