import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Home, User, Code2, Briefcase } from 'lucide-react'

const Navbar = ({ isDarkMode, toggleTheme }) => {
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
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: Briefcase },
  ]

  const handleSmoothScroll = (e, href, name) => {
    e.preventDefault()
    // Immediately close the mobile menu for instant tap feedback
    setIsMobileMenuOpen(false)
    setActiveTab(name)

    // Execute scroll slightly after to allow the menu closing animation to start
    setTimeout(() => {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-white/10 py-4'
        : 'bg-transparent py-6'
        } ${isMobileMenuOpen ? 'backdrop-blur-xl bg-white/95 dark:bg-slate-950/95' : ''}`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, '#home', 'Home')}
          className="flex items-center group w-auto md:w-1/4 z-40"
          whileHover={{ scale: 1.05 }}
        >
          <span className="allura-regular text-4xl text-slate-900 dark:text-white group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors leading-[1.1] md:leading-tight">
            Pachai<br className="block md:hidden" />
            <span className="hidden md:inline"> </span>Perumal&nbsp;A
          </span>
        </motion.a>

        {/* Desktop Floating Island */}
        <div className="hidden md:flex flex-1 justify-center">
          <div
            className={`flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500 ${isScrolled
              ? 'bg-slate-100/50 dark:bg-white/5 border-slate-200 dark:border-white/10 shadow-lg backdrop-blur-xl'
              : 'bg-slate-100/30 dark:bg-white/5 border-transparent'
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

                <span className={`relative z-10 transition-colors duration-300 merriweather-bold ${activeTab === link.name ? 'text-white dark:text-slate-950' : 'text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                  }`}>
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact/CTA */}
        <div className="hidden md:flex items-center justify-end w-1/4 gap-4">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
            className={`p-2.5 rounded-full flex items-center justify-center transition-colors ${isScrolled
              ? 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10'
              : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/30 dark:hover:bg-white/10 glass'
              }`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact', 'Contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2.5 rounded-full text-sm font-bold montserrat-bold transition-all ${isScrolled
              ? 'bg-violet-500 text-white dark:text-slate-950 hover:bg-violet-400 shadow-lg shadow-violet-500/20'
              : 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-violet-400 shadow-lg shadow-slate-900/10 dark:shadow-white/10'
              }`}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center justify-end w-1/4 gap-3">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
            className="w-10 h-10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Mobile Menu"
            className="w-10 h-10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
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
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] absolute top-full left-0 w-full rounded-b-[2rem]"
          >
            <div className="flex flex-col px-6 py-8 gap-3">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                const isActive = activeTab === link.name;
                return (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, ease: "easeOut" }}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href, link.name)}
                    className={`relative group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 cursor-pointer pointer-events-auto ${isActive
                      ? 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 shadow-sm border border-violet-100 dark:border-violet-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                  >
                    <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-violet-100 dark:bg-violet-500/20' : 'bg-slate-100 dark:bg-slate-800 max-sm:dark:bg-slate-800/50 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-lg font-bold merriweather-bold tracking-wide">
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="active-mobile-indicator"
                        className="absolute left-0 w-1.5 h-8 bg-violet-500 rounded-r-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}

              <motion.hr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="border-slate-200 dark:border-white/10 my-3 mx-2"
              />

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, ease: "easeOut" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact', 'Contact')}
                className="w-full block py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl text-center font-bold montserrat-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-[1.02] transition-all cursor-pointer pointer-events-auto"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar