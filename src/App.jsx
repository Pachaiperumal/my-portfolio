import { useState, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import CursorGlow from './components/CursorGlow'
import StarBackground from './components/StarBackground'

// Lazy load components that are not immediately visible
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-violet-500/30">
      <CursorGlow />
      <StarBackground />

      <AnimatePresence mode='wait'>
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} duration={3000} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <main>
              {/* Hero is above the fold, so we keep it imported normally */}
              <Hero />

              {/* Suspense wrapper for lazy loaded components */}
              <Suspense fallback={<div className="min-h-screen" />}>
                <About />
                <Skills />
                <Projects />
                <Contact />
              </Suspense>
            </main>
            <Suspense fallback={<div />}>
              <Footer />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App