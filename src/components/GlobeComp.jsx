import { useEffect, useRef, useState } from 'react'
import customMap from '../assets/custom.geo.json'
import pointMap from '../assets/map.json'
import linesMap from '../assets/lines.json'
import Globe from 'react-globe.gl'
import pinkTexture from '../assets/pink.png'

const GlobeComp = () => {

  const globeRef = useRef()
  const [hexData, setHexData] = useState({features: []})

  useEffect(() => {
    setHexData(customMap)

    globeRef.current.controls().enableZoom = false
    globeRef.current.controls().autoRotate = true
    globeRef.current.controls().autoRotateSpeed = 1
    globeRef.current.pointOfView({lat: 41.3869216449129, long: 2.16558834122826, altitude: 2}, 0)
    
  }, [])

  return (
      <Globe
        ref={globeRef}
        // globeOptions={globeOptions}
        globeImageUrl={pinkTexture}
        // globeImageUrl={'../assets/earth-dark.jpg'}
        // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        // globeImageUrl={earthMap}
        // globeMaterial={'bluue'}
        
        // width={'1/2'}
        // showGlobe={true}
        backgroundColor='rgba(0,0,0,0)'
        // pointsData={gData}
        // pointAltitude='size'
        // pointColor='color'
        // globeMaterial={}
        hexPolygonsData={hexData.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.5}
        hexPolygonColor={() => "#e74c3c"}

        arcsData={linesMap.pulls}
        // arcDashAnimateTime={(d) => 5000}
        arcDashAnimateTime={() => 5000}
        // arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcStroke={"stroke"}

        labelsData={pointMap.coordinates}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.city}
        labelSize={1}
        labelColor={() => '#bdc3c7'}
        labelAltitude={0.01}

        hexBinPointsData={pointMap.coordinates}
        hexBinResolution={3}

      />
  )
}

export default GlobeComp