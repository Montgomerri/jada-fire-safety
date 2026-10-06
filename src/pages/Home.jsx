import Hero           from '../components/Hero'
import Certifications from '../components/Certifications'
import About          from '../components/About'
import Process        from '../components/Process'
import Services       from '../components/Services'
import WhyUs          from '../components/WhyUs'
import Testimonials   from '../components/Testimonials'
import CallToAction   from '../components/CallToAction'
import Contact        from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Certifications />
      <About />
      <Process />
      <Services />
      <WhyUs />
      <Testimonials />
      <CallToAction />
      <Contact />
    </>
  )
}