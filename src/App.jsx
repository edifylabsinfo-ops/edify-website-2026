import Topbar   from './components/Topbar.jsx'
import Header   from './components/Header.jsx'
import Hero     from './components/Hero.jsx'
import Partners from './components/Partners.jsx'
import Metrics  from './components/Metrics.jsx'
import Solutions from './components/Solutions.jsx'
import Team     from './components/Team.jsx'
import Portfolio from './components/Portfolio.jsx'
import Blog     from './components/Blog.jsx'
import Quiz     from './components/Quiz.jsx'
import Faq      from './components/Faq.jsx'
import LeadForm from './components/LeadForm.jsx'
import Footer   from './components/Footer.jsx'
import './index.css'

export default function App() {
  return (
    <main className="bg-[#163020]">
      <Topbar />
      <Header />
      <Hero />
      <Partners />
      <Metrics />
      <Solutions />
      <Team />
      <Portfolio />
      <Blog />
      <Quiz />
      <Faq />
      <LeadForm />
      <Footer />
    </main>
  )
}
