import React, { Suspense } from 'react'
import Threescene from './Threescene'
import ThreeTest from './ThreeTest'
import CC from './CC'
import { Canvas } from '@react-three/fiber'
import Three from './Three'
import { Center } from '@react-three/drei'

const Right = ({countScroll, mainRef}) => {
  return (
    <div className='w-1/2 h-screen flex justify-center items-center fixed z-1'>
        {/* <div className=' w-4/5 h-3/5 shadow-2xl'> */}
            {/* <Threescene /> */}
            <Canvas shadows  camera={{position: [15, 15, 15], fov: 30}}>
                <Suspense>

                    {/* <group position={[2.5, 0, -2.5]}> */}
                    {/* <Center> */}
                    <group>
                        <Three mainRef={mainRef} countScroll={countScroll} />
                    </group>
                    {/* </Center> */}
                    {/* </group> */}

                </Suspense>
            </Canvas>
            {/* <CC/> */}
        {/* </div> */}
    </div>
  )
}

export default Right