const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {currentYear} Pachai Perumal A. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#home" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">Home</a>
            <a href="#about" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">About</a>
            <a href="#projects" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">Projects</a>
            <a href="#contact" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer