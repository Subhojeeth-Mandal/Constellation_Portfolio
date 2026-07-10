import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Github, X, Monitor, Smartphone } from 'lucide-react'
import { projects } from '../data/portfolioData'

const PlatformBadges = ({ platforms }: { platforms: string[] }) => (
  <div className="flex gap-3 mb-4">
    {platforms.includes('desktop') && (
      <span className="flex items-center gap-1 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-md px-2 py-1">
        <Monitor size={13} className="text-accent-blue" /> Desktop
      </span>
    )}
    {platforms.includes('mobile') && (
      <span className="flex items-center gap-1 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-md px-2 py-1">
        <Smartphone size={13} className="text-accent-purple" /> Mobile
      </span>
    )}
  </div>
)

const TiltCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative glass rounded-2xl p-6 h-full flex flex-col cursor-pointer hover:border-white/20 transition-colors"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
      />

      <div className={`h-42 w-full rounded-xl mb-6 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity overflow-hidden`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">🚀</div>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-slate-400 text-sm mb-4 flex-grow">{project.desc}</p>

      <PlatformBadges platforms={project.platforms} />

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/5">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-sm text-white transition-colors"
          >
            <Github size={16} /> Code
          </a>
        ) : (
          <span className="flex items-center gap-1 text-sm text-slate-600 cursor-not-allowed">
            <Github size={16} /> Code
          </span>
        )}
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-sm text-white transition-colors"
          >
            <ExternalLink size={16} /> Live
          </a>
        ) : (
          <span className="flex items-center gap-1 text-sm text-slate-600 cursor-not-allowed">
            <ExternalLink size={16} /> Live
          </span>
        )}
      </div>

      {isHovered && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: '0 0 30px rgba(56, 189, 248, 0.1)' }} />
      )}
    </motion.div>
  )
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-24 px-6 lg:px-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={p.id} onClick={() => setSelectedProject(p)}>
              <TiltCard project={p} index={i} />
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              key="project-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-strong p-8 rounded-2xl max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full"
                >
                  <X size={20} className="text-red-600" />
                </button>

                <div className={`h-48 rounded-xl mb-6 bg-gradient-to-br ${selectedProject.color} overflow-hidden`}>
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">🚀</div>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-slate-400 mb-4">{selectedProject.desc}</p>

                <PlatformBadges platforms={selectedProject.platforms} />

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {selectedProject.github ? (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-accent-blue hover:text-white transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-sm text-slate-600 cursor-not-allowed">
                      <Github size={16} /> Code
                    </span>
                  )}
                  {selectedProject.live ? (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-accent-blue hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-sm text-slate-600 cursor-not-allowed">
                      <ExternalLink size={16} /> Live
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}