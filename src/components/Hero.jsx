import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Code, Terminal, Download } from 'lucide-react'
import Typewriter from './Typewriter'
import ParticlesBackground from './ParticlesBackground'
import { useMousePosition } from '../hooks/useMousePosition'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const { scrollY } = useScroll()
  const mousePosition = useMousePosition()

  // Parallax transforms based on scroll behavior
  const yText = useTransform(scrollY, [0, 500], [0, 100])
  const opacityText = useTransform(scrollY, [0, 300], [1, 0])

  const yOrbs1 = useTransform(scrollY, [0, 1000], [0, 300])
  const yOrbs2 = useTransform(scrollY, [0, 1000], [0, -150])

  // Disable scroll animations on mobile to prevent elements from vanishing
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // Provide fallback static values for mobile
  const yTextValue = isMobile ? 0 : yText
  const opacityTextValue = isMobile ? 1 : opacityText

  return (
    <>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>

      <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        {/* Dynamic Cursor Glow Effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`
          }}
        />

        {/* Background Layers */}
        <div className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-slate-950 transition-colors duration-500 -z-20" />
        <ParticlesBackground />

        {/* Parallax Orbs and Light Beams */}
        <motion.div
          style={{ y: yOrbs1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 rounded-full blur-[120px] -z-10 mix-blend-screen"
        />
        <motion.div
          style={{ y: yOrbs2 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] bg-gradient-to-l from-indigo-500/20 to-blue-500/20 rounded-full blur-[150px] -z-10 mix-blend-screen"
        />

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none -z-10" />

        {/* Main Content with Reveal on Scroll (Parallax opacity & Y) */}
        <div className="container mx-auto px-6 relative z-20 w-full max-w-7xl">
          <motion.div
            style={{ y: yTextValue, opacity: opacityTextValue }}
            className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12"
          >
            {/* Left Text Content */}
            <div className="flex-1 w-full text-center lg:text-left pt-10">

              {/* Fade-In Entrance Animation */}
              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block mb-6 relative"
              >
                <span className="audiowide-regular text-violet-400 font-medium tracking-[0.3em] uppercase text-sm relative z-10">
                  Welcome to my portfolio
                </span>
                <div className="absolute inset-0 bg-violet-500/20 blur-md -z-10 rounded-full" />
              </motion.div>

              {/* Slide-Up Text Animation & Gradient Animated Text */}
              <div className="overflow-hidden mb-6">
                <motion.h1
                  initial={isMobile ? false : { opacity: 0, y: 120 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
                  className="roboto-slab-hero text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white pb-2 transition-colors duration-500"
                >
                  Hi, I'm <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-500 animate-gradient">
                    Pachai Perumal A
                  </span>
                </motion.h1>
              </div>

              {/* Typing Text Animation */}
              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-xl md:text-2xl text-slate-700 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors duration-500"
              >
                <span className="poppins-light">I am a </span>
                <Typewriter />
                <span className="roboto-slab-regular"> designing and building scalable web applications with modern technologies. Let's create something functional and beautiful.</span>
              </motion.div>

              {/* CTA Button Hover Effects */}
              <motion.div
                initial={isMobile ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-8 py-4 bg-violet-600 text-base md:text-lg text-white font-bold rounded-full overflow-hidden flex items-center"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  {/* Magnetic Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-0" />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass text-base md:text-lg text-slate-900 dark:text-white font-bold rounded-full transition-all hover:border-slate-900/30 dark:hover:border-white/30 hover:bg-slate-900/10 dark:hover:bg-white/10 relative overflow-hidden group flex items-center"
                >
                  <span className="relative z-10 flex items-center">
                    <Download className="mr-2 group-hover:-translate-y-1 transition-transform" size={20} />
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Visual Content / Minimal Profile 3D presentation */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="flex-1 w-full max-w-sm lg:max-w-md relative perspective-1000"
            >
              {/* Soft Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/30 to-indigo-500/30 rounded-[2.5rem] blur-3xl transform rotate-6 animate-pulse" />

              {/* Elegant Image Container with 3D Mouse Effects */}
              <motion.div
                whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] glass border border-white/10 bg-slate-900/50 p-2 shadow-2xl preserve-3d"
              >
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-slate-800 relative shadow-inner">
                  {/* Fallback geometric backdrop */}
                  <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-10 pointer-events-none" />

                  {/* Glass Blur Background Tint */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-transparent to-indigo-500/20 z-10 mix-blend-overlay mix-blend-color-dodge pointer-events-none" />

                  {/* Real Image Integration */}
                  <img
                    src="/assets/profile.png"
                    alt="Pachai Perumal"
                    className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 origin-center filter grayscale hover:grayscale-0 z-0"
                  />
                  {/* Inner dark gradient for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80 z-0 pointer-events-none" />
                  {/* Horizontal animated light beam over image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite] z-20 pointer-events-none" />
                </div>
              </motion.div>

              {/* Dynamic Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 lg:-right-12 glass px-6 py-4 rounded-3xl flex items-center gap-3 shadow-2xl backdrop-blur-md z-30 pointer-events-none"
              >
                <div className="w-10 h-10 rounded-full bg-violet-100/50 dark:bg-violet-500/20 flex items-center justify-center">
                  <Code size={20} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-0 leading-tight">Full Stack</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-0 leading-tight">Developer</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-6 lg:-left-12 glass px-6 py-4 rounded-3xl flex items-center gap-3 shadow-2xl backdrop-blur-md z-30 pointer-events-none"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-100/50 dark:bg-indigo-500/20 flex items-center justify-center relative">
                  <Terminal size={20} className="text-indigo-600 dark:text-indigo-400 relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-0 leading-tight">MERN Stack</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-0 leading-tight">React & Node</p>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll Down Indicator Animation */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-[45%] lg:left-[45%] -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-violet-400 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[2px] h-12 rounded-full bg-gradient-to-b from-violet-500 to-transparent"
          />
        </motion.div>
      </section>
    </>
  )
}

export default Hero