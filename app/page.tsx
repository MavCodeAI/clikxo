import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Philosophy from '@/components/sections/Philosophy'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="relative">
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="philosophy">
        <Philosophy />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}
