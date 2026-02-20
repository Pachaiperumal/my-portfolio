import { motion } from 'framer-motion'
import { ArrowRight, Github, Send } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cyan-400 font-medium mb-4 tracking-wider">WELCOME TO MY PORTFOLIO</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              I'm <span className="text-gradient">Pachai Perumal A</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
              A passionate <span className="text-white">Full Stack Developer</span> specializing in the MERN Stack.
              I build scalable web applications with modern technologies and a focus on user experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-full transition-all flex items-center group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-500 to-transparent" />
      </div>
    </section>
  )
}

export default Hero