import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1.5 w-20 bg-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I am a dedicated Full Stack Developer with a strong foundation in the MERN stack.
                My journey in technology started with a fascination for building things that live on the internet.
              </p>
              <p className="text-lg text-slate-400">
                I enjoy tackling complex problems and turning them into simple, beautiful, and intuitive designs.
                When I'm not coding, I'm usually exploring new technologies or refining my development workflow.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl space-y-8 relative">
              <h3 className="text-2xl font-bold flex items-center">
                <GraduationCap className="mr-3 text-cyan-400" size={28} />
                Education
              </h3>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-slate-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                  <h4 className="text-xl font-bold">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-cyan-400 font-medium">Jawahar Science College</p>
                  <div className="flex items-center text-sm text-slate-400 mt-2 space-x-4">
                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> 2022 – 2025</span>
                    <span className="flex items-center"><MapPin size={14} className="mr-1" /> Neyveli</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About