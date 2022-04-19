import { Stars } from '@react-three/drei'
import { OrbitControls } from "@react-three/drei"
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Earth() {
  const colorMap = useLoader(TextureLoader, './earth.jpg')
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight color="#f20404" position={[200, 200, 200]} intensity={.2} />
      <Stars
        radius={100}
        depth={10}
        count={2000}
        factor={7}
        saturation={0}
        fade
      />
      <mesh>
        <OrbitControls autoRotate autoRotateSpeed={-1.5} enableZoom={false} />
        <sphereGeometry args={[2, 80, 80]} />
        <meshBasicMaterial map={colorMap} />
      </mesh>
    </>
  )
}
