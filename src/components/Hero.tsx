import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, ArrowRight } from "lucide-react";
import { ROLES } from "../data/portfolioData";
import profilePic from "../images/pic.png";

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-16 pt-24 overflow-hidden"
    >
      <div className="flex flex-1 justify-center items-center relative order-1 lg:order-2 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative
          w-[260px] h-[260px]
          sm:w-[320px] sm:h-[320px]
          md:w-[360px] md:h-[360px]
          lg:w-[400px] lg:h-[400px]"
        >
          <div className="absolute inset-0 rounded-full border border-white/5 animate-orbit-slow" />
          <div className="absolute inset-4 rounded-full border border-accent-blue/10 animate-orbit-fast" />
          <div
            className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-40 h-40
            sm:w-52 sm:h-52
            md:w-60 md:h-60
            lg:w-64 lg:h-64
            rounded-full glass
            border border-white/20
            p-1
            shadow-[0_0_100px_rgba(56,189,248,0.15)]
          "
          >
            <div className="w-full h-full rounded-full bg-space-700 overflow-hidden">
              <img
                src={profilePic}
                alt="Subhojeeth Mandal"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {Array.from({ length: 9 }, (_, i) => i * 40).map((deg, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-8 h-8"
              animate={{ rotate: [deg, deg + 360] }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                marginTop: "-10px",
                marginLeft: "-10px",
              }}
            >
              <div
                className="absolute w-3 h-3 rounded-full bg-accent-blue shadow-[0_0_10px_#38BDF8]"
                style={{
                  top:
                    window.innerWidth < 640
                      ? "-90px"
                      : window.innerWidth < 768
                      ? "-110px"
                      : "-130px",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex-1 max-w-4xl z-10 text-center lg:text-left order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-2 tracking-tight leading-[1.1]">
            Subhojeeth
          </h1>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan">
              Mandal
            </span>
          </h1>
        </motion.div>

        <div className="h-16 mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl text-slate-400 font-light"
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
        >
          I engineer high-performance digital experiences. Specializing in
          robust Java backends and seamless React frontends to build scalable
          systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
        >
          <a
            href="/resume.pdf"
            download="Subhojeeth_Mandal_Resume.pdf"
            className="group relative px-8 py-4 glass rounded-full text-white font-medium overflow-hidden hover:border-accent-blue/50 transition-colors inline-block"
          >
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            <span className="relative flex items-center gap-2">
              Download Resume
              <Download size={18} />
            </span>
          </a>

          <a
            href="#projects"
            className="group px-8 py-4 rounded-full text-accent-blue font-medium flex items-center gap-2 hover:gap-4 transition-all"
          >
            View Projects
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};