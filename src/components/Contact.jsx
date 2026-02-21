import { Mail, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">

      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-[20%] -left-32 w-[40rem] h-[40rem] bg-fuchsia-600/20 rounded-full blur-[140px] mix-blend-screen"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[-10%] -right-32 w-[35rem] h-[35rem] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
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
            <span className="audiowide-regular text-fuchsia-400 tracking-[0.3em] uppercase text-sm mb-4 block">Let's Connect</span>
          </motion.div>

          <h2 className="playfair-display-bold text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white pb-2 relative inline-flex justify-center flex-col items-center overflow-visible">
            Get In Touch

            {/* Glow Expand Animation */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
              className="absolute -bottom-2 h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent rounded-full shadow-[0_0_15px_rgba(217,70,239,0.8)]"
            />
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "4rem", opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6, ease: "circOut" }}
              className="absolute -bottom-4 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"
            />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">

          {/* Left Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h3 className="montserrat-bold text-3xl mb-6 text-white relative inline-block">
                Contact Information
                <div className="absolute -bottom-2 left-0 w-12 h-[2px] bg-violet-500/50" />
              </h3>
              <p className="poppins-light text-slate-400 text-lg leading-[1.7] max-w-[400px]">
                Have a project in mind? Let's talk about how I can help you build something amazing.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center group glass p-4 rounded-3xl border border-white/5 hover:border-violet-500/30 transition-colors shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mr-5 group-hover:bg-violet-500/20 transition-all">
                  <Mail className="text-violet-400 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Email</p>
                  <a href="mailto:pachaiperumal591813@gmail.com" className="text-base md:text-lg font-bold text-white hover:text-violet-400 transition-colors">
                    pachaiperumal591813@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center group glass p-4 rounded-3xl border border-white/5 hover:border-violet-500/30 transition-colors shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center mr-5 group-hover:bg-fuchsia-500/20 transition-all">
                  <Phone className="text-fuchsia-400 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Phone</p>
                  <a href="tel:9080414539" className="text-base md:text-lg font-bold text-white hover:text-fuchsia-400 transition-colors">
                    9080414539
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="pt-6">
              <p className="montserrat-bold text-lg mb-6 text-white">Follow Me</p>
              <div className="flex space-x-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-slate-300 hover:text-white border border-white/5 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all"
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
              {/* Form Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1 tracking-wide">Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-slate-900/80 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-slate-600 shadow-inner"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1 tracking-wide">Email</label>
                    <input
                      type="email"
                      className="w-full bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-slate-900/80 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-slate-600 shadow-inner"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1 tracking-wide">Message</label>
                  <textarea
                    rows="5"
                    className="w-full bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-slate-900/80 focus:ring-1 focus:ring-violet-500/50 transition-all resize-none placeholder:text-slate-600 shadow-inner"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center group/btn shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] border border-white/10"
                >
                  <span className="tracking-wide">Send Message</span>
                  <Send className="ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact