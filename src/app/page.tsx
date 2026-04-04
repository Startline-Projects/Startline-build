import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Blueprint from '@/components/Blueprint'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Team from '@/components/Team'
import IntakeForm from '@/components/IntakeForm'
import Footer from '@/components/Footer'
import NDAPanel from '@/components/NDAPanel'
import RevealProvider from '@/components/RevealProvider'

export default function Home() {
  return (
    <>
      <RevealProvider />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Blueprint />
        <Process />
        <Portfolio />
        <Team />
        <IntakeForm />
      </main>
      <Footer />
      <NDAPanel />
    </>
  )
}
