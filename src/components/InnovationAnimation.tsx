import { Canvas } from '@react-three/fiber';
import { Text3D, Center, PresentationControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { Suspense } from 'react';

const AnimatedText3D = () => {
  const animation = useSpring({
    scale: [1.1, 1.1, 1.1],
    from: { scale: [1, 1, 1] },
    config: { tension: 250, friction: 10 },
    loop: { reverse: true },
  });

  return (
    <animated.group scale={animation.scale}>
      <Center>
        <Text3D
          font="/fonts/Inter_Bold.json" // ou qualquer fonte 3D bold que você tenha
          size={1.5}
          height={0.6}
          curveSegments={32}
          bevelEnabled
          bevelThickness={0.08}
          bevelSize={0.04}
          bevelSegments={10}
        >
          inove
          <meshPhysicalMaterial
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            reflectivity={1}
          />
        </Text3D>
      </Center>
    </animated.group>
  );
};

export default function InnovationAnimation() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <spotLight position={[0, 5, 10]} angle={0.2} penumbra={1} intensity={2} />
      <Suspense fallback={null}>
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 3, tension: 1500 }}
          rotation={[0.05, 0.2, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
        >
          <AnimatedText3D />
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
}
