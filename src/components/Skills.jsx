import { motion, useScroll, useTransform } from 'framer-motion'
import { MonitorSmartphone, Server, Database, Code2 } from 'lucide-react'
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiFramer,
  SiNodedotjs, SiMongodb, SiPostgresql, SiSqlite, SiExpress, SiJsonwebtokens
} from 'react-icons/si'
import { useMediaQuery } from 'react-responsive'

const Skills = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const yBg1 = isMobile ? 0 : y
  const yBg2 = isMobile ? 0 : y2

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <MonitorSmartphone className="text-violet-400 mb-4" size={32} />,
      gradient: "from-violet-500/20 to-fuchsia-500/20",
      borderGlow: "group-hover:border-violet-500/50",
      pillHoverBg: "hover:bg-violet-500/20 hover:border-violet-400/50 hover:text-violet-300",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] rounded-sm bg-black" /> },
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-white" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-fuchsia-400 mb-4" size={32} />,
      gradient: "from-fuchsia-500/20 to-indigo-500/20",
      borderGlow: "group-hover:border-fuchsia-500/50",
      pillHoverBg: "hover:bg-fuchsia-500/20 hover:border-fuchsia-400/50 hover:text-fuchsia-300",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "RESTful APIs", icon: <Server className="text-fuchsia-400" size={14} /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-[#000000] bg-white rounded-sm" /> }
      ]
    },
    {
      title: "Database Architecture",
      icon: <Database className="text-indigo-400 mb-4" size={32} />,
      gradient: "from-indigo-500/20 to-violet-500/20",
      borderGlow: "group-hover:border-indigo-500/50",
      pillHoverBg: "hover:bg-indigo-500/20 hover:border-indigo-400/50 hover:text-indigo-300",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Mongoose", icon: <Database className="text-[#880000]" size={14} /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "SQL", icon: <SiSqlite className="text-[#003B57]" /> }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-slate-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-500">

      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0 opacity-40">
        <motion.div
          style={{ y: yBg1 }}
          className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
        />
        <motion.div
          style={{ y: yBg2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-fuchsia-600/10 rounded-full blur-[140px] mix-blend-screen pointer-events-none"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 relative flex flex-col items-center"
        >
          <span className="audiowide-regular text-fuchsia-400 tracking-[0.3em] uppercase text-sm mb-4">My Expertise</span>
          <h2 className="playfair-display-bold text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white pb-2 relative inline-flex justify-center flex-col items-center transition-colors duration-500">
            Tech Stack
            <div className="absolute -bottom-2 w-32 h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent rounded-full opacity-70" />
            <div className="absolute -bottom-4 w-16 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full opacity-40" />
          </h2>
          <p className="poppins-light mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-500">
            The architecting tools and technologies I use to bring ideas to life, building robust and scalable digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={isMobile ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 relative"
        >
          {/* Decorative Code Bracket Background */}
          <div className="absolute hidden xl:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-[-1]">
            <Code2 size={600} />
          </div>

          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`glass p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/5 transition-all duration-300 group relative overflow-hidden ${category.borderGlow} hover:shadow-2xl hover:shadow-violet-500/10`}
            >
              {/* Card Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 origin-left">
                  {category.icon}
                </div>
                <h3 className="montserrat-bold text-2xl mb-8 text-slate-900 dark:text-white relative inline-block transition-colors duration-500">
                  {category.title}
                  <div className="absolute -bottom-2 left-0 w-12 h-[2px] bg-slate-400/50 dark:bg-white/20 group-hover:bg-slate-600 dark:group-hover:bg-white/50 group-hover:w-full transition-all duration-300" />
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md rounded-xl text-sm font-medium border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-xl transition-all cursor-default ${category.pillHoverBg}`}
                    >
                      {skill.icon}
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills