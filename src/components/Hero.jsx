import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Typewriter from './Typewriter'
import ParticlesBackground from './ParticlesBackground'
import { useMousePosition } from '../hooks/useMousePosition'

const Hero = () => {
  const { scrollY } = useScroll()
  const mousePosition = useMousePosition()

  // Parallax transforms based on scroll behavior
  const yText = useTransform(scrollY, [0, 500], [0, 100])
  const opacityText = useTransform(scrollY, [0, 300], [1, 0])

  const yOrbs1 = useTransform(scrollY, [0, 1000], [0, 300])
  const yOrbs2 = useTransform(scrollY, [0, 1000], [0, -150])

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
        <div className="absolute inset-0 w-full h-full bg-slate-950 -z-20" />
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
            style={{ y: yText, opacity: opacityText }}
            className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12"
          >
            {/* Left Text Content */}
            <div className="flex-1 w-full text-center lg:text-left pt-10">

              {/* Fade-In & Slide-Up Entrance Animation */}
              <div className="overflow-hidden mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block relative pb-2"
                >
                  <span className="text-violet-400 font-medium tracking-[0.3em] uppercase text-sm relative z-10">
                    Welcome to my portfolio
                  </span>
                  <div className="absolute inset-0 bg-violet-500/20 blur-md -z-10 rounded-full" />
                </motion.div>
              </div>

              {/* Slide-Up Text Animation & Gradient Animated Text */}
              <div className="overflow-hidden mb-6">
                <motion.h1
                  initial={{ opacity: 0, y: 120 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.1] text-white pb-2"
                >
                  Hi, I'm <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-500 animate-gradient">
                    Pachai Perumal A
                  </span>
                </motion.h1>
              </div>

              {/* Slide-Up Typing Text Animation */}
              <div className="overflow-hidden mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light pb-2"
                >
                  I am a <Typewriter /> designing and building scalable web applications with modern technologies. Let's create something functional and beautiful.
                </motion.div>
              </div>

              {/* CTA Button Hover Effects */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-8 py-4 bg-violet-600 text-white font-bold rounded-full overflow-hidden flex items-center"
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
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass text-white font-bold rounded-full transition-all border border-white/10 hover:border-white/30 hover:bg-white/10 relative overflow-hidden group"
                >
                  <span className="relative z-10">Let's Talk</span>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Visual Content / Minimal Profile 3D presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
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
                  <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-10" />

                  {/* Glass Blur Background Tint */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-transparent to-indigo-500/20 z-10 mix-blend-overlay mix-blend-color-dodge" />

                  {/* Light Beams inner layout */}
                  <div className="w-full h-full bg-gradient-to-br from-violet-900 to-slate-900 flex items-center justify-center relative">
                    <div className="text-8xl text-white/5 font-black tracking-tighter mix-blend-overlay transform -rotate-12">PA</div>
                    {/* Horizontal animated light beam */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll Down Indicator Animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
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