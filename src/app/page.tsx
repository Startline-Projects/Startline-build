import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Blueprint from '@/components/Blueprint'
import Bench from '@/components/Bench'
import BuildLaunchGrow from '@/components/BuildLaunchGrow'
import HowItWorks from '@/components/HowItWorks'
import Portfolio from '@/components/Portfolio'
import Team from '@/components/Team'
import Guarantee from '@/components/Guarantee'
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
        <Bench />
        <BuildLaunchGrow />
        <HowItWorks />
        <Portfolio />
        <Team />
        <Guarantee />
        <IntakeForm />
      </main>
      <Footer />
      <NDAPanel />
    </>
  )
}
