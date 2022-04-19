export default function Points({ lon, lat, radius }) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = (radius * Math.sin(phi) * Math.cos(theta))
  const z = -(radius * Math.sin(phi) * Math.sin(theta))
  const y = (radius * Math.cos(phi))

  return (
    <mesh position={[x, y, z]} >
      <sphereBufferGeometry args={[0.03, 30, 30]} />
      <meshBasicMaterial color="#f20404" />
    </mesh >

  )
}
