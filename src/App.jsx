import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Workshop from "./pages/Workshop"
import ThankYou from "./pages/ThankYou"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
