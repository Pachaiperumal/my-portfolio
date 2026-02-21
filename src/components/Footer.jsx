import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative bg-slate-950 pt-16 pb-8 overflow-hidden">

      {/* Ambient Noise Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent blur-[2px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="poppins-light text-slate-400 text-sm mb-2">
              © {currentYear} <span className="text-white font-medium">Pachai Perumal A</span>. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 flex items-center gap-1.5">
              <span>Crafted with passion using</span>
              <span className="audiowide-regular text-violet-400">React & MERN Stack</span>
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="poppins-light text-slate-400 hover:text-white text-sm px-4 py-2 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer