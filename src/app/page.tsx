import Nav from '@/components/Nav'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex items-center justify-center pt-20">
        <h1 className="font-[family-name:var(--font-syne-var)] text-4xl font-extrabold tracking-tight">
          start<span className="text-amber">line</span>
        </h1>
      </main>
    </>
  )
}
