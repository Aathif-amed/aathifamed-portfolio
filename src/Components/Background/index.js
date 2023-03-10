import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particleConfig from "./particle-config";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleConfig}
    />
  );
};

export default App;
