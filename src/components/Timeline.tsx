import { motion } from "framer-motion";
import { timelineItems } from "../data/portfolioData";

export const Timeline = () => {
  return (
    <section id="timeline" className="relative z-10 px-6 py-24 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold lg:text-5xl">
            Mission Timeline
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-accent-blue via-accent-purple to-transparent"
          />

          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: isLeft ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`relative flex items-center mb-16 ${
                  isLeft
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 pl-14 md:pl-0 ${
                    isLeft
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12"
                  }`}
                >
                  <span className="font-mono text-sm text-accent-blue">
                    {item.year}
                  </span>

                  <h3 className="mt-2 mb-3 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="max-w-sm text-sm text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-blue glass-strong shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                  >
                    <Icon
                      size={16}
                      className="text-accent-blue"
                    />
                  </motion.div>
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};