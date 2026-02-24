import { useState } from 'react'
import { Mail, Phone, Send, Github, Linkedin, Loader2, CheckCircle2 } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SiWhatsapp } from 'react-icons/si'
import { useMediaQuery } from 'react-responsive'

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const yBg1 = isMobile ? 0 : y
  const yBg2 = isMobile ? 0 : y2

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: true, message: 'Please fill out all required fields.' })
      return
    }

    setStatus({ submitting: true, success: false, error: false, message: '' })

    try {
      const response = await fetch('https://portfolio-backend-yxip.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: data.message || '✅ Message sent successfully!'
        })
        setFormData({ name: '', email: '', subject: '', message: '' })

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false, message: '' }))
        }, 5000)
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Failed to connect to the server. Please try again.'
      })
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">

      {/* Background Ambient Effects */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <motion.div
            style={{ y: yBg1 }}
            className="absolute top-[20%] -left-32 w-[40rem] h-[40rem] bg-fuchsia-600/20 rounded-full blur-[140px] mix-blend-screen"
          />
          <motion.div
            style={{ y: yBg2 }}
            className="absolute bottom-[-10%] -right-32 w-[35rem] h-[35rem] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20 relative flex flex-col items-center"
        >
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="audiowide-regular text-fuchsia-400 tracking-[0.3em] uppercase text-sm mb-4 block">Let's Connect</span>
          </motion.div>

          <h2 className="playfair-display-bold text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white pb-2 relative inline-flex justify-center flex-col items-center overflow-visible transition-colors duration-500">
            Get In Touch

            {/* Glow Expand Animation */}
            <motion.div
              initial={isMobile ? false : { width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
              className="absolute -bottom-2 h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent rounded-full shadow-[0_0_15px_rgba(217,70,239,0.8)]"
            />
            <motion.div
              initial={isMobile ? false : { width: 0, opacity: 0 }}
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
            initial={isMobile ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h3 className="montserrat-bold text-3xl mb-6 text-slate-900 dark:text-white relative inline-block transition-colors duration-500">
                Contact Information
                <div className="absolute -bottom-2 left-0 w-12 h-[2px] bg-violet-500/50" />
              </h3>
              <p className="poppins-light text-slate-600 dark:text-slate-400 text-lg leading-[1.7] max-w-[400px] transition-colors duration-500">
                Have a project in mind? Let's talk about how I can help you build something amazing.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Email Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center group glass p-3 sm:p-4 rounded-3xl border border-white/5 hover:border-violet-500/30 transition-colors shadow-lg overflow-hidden"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center mr-4 sm:mr-5 group-hover:bg-violet-200 dark:group-hover:bg-violet-500/20 transition-all shrink-0">
                  <Mail className="text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium mb-1 transition-colors duration-500">Email</p>
                  <a href="mailto:pachaiperumal591813@gmail.com" className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white hover:text-violet-500 dark:hover:text-violet-400 transition-colors break-all line-clamp-2">
                    pachaiperumal591813@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center group glass p-3 sm:p-4 rounded-3xl border border-white/5 hover:border-violet-500/30 transition-colors shadow-lg overflow-hidden"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-fuchsia-100 dark:bg-fuchsia-500/10 flex items-center justify-center mr-4 sm:mr-5 group-hover:bg-fuchsia-200 dark:group-hover:bg-fuchsia-500/20 transition-all shrink-0">
                  <Phone className="text-fuchsia-600 dark:text-fuchsia-400 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium mb-1 transition-colors duration-500">Phone</p>
                  <a href="tel:9080414539" className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white hover:text-fuchsia-500 dark:hover:text-fuchsia-400 transition-colors break-all">
                    9080414539
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="pt-6 flex flex-col items-center lg:items-start w-full mt-4 lg:mt-0">
              <p className="montserrat-bold text-lg mb-6 text-slate-900 dark:text-white transition-colors duration-500">Follow Me</p>
              <div className="flex justify-center lg:justify-start space-x-4">
                {[
                  { name: "GitHub", Icon: Github, href: "https://github.com/Pachaiperumal" },
                  { name: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/in/pachaiperumal-a-64079629a/" },
                  { name: "WhatsApp", Icon: SiWhatsapp, href: "https://wa.me/919080414539" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5 hover:border-fuchsia-400 dark:hover:border-fuchsia-500/50 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-500/10 hover:shadow-[0_0_20px_rgba(217,70,239,0.1)] dark:hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all"
                  >
                    <social.Icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 relative overflow-hidden group">
              {/* Form Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1 tracking-wide transition-colors duration-500">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:bg-slate-50 dark:focus:bg-slate-900/80 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1 tracking-wide transition-colors duration-500">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:bg-slate-50 dark:focus:bg-slate-900/80 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1 tracking-wide transition-colors duration-500">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:bg-slate-50 dark:focus:bg-slate-900/80 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1 tracking-wide transition-colors duration-500">Message <span className="text-red-500">*</span></label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-violet-500 dark:focus:border-violet-500 focus:bg-slate-50 dark:focus:bg-slate-900/80 focus:ring-1 focus:ring-violet-500/50 transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl flex items-center ${status.success ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'}`}
                  >
                    {status.success && <CheckCircle2 className="mr-2 shrink-0" size={18} />}
                    <span className="text-sm font-medium">{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  whileHover={!status.submitting ? { scale: 1.02 } : {}}
                  whileTap={!status.submitting ? { scale: 0.98 } : {}}
                  disabled={status.submitting}
                  type="submit"
                  className={`w-full text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center group/btn shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] border border-white/10 ${status.submitting
                    ? 'bg-slate-400 dark:bg-slate-700 cursor-not-allowed opacity-70'
                    : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500'
                    }`}
                >
                  <span className="tracking-wide">{status.submitting ? 'Sending...' : 'Send Message'}</span>
                  {status.submitting ? (
                    <Loader2 className="ml-3 animate-spin" size={18} />
                  ) : (
                    <Send className="ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" size={18} />
                  )}
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