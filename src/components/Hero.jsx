import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Typewriter from './Typewriter'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[24rem] h-[24rem] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">

          {/* Left Text Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-violet-400 font-medium mb-4 tracking-widest uppercase text-sm"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] text-white"
            >
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">
                Pachai Perumal A
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              I am a <Typewriter /> designing and building scalable web applications with modern technologies. Let's create something functional and beautiful.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-full transition-all flex items-center shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-white/20"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>

          {/* Right Visual Content / Minimal Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-sm lg:max-w-md relative"
          >
            {/* Soft Glow Behind Image */}
            <div className="absolute inset-0 bg-violet-500/10 rounded-[2.5rem] blur-2xl transform rotate-3" />

            {/* Elegant Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] glass border border-white/10 bg-slate-900/50 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-slate-800 relative">
                {/* Fallback pattern if no image, otherwise the image covers it */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                {/* 
                  Since we don't have a local profile image, we use a sleek placeholder 
                  or you can put your actual image here later.
                */}
                <div className="w-full h-full bg-gradient-to-br from-violet-600/30 to-indigo-900/50 flex items-center justify-center">
                  <div className="text-6xl text-white/50 font-black tracking-tighter opacity-20">PA</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-60"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">Scroll</span>
        <div className="w-[2px] h-8 rounded-full bg-gradient-to-b from-violet-500 to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero