import { Html } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"

import Earth from "./components/Earth"
import Points from "./components/Points"

function App() {
  const [point, setPoint] = useState({
    lon: "",
    lat: "",
  })
  const [newPoint, setNewPoint] = useState([])

  const handleNewPoint = () => {
    setNewPoint([...newPoint, point])
  }
  return (
    <Canvas style={{ cursor: "pointer" }}>
      <color attach="background" args={["#000000"]} />
      <Suspense fallback={null}>
        {newPoint.length > 0 &&
          newPoint.map(({ lon, lat }, i) => (
            <Points radius="2" lon={lon} lat={lat} />
          ))}
        <Earth />
        <Html
          style={{
            position: "fixed",
            width: "100vw",
            height: "50vh",
            left: "0%",
            bottom: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: "50%",
              width: "200px",
              marginTop: "15px",
              marginRight: "15px",
            }}
          >
            <h1>Set Coordinate</h1>
            <input
              type="text"
              style={{
                background: "gray",
                padding: "2px",
                marginBottom: "5px",
                marginTop: "5px",
                width: "100%",
              }}
              placeholder="Longitude"
              value={point.lon}
              onChange={(e) => setPoint({ ...point, lon: e.target.value })}
            />
            <input
              type="text"
              style={{
                background: "gray",
                padding: "2px",
                marginBottom: "5px",
                width: "100%",
              }}
              placeholder="Latitude"
              value={point.lat}
              onChange={(e) => setPoint({ ...point, lat: e.target.value })}
            />
            <button style={{ width: "100%" }} onClick={() => handleNewPoint()}>
              Create
            </button>
          </div>
        </Html>
      </Suspense>
    </Canvas>
  )
}

export default App
