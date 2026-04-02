import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Blueprint from '@/components/Blueprint'
import Bench from '@/components/Bench'
import BuildLaunchGrow from '@/components/BuildLaunchGrow'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Blueprint />
        <Bench />
        <BuildLaunchGrow />
      </main>
    </>
  )
}
