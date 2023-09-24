import { Box, Center, Float, OrbitControls, Sphere } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import BlockElement from './BlockElement'
import BlockSingle from './BlockSingle'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import scrollHooks from '../functions/scrollHooks'
import Globe from 'react-globe.gl'

gsap.registerPlugin(ScrollTrigger)

const Three = ({countScroll, mainRef}) => {
    // console.log(countScroll)
    

    const [showWireframe, setShowWireframe] = useState(true)

    const groupRef = useRef()
    const opaRef = useRef()
    const globeRef = useRef()

    const {camera} = useThree()

    const [tetetet, settetetet] = useState(0)
    let num = 0
    const handleScroll = (e) => {

        // e.preventDefault()
    
        // if(window.scrollY > window.innerHeight) {
        //   console.log('++')
        // }
        // console.log(tetstt.current.scrollTop)
        // console.log(tetstt.current.children)
        // console.log(tetstt.current.childNodes)
        // if(tetstt.current.childNodes) {
        // }
        for(const el of document.querySelector('#scrollContainer').childNodes) {
          // console.log(el.offsetHeight)
          // console.log(el.scrollHeight)
          // console.log(el.clientHeight)
          // console.log(el.scrollTop)
          // console.log(tetstt.current.scrollTop)
          // console.log(el.offsetTop)
          if(Math.round(document.querySelector('#scrollContainer').scrollTop) >= el.offsetTop) {
            // console.log(el)
            el.style.background = 'blue'
            // setcountScroll(countScroll + 1)
            // console.log('cc')
            num += 1
            // console.log(num)
            // settetetet(prev => prev + 1)
            // countScroll += 1
          } else {
            el.style.background = 'none'
          }
        }
      }

    //   document.querySelector('#scrollContainer').addEventListener('scroll', handleScroll)

      let scroll = 0

      const scrollPercentage = e => {

        let scrollValuePercent = Math.floor(window.scrollY / (document.body.offsetHeight - window.innerHeight ) * 100)

        let screenPercent = Math.floor(window.innerHeight / document.body.offsetHeight * 100)

        console.log(screenPercent)
        console.log(scrollValuePercent)

        // console.log(sc)

        // console.log(Math.floor(window.scrollY / (document.body.offsetHeight - window.innerHeight ) * 100))
    }

    // window.addEventListener('scroll', e => scrollPercentage(e))

    /**
 * Scroll
 */
let scrollY = window.scrollY
let currentSection = 0


// let ttt = scrollHooks()
// console.log(scrollHooks())

// window.addEventListener('click', () => {
//     console.log(ttt)
// })



const [sectionIndex, setSectionIndex] = useState(0)

let cameraTest 

let activeScroll = false

window.addEventListener('scroll', () =>
{
    if(!activeScroll) {
        activeScroll = true
    }
    // console.log(groupRef.current)
    // groupRef.current.forEach(el => console.log(el))
    // console.log(groupRef.current.children[0].translation)
    scrollY = window.scrollY
    const newSection = Math.round(scrollY / window.innerHeight)
    // setcurrentSection(Math.round(scrollY / window.innerHeight))
    // console.log((scrollY / window.innerHeight) - Math.round(scrollY / window.innerHeight))

    if(newSection != currentSection)
    {
        // console.log(newSection)
        // console.log(currentSection)
        currentSection = newSection
        // setcurrentSectionState(newSection)
        // setSectionIndex(newSection)
        console.log('new section')
        // gsap.to(
        //     sectionMeshes[currentSection].rotation,
        //     {
        //         duration: 1.5,
        //         ease: 'power2.inOut',
        //         x: '+=6',
        //         y: '+=3',
        //         z: '+=1.5'
        //     }
        // )
        // console.log(camera)
        
    }

    if(currentSection == 1) {
    
        // if(groupRef) {
        //     gsap.to(groupRef.current.rotation, {
                
        //         scrollTrigger: {
        //             markers: true,
        //             trigger: mainRef.current.children[1]
        //         },
        //         y: Math.PI * 2,
        //         duration: 3
        //     })
        // }

    } else if(currentSection == 2) {

        // let scrollYSecond = window.scrollY
        // let docHeightSecond = document.querySelector('').offsetHeight
        // let winheightSecond = window.innerHeight
        // let secondPercent = scrollYSecond / (docHeightSecond - winheightSecond)

        // console.log(mainRef.current.children[2])

        // if(groupRef.current.position) {
            // gsap.to(groupRef.current.position, {
            //     scrollTrigger: {
            //         markers: true,
            //         trigger: mainRef.current.children[2]
            //     },
            //     // y: 10,
            //     y: 0,
            //     duration: 3
            // })
        // }

        // console.log(cameraTest.rotation)
        // console.log(mainRef.current.children[2] /* .children[2] */)
        // gsap.to(cameraTest.rotation, {
        //     scrollTrigger: {
        //         trigger: mainRef.current.children[2]
        //     },
        //     x =
        // })

        // gsap.to(groupRef.current.position, {
        //     scrollTrigger: {
        //         trigger: mainRef.current.children[2]
        //     },
        //     // y: 20,
        //     y: 20,
        //     rotation: 360,
        //     duration: 10
        // })
        // gsap.to(groupRef.current.rotation, {
        //     scrollTrigger: {
        //         trigger: mainRef.current.children[2],
        //         start: 'top center',
        //         end: 'bottom center'
                
        //     },
        //     // y: 20,
        //     y: '+= 6.28',
        //     // duration: 2
        // })
        // console.log(cameraTest)
        const scrollAngle = /* (Math.PI * 2) * */ ((scrollY / 5) / window.innerHeight)
        // gsap.to(actions)
        // gsap.to(camera.position, {
        //     scrollTrigger: {
        //         trigger: mainRef.current.children[2],
        //         start: 'top center',
        //         end: 'bottom center'
        //     },
        //     x: Math.sin(scrollAngle) * 15,
        //     y: Math.cos(scrollAngle) * 15
        // })
    } else if(currentSection == 3){
        // console.log(floorRef.current)
    //     gsap.to(floorRef.current, {
    //         scrollTrigger: {
    //             trigger: mainRef.current.children[3]
    //         }, 
    //         x: 10,
    //         y: 0,
    //         z: 0
    // })
    }
})


// if(activeScroll) {
// }

const tl = gsap.timeline({
    scrollTrigger: {
        // markers: true,
        trigger: mainRef.current.children[1],
        scrub: 1
    },
})

useEffect(() => {
    // gsap.to(groupRef.current.rotation, {
        
    //     scrollTrigger: {
            // markers: true,
    //         trigger: mainRef.current.children[1]
    //     },
    //     y: Math.PI * 2,
    //     duration: 3
    // })
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
            start: 'center center'
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

// useEffect(() => {
//   gsap.to(globeRef.current.position, {
//     scrollTrigger: {
//         trigger: mainRef.current.children[3],
//         scrub: true,
//         markers: true,
//         start: 'center center'
//     },
//     y: '+=20',
//     duration: 3
//   })
// }, [globeRef.current])




useFrame((state, delta) => {

    cameraTest= state.camera


    if(currentSection == 1) {
        console.log('first')
        // const angle = state.clock.elapsedTime
        // // console.log( groupRef.current.position.x)
        // const scrollAngle = /* (Math.PI * 2) * */ (scrollY / window.innerHeight)
        // state.camera.position.x = /* 10 + */ (Math.sin(scrollAngle) * 15)
        // state.camera.position.z = /* 10 + */ (Math.cos(scrollAngle) * 15)
        // state.camera.position.y = 15
        // state.camera.lookAt(0, 0, 0)
    } else if(currentSection == 2) {

        console.log('second')

        // state.camera.position.x = 15
        // state.camera.position.z = 15
        // state.camera.lookAt(0, 0, 0)

        // let angle = state.clock.elapsedTime

        // if(angle < Math.PI) {
        //     angle += state.clock.elapsedTime
        // } else {
        //     angle = Math.PI
        // }

        // const rotation = new THREE.Quaternion()
        // rotation.setFromEuler(new THREE.Euler(0, 0, angle))
        // floorRef.current.setRotation(rotation)
        // console.log(floorRef.current)
        // console.log('floor')
        // floorRef.current.setRotation()
        
    } else if(currentSection == 3 ) {
        // groupRef.current.rotation.z += 0.01
        let angle = state.clock.elapsedTime 
        const rotation = new THREE.Quaternion()

        console.log('three')
        // rotation.setFromEuler(new THREE.Euler(Math.sin(angle), 0, Math.cos(angle)))
        // groupRef.current.setTranslation({x: Math.sin(angle) * 7.5, y: 0, z: Math.cos(angle) * 7.5})
        // groupRef.current.position.x = Math.sin(angle) 
        // groupRef.current.position.z = Math.cos(angle) 
        // groupRef.current.rotation.x = Math.sin(angle) * 15
        // groupRef.current.rotation.z = Math.cos(angle) * 15
    }

})

    
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
    // const finalCoord = [
    //     [2, 2, -3],
    //     [2, 1, -3],
    //     [2, 0, -3],
    //     [3, 1, -3],
    //     [4, 2, -3],
    //     [4, 1, -3],
    //     [4, 0, -3],
    //     [5, 0, -3],
    //   ]

      const [elementCollision] = useState(0)
      
    const floorRef = useRef()

    const [colorTemp, setcolorTemp] = useState('blue')

    // window.addEventListener('click', () => setcolorTemp('black'))

    const N = 300;
    const gData = [...Array(N).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        size: Math.random() / 3,
        color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
    }));

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

                                // :

                                // null
                            }

                        <RigidBody type='fixed'  position={[0, 4.5, -4.5]}>
                            <Box args={[10, 10, 1]}>
                                <meshStandardMaterial transparent={true} opacity={0} />
                            </Box>
                        </RigidBody>

                        <RigidBody type='fixed' position={[-4.5, 4.5, 0]}>
                            <Box args={[1, 10, 10]}>
                                <meshStandardMaterial transparent={true} opacity={0} />
                            </Box>
                        </RigidBody>

                        <RigidBody type='fixed' position={[4.5, 4.5, 0]}>
                            <Box args={[1, 10, 10]}>
                                <meshStandardMaterial transparent={true} opacity={0} />
                            </Box>
                        </RigidBody>
                        <RigidBody type='fixed' position={[0, 4.5, 4.5]}>
                            <Box args={[10, 10, 1]}>
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

        <group ref={globeRef} >
            {/* <Globe
                globeImageUrl="../assets/earth-dark.jpg"
                pointsData={gData}
                pointAltitude='size'
                pointColor='color'
            /> */}

            {/* <Sphere position={[0, -20, 0]} args={[1.5, 32]}>
                <meshPhongMaterial color={'blue'} />
            </Sphere> */}
            {/* <mesh>
                <sphereGeometry args={[1, 32]} />
            </mesh> */}
        </group>

    </group>
  )
}

export default Three