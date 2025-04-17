import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: "links",
        background: {
          color: {
            value: "#000000",
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
            },
          },
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
};

export default ParticlesComponent;