import { useCallback } from 'react';
import { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";

export const ParticlesBackground = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);


  return (
    <div className='particles'>
      <Particles
        init={particlesInit}
        options={{
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 80,
                duration: 0.4,
                force: 0,
              },
            },
          },
          particles: {
            color: {
              value: "#d8617b",
            },
            links: {
              color: "#d8617b",
              distance: 250,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              speed: 1.5,
            },
            number: {
              density: {
                enable: true,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 1, max: 6 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}
