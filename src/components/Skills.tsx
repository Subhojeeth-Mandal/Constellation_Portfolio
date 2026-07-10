import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "../data/portfolioData";

export const Skills = () => {
  const radius = 220;

  return (
    <section
      id="skills"
      className="relative z-10 flex flex-col items-center overflow-hidden py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 px-6 text-center"
      >

        <h2 className="text-4xl font-bold lg:text-5xl">
          My Galaxy of Skills
        </h2>
      </motion.div>

      <div className="relative h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] md:h-[600px] md:w-[600px]">

        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 sm:h-[340px] sm:w-[340px] md:h-[450px] md:w-[450px]" />

        <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 sm:h-[390px] sm:w-[390px] md:h-[520px] md:w-[520px]" />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="glass-strong flex h-24 w-24 items-center justify-center rounded-full border border-white/20 text-lg font-bold tracking-widest text-white shadow-[0_0_60px_rgba(56,189,248,0.4)] md:h-32 md:w-32">
            CORE
          </div>
        </motion.div>

        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index;
          const duration = 22 + index * 2;

          return (
            <motion.div
              key={skill.name}
              className="absolute left-1/2 top-1/2"
              animate={{
                rotate: angle + 360,
              }}
              initial={{
                rotate: angle,
              }}
              transition={{
                duration,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <motion.div
                animate={{
                  rotate: -(angle + 360),
                }}
                initial={{
                  rotate: -angle,
                }}
                transition={{
                  duration,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className={`absolute flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl border glass transition-all duration-300 hover:scale-125 md:h-20 md:w-20 ${skill.bg}`}
                style={{
                  top: -radius,
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center">
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className={`${skill.color} text-3xl`}/>
                    <span className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};