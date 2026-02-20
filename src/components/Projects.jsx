import { ExternalLink, Github, Layers, MessageSquare, School } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "A full-featured chat platform built with the MERN stack featuring real-time messaging, user authentication, and group chat capabilities.",
      tech: ["MERN Stack", "Socket.io", "Redux"],
      icon: <MessageSquare className="text-cyan-400" size={32} />,
      link: "#",
      github: "#"
    },
    {
      title: "School Management System",
      description: "A multi-tenant SaaS application for managing school operations, including student records, staff management, and fee tracking.",
      tech: ["MERN Stack", "JWT", "Tailwind CSS"],
      icon: <School className="text-indigo-400" size={32} />,
      link: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1.5 w-20 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-1 group relative overflow-hidden rounded-[2.5rem]"
            >
              <div className="bg-slate-900/80 p-10 h-full rounded-[2.4rem] border border-transparent hover:border-cyan-500/20 transition-all duration-500">
                <div className="mb-6 inline-block p-4 rounded-2xl bg-cyan-500/10">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-semibold px-3 py-1 bg-slate-800 rounded-full text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-6">
                  <a href={project.github} className="flex items-center text-sm font-bold text-slate-300 hover:text-cyan-400 transition-colors">
                    <Github className="mr-2" size={18} />
                    Source
                  </a>
                  <a href={project.link} className="flex items-center text-sm font-bold text-slate-300 hover:text-cyan-400 transition-colors">
                    <ExternalLink className="mr-2" size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects