import { ExternalLink, Github, MessageSquare, School, Terminal } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiRedux, SiSocketdotio, SiJsonwebtokens
} from 'react-icons/si'

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "A full-featured chat platform featuring real-time messaging, end-to-end encryption, user authentication, and group chat capabilities.",
      tech: [
        { name: "MERN Stack", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> }
      ],
      icon: <MessageSquare className="text-violet-400 group-hover:scale-110 transition-transform duration-500" size={32} />,
      gradient: "from-violet-500/20 to-fuchsia-500/20",
      borderGlow: "group-hover:border-violet-500/50 hover:shadow-violet-500/10",
      iconBg: "bg-violet-500/10",
      link: "#",
      github: "#"
    },
    {
      title: "School Management System",
      description: "A multi-tenant SaaS application for managing school operations, including student records, staff management, and fee tracking.",
      tech: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ],
      icon: <School className="text-indigo-400 group-hover:scale-110 transition-transform duration-500" size={32} />,
      gradient: "from-indigo-500/20 to-violet-500/20",
      borderGlow: "group-hover:border-indigo-500/50 hover:shadow-indigo-500/10",
      iconBg: "bg-indigo-500/10",
      link: "#",
      github: "#"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">

      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-[10%] -right-32 w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full blur-[140px] mix-blend-screen"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[10%] -left-32 w-[35rem] h-[35rem] bg-fuchsia-600/20 rounded-full blur-[120px] mix-blend-screen"
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
          className="text-center mb-24 relative flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="audiowide-regular text-indigo-400 tracking-[0.3em] uppercase text-sm mb-4 block">My Work</span>
          </motion.div>

          <h2 className="playfair-display-bold text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white pb-2 relative inline-flex justify-center flex-col items-center overflow-visible">
            Featured Projects

            {/* Glow Expand Animation */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "10rem", opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4, ease: "circOut" }}
              className="absolute -bottom-2 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"
            />
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "5rem", opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6, ease: "circOut" }}
              className="absolute -bottom-4 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"
            />
          </h2>
          <p className="poppins-light mt-8 text-lg text-slate-400 max-w-[520px] mx-auto leading-[1.7]">
            A showcase of my technical expertise, focusing on building scalable architecture, real-time systems, and beautiful user interfaces.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-10 md:gap-14"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`glass p-8 md:p-10 rounded-3xl border border-white/5 transition-all duration-500 group relative overflow-hidden shadow-xl ${project.borderGlow}`}
            >
              {/* Card Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`inline-block p-4 rounded-2xl ${project.iconBg} transform transition-transform duration-500 group-hover:-rotate-3`}>
                    {project.icon}
                  </div>
                  {/* Decorative Terminal Icon Top Right */}
                  <Terminal className="text-slate-600 opacity-20" size={80} />
                </div>

                <h3 className="montserrat-bold text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="poppins-light text-slate-300 mb-8 leading-[1.7] text-lg max-w-[500px] flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((t) => (
                    <span
                      key={t.name}
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur-md rounded-xl text-xs font-semibold border border-white/5 text-slate-300 shadow-md transition-colors"
                    >
                      {t.icon}
                      {t.name}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6 mt-auto">
                  <a
                    href={project.github}
                    className="flex items-center text-sm font-bold text-slate-300 hover:text-white transition-colors group/link"
                  >
                    <Github className="mr-2 group-hover/link:-translate-y-1 transition-transform" size={18} />
                    Source
                  </a>
                  <a
                    href={project.link}
                    className="flex items-center text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                  >
                    <ExternalLink className="mr-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects