import { motion } from 'framer-motion'
import { Code2, Database, Layers, Zap } from 'lucide-react'
import { GlassCard } from './ui/GlassCard'

const features = [
  { icon: Code2, title: 'Clean Code', desc: 'Writing efficient, maintainable, and scalable code architecture.' },
  { icon: Database, title: 'Robust Backend', desc: 'Microservices and secure REST APIs with Spring Boot.' },
  { icon: Layers, title: 'Pixel Perfect UI', desc: 'Responsive designs with Tailwind CSS and smooth Framer Motion.' },
  { icon: Zap, title: 'High Performance', desc: 'Optimized load times and efficient state management.' },
]

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Beyond The <span className="text-accent-purple">Code</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              I am a Full Stack Developer with a passion for building scalable web applications. My journey revolves around mastering Java ecosystems and creating intuitive UI with React. I thrive in distributed environments and complex problem-solving.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I'm not coding, I explore system design patterns and contribute to open-source projects to stay aligned with the latest tech evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full hover:border-accent-blue/30 transition-colors group">
                  <f.icon className="text-accent-blue mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400">{f.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
