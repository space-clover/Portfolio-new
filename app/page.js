import Image from 'next/image'
import About_me_section from '../components/about_me_section'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-neutral">
      <About_me_section/>
    </main>
  )
}
