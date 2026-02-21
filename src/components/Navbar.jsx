import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      // Small debounce/threshold for changing navbar background
      setIsScrolled(window.scrollY > 20)

      // Close mobile menu on scroll
      setIsMobileMenuOpen(false)

      // Update active tab based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const elementTop = top + window.scrollY
          const elementBottom = bottom + window.scrollY
          return scrollPosition >= elementTop && scrollPosition < elementBottom
        }
        return false
      })

      if (currentSection) {
        setActiveTab(currentSection.charAt(0).toUpperCase() + currentSection.slice(1))
      }
    }

    // Attach listener to window with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Call once to set initial state correctly on load/refresh
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ]

  const handleSmoothScroll = (e, href, name) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
      setActiveTab(name)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-white/10 py-4'
        : 'bg-transparent py-6'
        } ${isMobileMenuOpen ? 'backdrop-blur-xl bg-slate-950/95' : ''}`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, '#home', 'Home')}
          className="flex items-center group w-1/4"
          whileHover={{ scale: 1.05 }}
        >
          <span className="allura-regular text-4xl text-white group-hover:text-violet-400 transition-colors">Pachai Perumal A</span>
        </motion.a>

        {/* Desktop Floating Island */}
        <div className="hidden md:flex flex-1 justify-center">
          <div
            className={`flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500 ${isScrolled
              ? 'bg-white/5 border-white/10 shadow-lg backdrop-blur-xl'
              : 'bg-white/5 border-transparent'
              }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href, link.name)}
                className="relative px-5 py-2 text-sm font-medium transition-colors group"
              >
                {activeTab === link.name && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-violet-500 rounded-full"
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                )}

                {/* Hover underline animation when not active */}
                {activeTab !== link.name && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-violet-400 transition-all duration-300 w-0 group-hover:w-1/2 rounded-full" />
                )}

                <span className={`relative z-10 transition-colors duration-300 merriweather-bold ${activeTab === link.name ? 'text-slate-950' : 'text-slate-300 group-hover:text-white'
                  }`}>
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact/CTA */}
        <div className="hidden md:flex items-center justify-end w-1/4">
          <motion.a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact', 'Contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2.5 rounded-full text-sm font-bold montserrat-bold transition-all ${isScrolled
              ? 'bg-violet-500 text-slate-950 hover:bg-violet-400 shadow-lg shadow-violet-500/20'
              : 'bg-white text-slate-950 hover:bg-violet-400 shadow-lg shadow-white/10'
              }`}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center justify-end w-1/4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/5 shadow-2xl absolute top-full left-0 w-full"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href, link.name)}
                  className="relative group text-lg font-medium"
                >
                  <span className={`transition-colors duration-300 merriweather-bold ${activeTab === link.name ? 'text-violet-400' : 'text-slate-300'
                    }`}>
                    {link.name}
                  </span>
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-violet-400 transition-all duration-300 ${activeTab === link.name ? 'w-12' : 'w-0'
                    }`} />
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact', 'Contact')}
                className="w-full py-4 bg-violet-500 text-slate-950 rounded-xl text-center font-bold montserrat-bold hover:bg-violet-400 transition-colors"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar