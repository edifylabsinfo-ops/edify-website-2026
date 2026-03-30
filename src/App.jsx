import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Workshop from "./pages/Workshop"
import ThankYou from "./pages/ThankYou"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import { initTracking, trackPageView } from "./lib/tracking"

function RouteTracker() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])

  return null
}

function App() {
  useEffect(() => {
    initTracking()
  }, [])

  return (
    <BrowserRouter>
      <RouteTracker />
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
