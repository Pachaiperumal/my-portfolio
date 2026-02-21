import { GraduationCap, MapPin, Code2, BookOpen, Trophy } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0B1120]">

      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0 opacity-40">
        <motion.div
          style={{ y }}
          className="absolute top-[10%] -left-32 w-[35rem] h-[35rem] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <div className="absolute bottom-[10%] -right-32 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20 relative flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="audiowide-regular text-violet-400 tracking-[0.3em] uppercase text-sm mb-4 block">Behind the Code</span>
          </motion.div>
          <h2 className="playfair-display-bold text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white pb-2 relative inline-flex justify-center flex-col items-center overflow-visible">
            About Me
            {/* Glow Expand Animation */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
              className="absolute -bottom-2 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)]"
            />
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "4rem", opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6, ease: "circOut" }}
              className="absolute -bottom-4 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent rounded-full"
            />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} // softer x movement
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="relative">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                className="absolute -left-6 top-0 w-1 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-transparent rounded-full"
              />
              <p className="poppins-light text-xl text-slate-300 font-light max-w-[520px] leading-[1.7]">
                Hi! I'm <strong className="text-white font-medium">Pachai Perumal A</strong>, a dedicated <strong className="text-white font-medium">Full Stack Developer</strong> with expertise in the <span className="text-violet-400 font-medium">MERN stack</span>.
                I design and develop high-performance, scalable, and intuitive web applications that provide seamless experiences for both end-users and businesses.
              </p>
            </div>

            <p className="poppins-light text-lg text-slate-400 max-w-[520px] leading-[1.7]">
              I enjoy tackling complex problems and turning them into simple, beautiful, and intuitive designs.
              When I'm not coding, I'm usually exploring new technologies or refining my development workflow.
            </p>

            {/* Stat Cards Mini */}
            <div className="grid grid-cols-2 gap-4 pt-6 max-w-[520px]">
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass p-5 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-colors group relative overflow-hidden shadow-lg hover:shadow-violet-500/10"
              >
                <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Code2 className="text-violet-400 mb-3 transition-transform duration-500 group-hover:scale-110" size={24} />
                <div className="montserrat-bold text-3xl text-white mb-1">10+</div>
                <div className="text-sm text-slate-400">Projects Built</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass p-5 rounded-2xl border border-white/5 hover:border-fuchsia-500/30 transition-colors group relative overflow-hidden shadow-lg hover:shadow-fuchsia-500/10"
              >
                <div className="absolute inset-0 bg-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Trophy className="text-fuchsia-400 mb-3 transition-transform duration-500 group-hover:scale-110" size={24} />
                <div className="montserrat-bold text-3xl text-white mb-1">Passionate</div>
                <div className="text-sm text-slate-400">Problem Solver</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Education Glass Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-3xl group p-[1px] overflow-hidden shadow-lg"
            >
              {/* Animated Moving Gradient Border */}
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#8b5cf6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full glass p-8 md:p-10 rounded-[23px] border border-white/5 transition-all duration-500 overflow-hidden">
                {/* Animated Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <h3 className="montserrat-bold text-2xl flex items-center mb-8 relative z-10 text-white">
                  <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mr-4">
                    <GraduationCap className="text-violet-400 transition-transform duration-500 group-hover:scale-110" size={24} />
                  </div>
                  Educational Journey
                </h3>

                <div className="relative pl-8 md:pl-10 pb-4">
                  {/* Timeline Line (Animated Grow) */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                    className="absolute left-[15px] md:left-[23px] top-6 w-[2px] bg-gradient-to-b from-violet-500 to-transparent origin-top"
                  />

                  {/* Timeline Item */}
                  <div className="relative z-10">
                    <div className="absolute -left-[37px] md:-left-[45px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-[3px] border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.6)]" />

                    <div className="glass bg-slate-900/40 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors transform transition-transform group-hover:translate-x-2 duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <h4 className="roboto-slab-regular text-xl font-bold text-white">Bachelor of Computer Applications</h4>
                        <div className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold border border-violet-500/30 whitespace-nowrap w-fit">
                          2022 – 2025
                        </div>
                      </div>

                      <p className="text-violet-400 font-medium mb-4 text-base">Jawahar Science College</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 bg-black/20 p-3 rounded-xl w-fit">
                        <span className="flex items-center"><BookOpen size={14} className="mr-2 text-slate-500" /> Major in CS</span>
                        <div className="w-1 h-1 rounded-full bg-slate-600" />
                        <span className="flex items-center"><MapPin size={14} className="mr-2 text-slate-500" /> Neyveli</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quote Card (Floating Effect) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-[1px] shadow-2xl shadow-violet-500/20 mt-6"
            >
              <div className="bg-slate-950 rounded-[23px] p-8 md:p-10 relative overflow-hidden flex items-center justify-center">
                <p className="merriweather-bold text-lg md:text-xl italic text-slate-300 text-center leading-relaxed max-w-xl">
                  "Writing code is an art form. Every line is a brushstroke on the canvas of the web."
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section >
  )
}

export default About