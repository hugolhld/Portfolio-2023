import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Three from './Three'
import { Loader } from '@react-three/drei'

const Right = ({countScroll, mainRef}) => {
  return (
    <div id='contentThree' className='md:w-1/2  w-full flex justify-center items-center fixed backdrop-blur-lg md:backdrop-blur-0 h-[50vh] md:h-screen'>
        <Canvas shadows  camera={{position: [15, 15, 15], fov: 30}}>
            <Suspense fallback={null}>
                <group>
                    <Three mainRef={mainRef} countScroll={countScroll} />
                </group>

            </Suspense>
        </Canvas>
        <Loader />
    </div>
  )
}

export default Right