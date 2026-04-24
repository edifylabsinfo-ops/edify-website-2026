import React from 'react'
import Topbar from './components/Topbar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Metrics from './components/Metrics.jsx'
import Solutions from './components/Solutions.jsx'
import Portfolio from './components/Portfolio.jsx'
import Quiz from './components/Quiz.jsx'
import LeadForm from './components/LeadForm.jsx'
import Footer from './components/Footer.jsx'

// Thêm 4 dòng import này lên đầu
import Partners from './components/Partners.jsx'
import Team from './components/Team.jsx'
import Blog from './components/Blog.jsx'
import Faq from './components/Faq.jsx'

// Import CSS và hiệu ứng
import './index.css'

export default function App() {
  return (
  <main className="bg-[#163020]">
    <Topbar />
    <Header />
    <Hero />
    <Partners /> {/* Mới */}
    <Metrics />
    <Solutions />
    <Team />     {/* Mới */}
    <Portfolio />
    <Blog />     {/* Mới */}
    <Quiz />
    <Faq />      {/* Mới */}
    <LeadForm />
    <Footer />
  </main>
)
