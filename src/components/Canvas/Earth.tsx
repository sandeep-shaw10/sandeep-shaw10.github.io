import { Canvas, useLoader } from "react-three-fiber";
import { lazy, Suspense, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import useThemes from "../../hooks/contextTheme";
import { Loader2 } from "../Loader";

const Earth = () => {
  const textureDay = useLoader(THREE.TextureLoader, "/texture/night.webp");
  const textureNight = useLoader(THREE.TextureLoader, "/texture/day.webp");
  const { theme } = useThemes();

  const texture = useMemo(() => (theme ? textureDay : textureNight), [theme]);
  const intensity = theme ? 5 : 0.25;
  return (
    <Suspense fallback={<Loader2 />}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 60 }}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={-0.5}
          enableZoom={false}
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={intensity} />
        <pointLight position={[15, 25, -15]} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </Canvas>
    </Suspense>
  );
};

export default Earth;
