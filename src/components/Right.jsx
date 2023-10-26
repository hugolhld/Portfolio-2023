import React, { Suspense } from 'react'
import Threescene from './Threescene'
import ThreeTest from './ThreeTest'
import CC from './CC'
import { Canvas } from '@react-three/fiber'
import Three from './Three'
import { Center, Loader } from '@react-three/drei'
import GlobeComp from './GlobeComp'

const Right = ({countScroll, mainRef}) => {
  return (
    <div id='contentThree' className='md:w-1/2  w-full flex justify-center items-center fixed z-10 backdrop-blur-lg md:backdrop-blur-0 h-[50vh] md:h-screen'>
        {/* <div className=' w-4/5 h-3/5 shadow-2xl'> */}
            {/* <Threescene /> */}
            <Canvas shadows  camera={{position: [15, 15, 15], fov: 30}}>
                <Suspense fallback={null}>

                    {/* <group position={[2.5, 0, -2.5]}> */}
                    {/* <Center> */}
                    <group>
                        <Three mainRef={mainRef} countScroll={countScroll} />
                    </group>
                    {/* </Center> */}
                    {/* </group> */}

                </Suspense>
            </Canvas>
            <Loader />

            {/* <GlobeComp /> */}

            {/* <CC/> */}
        {/* </div> */}
    </div>
  )
}

export default Right