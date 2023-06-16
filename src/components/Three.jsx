import { Box, Center, Float, OrbitControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import BlockElement from './BlockElement'
import BlockSingle from './BlockSingle'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Three = ({countScroll, mainRef}) => {
    // console.log(countScroll)
    const groupRef = useRef()

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
            console.log('cc')
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

const [sectionIndex, setSectionIndex] = useState(0)

let cameraTest 

window.addEventListener('scroll', () =>
{
    // console.log(groupRef.current)
    // groupRef.current.forEach(el => console.log(el))
    // console.log(groupRef.current.children[0].translation)
    scrollY = window.scrollY
    const newSection = Math.round(scrollY / window.innerHeight)
    // console.log((scrollY / window.innerHeight) - Math.round(scrollY / window.innerHeight))

    if(newSection != currentSection)
    {
        // console.log(newSection)
        currentSection = newSection
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
        console.log(camera)
        
    }

    if(currentSection == 1) {
    
        gsap.to(groupRef.current.position, {
            scrollTrigger: {
                markers: true,
                trigger: mainRef.current.children[1]
            },
            y: 0,
            duration: 3
        })
        
    } else if(currentSection == 2) {

        gsap.to(groupRef.current.position, {
            scrollTrigger: {
                markers: true,
                trigger: mainRef.current.children[2]
            },
            y: 10,
            duration: 3
        })

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


useFrame((state, delta) => {

    cameraTest= state.camera

    if(currentSection == 1) {
        
        // const angle = state.clock.elapsedTime
        // // console.log( groupRef.current.position.x)
        // const scrollAngle = /* (Math.PI * 2) * */ (scrollY / window.innerHeight)
        // state.camera.position.x = /* 10 + */ (Math.sin(scrollAngle) * 15)
        // state.camera.position.z = /* 10 + */ (Math.cos(scrollAngle) * 15)
        // state.camera.position.y = 15
        // state.camera.lookAt(0, 0, 0)
    } else if(currentSection == 2) {


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

  return (
        <group /* type='fixed' */ ref={groupRef}/* position={[6, 0, -6]}*/ >
    <Physics>

            <ambientLight intensity={0.5} />
            <directionalLight position={[-10, 10, 0]} intensity={0.4} />

            <OrbitControls /> 

            {/* <Float> */}

                    <group /* ref={groupRef} */ position={[0, 1, 0]}  /* position={[-1.2, 1, 0.3]} */ rotation={[0, 1, 0]}> 


                        {
                            finalCoord.map((element, index) => {

                                return <BlockSingle key={index} index={index} pos={element} section={currentSection} />

                            })
                        }

                    </group>

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
        </group>
  )
}

export default Three