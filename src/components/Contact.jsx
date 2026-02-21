import { Mail, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1.5 w-20 bg-violet-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-400 text-lg">
                Have a project in mind? Let's talk about how I can help you build something amazing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mr-4 group-hover:bg-violet-500/20 transition-all">
                  <Mail className="text-violet-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a href="mailto:pachaiperumal591813@gmail.com" className="text-lg font-bold hover:text-violet-400 transition-colors">
                    pachaiperumal591813@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mr-4 group-hover:bg-violet-500/20 transition-all">
                  <Phone className="text-violet-400" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <a href="tel:9080414539" className="text-lg font-bold hover:text-violet-400 transition-colors">
                    9080414539
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="font-bold mb-4">Follow Me</p>
              <div className="flex space-x-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a key={i} href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:text-violet-400 hover:border-violet-500/50 transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
                  <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-violet-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                  <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-violet-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-violet-500 transition-colors resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button disabled className="w-full bg-violet-500 hover:bg-violet-600 text-slate-950 font-bold py-4 rounded-2xl transition-all flex items-center justify-center group">
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact