import { Center, Float, OrbitControls, Plane } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import LogoThree from './LogoThree'
import { Physics, RigidBody } from '@react-three/rapier'

const Threescene = () => {
  return (
    <>    
    {/* // <Canvas shadows>
    //     <Suspense>
    //         <Physics debug> */}
                <directionalLight 
                    position={[2, 3, 2]}
                    castShadow
                />
                {/* <OrbitControls
                    // position={[2, 0, 0]}
                /> */}
                {/* <mesh>
                    <boxGeometry args={[1,1,1]} />
                    <meshBasicMaterial  color={'black'} />
                </mesh> */}
                <Center>
                    <Float
                        position={[1.5, 0, 0]}
                        rotation={[-0.5, 0.4, 0.3]}
                        receiveShadow
                        castShadow
                    >
                        
                        <LogoThree />
                    </Float>

                    {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} castShadow receiveShadow>
                        <planeGeometry args={[20, 10, 1]} />
                    </mesh> */}
                    {/* <RigidBody type='fixed'> */}
                        <Plane args={[200, 100, 1]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} castShadow receiveShadow>

                            <meshBasicMaterial wireframe color={'#2F3640'} />
                        </Plane>
                    {/* </RigidBody> */}
                </Center>
    {/* //         </Physics> */}
    {/* //     </Suspense> */}
    //     {/* <ambientLight intensity={1} /> */}
    {/* // </Canvas> */}
    </>

  )
}

export default Threescene