import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { Constellation } from './components/Constellation'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen text-white selection:bg-accent-blue/30">
      <Constellation />
      
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
        style={{ 
          background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(56, 189, 248, 0.06), transparent 40%)' 
        }} 
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-white/30 text-sm">
        <p>Designed & Built by Subhojeeth Mandal with React & Framer Motion</p>
      </footer>
    </div>
  )
}