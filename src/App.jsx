import { useState, useEffect, Suspense, lazy } from 'react'
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

  // Initialize from localStorage or default to dark
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    // Default to dark mode as it was the original design
    return true
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-violet-500/30 transition-colors duration-500">
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
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
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