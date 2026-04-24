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

// Import CSS và hiệu ứng
import './index.css'

export default function App() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Solutions />
        <Portfolio />
        <Quiz />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}
