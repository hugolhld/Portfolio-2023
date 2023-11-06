import { useEffect, useRef, useState } from 'react'
import { Box } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import BlockSingle from './BlockSingle'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Three = ({countScroll, mainRef}) => {

    const [showWireframe, setShowWireframe] = useState(true)

    const groupRef = useRef()
    const opaRef = useRef()
    const globeRef = useRef()

    /**
 * Scroll
 */

const tl = gsap.timeline({
    scrollTrigger: {
        // markers: true,
        trigger: mainRef.current.children[1],
        scrub: 1
    },
})

useEffect(() => {

    gsap.to(groupRef.current.rotation, {
        scrollTrigger: {
            trigger: mainRef.current.children[1],
            scrub: true,
            end: 'center center'
            // markers: true
        }, 
        y: Math.PI * 2,
        duration: 3
    })

    for(const child of groupRef.current.children[2].children) {
        gsap.to(child.children[0].material, {
            scrollTrigger: {
                trigger: mainRef.current.children[2],
                scrub: true,
                end: 'center center'
                // markers: true,
                // start: 'top top',
                // end: '+=100'
            }, 
            opacity: 0,
            // wireframe: false,
            // transparent: true,
            duration: 3,
            
        })
      }
    for(const child of groupRef.current.children[2].children) {
        gsap.to(child.children[0].position, {
            scrollTrigger: {
                trigger: mainRef.current.children[2],
                scrub: true,
                end: 'center center'
                // markers: true,
                // start: 'top top',
                // end: '+=100'
            }, 
            z: -1,
            // wireframe: false,
            // transparent: true,
            duration: 3,
            
        })
      }

      gsap.to(groupRef.current.position, {
        scrollTrigger: {
            trigger: mainRef.current.children[3],
            scrub: true,
            // markers: true,
            start: 'center center',
            // toggleClass: {className: "backdrop-blur-lg", targets: "#contentThree"}
            onLeave: () => {
                document.querySelector('#contentThree').classList.remove('backdrop-blur-lg')
            },
            onEnterBack: () => {
                document.querySelector('#contentThree').classList.add('backdrop-blur-lg')
            }
        },
        y: '+=10',
        duration: 3
      })
}, [groupRef.current])

useEffect(() => {
//   console.log(opaRef)

  for(const child of opaRef.current.children[0].children) {
    gsap.to(child.material, {
        scrollTrigger: {
            trigger: mainRef.current.children[2],
            scrub: true,
            end: 'center center'
            // markers: true
        }, 
        opacity: 1,
        duration: 3
    })
  }
  console.log(opaRef)

  gsap.to(opaRef.current.children[1].material, {
    scrollTrigger: {
        trigger: mainRef.current.children[2],
        scrub: true,
        end: 'center center'
        // markers: true,
    },
    opacity: 1,
    duration: 3
  })
}, [opaRef])


    
    const finalCoord = [
        [-1, 2, 0],
        [-1, 1, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [1, 2, 0],
        [1, 1, 0],
        [1, 0, 0],
        [2, 0, 0],
      ]

    const floorRef = useRef()

  return (
    <group>
        <group /* type='fixed' */ ref={groupRef}/* position={[6, 0, -6]}*/ >
            <Physics>

                    <ambientLight intensity={0.2} />
                    {/* <directionalLight position={[-10, 10, 0]} intensity={0.4} /> */}
                    <pointLight position={[0, 5, 5]} intensity={0.6} />

                    {/* <OrbitControls />  */}

                    {/* <Float> */}

                            {
                                showWireframe &&

                                <group /* ref={groupRef} */ position={[0, 1, 0]}  /* position={[-1.2, 1, 0.3]} */ rotation={[0, 1, 0]}> 


                                {
                                    finalCoord.map((element, index) => {

                                        return <BlockSingle key={index} mainRef={mainRef.current.children[0]} index={index} pos={element} section={0} />

                                    })
                                }

                                </group>

                            }

                        <RigidBody type='fixed'  position={[0, 4.5, -4.5]}>
                            <Box args={[10, 20, 1]}>
                                <meshStandardMaterial transparent={true} opacity={0} />
                            </Box>
                        </RigidBody>

                        <RigidBody type='fixed' position={[-4.5, 4.5, 0]}>
                            <Box args={[1, 20, 10]}>
                                <meshStandardMaterial transparent={true} opacity={0} />
                            </Box>
                        </RigidBody>

                        <RigidBody type='fixed' position={[4.5, 4.5, 0]}>
                            <Box args={[1, 20, 10]}>
                                <meshStandardMaterial transparent={true} opacity={0} />
                            </Box>
                        </RigidBody>
                        <RigidBody type='fixed' position={[0, 4.5, 4.5]}>
                            <Box args={[10, 20, 1]}>
                                <meshStandardMaterial transparent={true} opacity={0} />
                            </Box>
                        </RigidBody>

                        <RigidBody ref={floorRef} position={[0, 0, 0]} type='fixed' onSleep={() => console.log('sleepl')}>
                            <Box args={[8, 1, 8]}>
                                <meshStandardMaterial wireframe color={'grey'} />
                            </Box>
                        </RigidBody>
                    {/* </Float> */}


            </Physics>

            <group ref={opaRef}>
                <group  /* ref={groupRef} */ position={[0, 1, 0]}  /* position={[-1.2, 1, 0.3]} */ rotation={[0, 0, 0]}> 


                    {
                        finalCoord.map((element, index) => {

                            return (
                                <mesh key={index} position={element}>
                                    <boxGeometry args={[1,1,1]} />
                                    <meshPhongMaterial color={0xbb1528} shininess={200} transparent={true} opacity={0} /* color={color} */ />
                                </mesh>
                            )
                        })
                    }

                </group>

                <Box args={[8, 1, 8]}>
                    <meshPhongMaterial transparent={true} color={0x8e44ad} opacity={0} />
                </Box>
            </group>
        </group>

    </group>
  )
}

export default Three