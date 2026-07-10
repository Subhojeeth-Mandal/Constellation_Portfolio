import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

export const Constellation = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div className="fixed inset-0 -z-20 bg-space-900">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { 
              value: 100, 
              density: { enable: true, area: 800 } 
            },
            color: { value: "#ffffff" },
            links: {
              enable: true,
              distance: 150,
              color: "#38BDF8",
              opacity: 0.2,
              width: 1,
            },
            move: { 
              enable: true, 
              speed: 0.4, 
              direction: "none",
              outModes: { default: "bounce" }
            },
            opacity: {
              value: { min: 0.1, max: 0.7 },
              animation: { enable: true, speed: 1 }
            },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: { 
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" }
            },
            modes: { 
              grab: { distance: 200, links: { opacity: 0.5 } },
              push: { quantity: 4 }
            },
          },
          detectRetina: true,
        }}
        className="h-full w-full"
      />
    </div>
  )
}
