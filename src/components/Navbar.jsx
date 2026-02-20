import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active tab based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top >= -100 && rect.top <= 300
        }
        return false
      })
      if (currentSection) {
        setActiveTab(currentSection.charAt(0).toUpperCase() + currentSection.slice(1))
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="w-full mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter flex items-center group"
        >
          <span className="w-8 h-8 bg-cyan-500 rounded-lg mr-2 flex items-center justify-center text-slate-950 font-black rotate-3 group-hover:rotate-12 transition-transform">P</span>
          <span className="text-white group-hover:text-cyan-400 transition-colors">Perumal</span>
        </motion.a>

        {/* Desktop Floating Island */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500 ${isScrolled
            ? 'glass border-white/10 shadow-2xl backdrop-blur-xl'
            : 'bg-white/5 border-transparent'
            }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className="relative px-5 py-2 text-sm font-medium transition-colors"
            >
              {activeTab === link.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-cyan-500 rounded-full"
                  transition={{ type: 'spring', duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${activeTab === link.name ? 'text-slate-950' : 'text-slate-400 hover:text-white'
                }`}>
                {link.name}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Contact/CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-white/5"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden w-10 h-10 glass rounded-full flex items-center justify-center text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-20 left-6 right-6 glass rounded-3xl p-6 border border-white/10 shadow-2xl z-40 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium p-3 rounded-2xl transition-all ${activeTab === link.name ? 'bg-cyan-500 text-slate-950 px-6' : 'text-slate-400 hover:bg-white/5'
                    }`}
                  onClick={() => {
                    setActiveTab(link.name)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <a
                href="#contact"
                className="w-full py-4 bg-white text-slate-950 rounded-2xl text-center font-bold hover:bg-cyan-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Coffee
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar