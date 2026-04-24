import Topbar     from './components/sections/Topbar.jsx'
import Header     from './components/sections/Header.jsx'
import Hero       from './components/sections/Hero.jsx'
import Metrics    from './components/sections/Metrics.jsx'
import Solutions  from './components/sections/Solutions.jsx'
import Portfolio  from './components/sections/Portfolio.jsx'
import Quiz       from './components/sections/Quiz.jsx'
import LeadForm   from './components/sections/LeadForm.jsx'
import Footer     from './components/sections/Footer.jsx'

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
