import { Box, OrbitControls, Sphere, useKeyboardControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics, RigidBody, vec3 } from '@react-three/rapier'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import Threescene from './Threescene'
import * as THREE from 'three'
const ThreeTest = ({scrollOffset}) => {

    const [hover, setHover] = useState(false)
    const [isColli, setIsColli] = useState(false)
    const cubeRef = useRef(null)
    const boxRef = useRef(null)
    const kicker = useRef()
    const jump = () => {
        cubeRef.current.applyImpulse({x: -1, y: 10, z: 0})
    }

  
    

    const [displayScene, setdisplayScene] = useState(false)
    const refScene = useRef()

    const [scrollY, setscrollY] = useState(0)
    // window.addEventListener('scroll', () => {
    //     console.log(scrollY)
    //     // console.log(window.screenY)
    //     setscrollY(window.pageYOffset)
    //     // console.log('window< ' + window.scrollY)
    // })

    // useEffect(() => {
    //   setscrollY(scrollOffset.pageY)
    //   console.log(scrollOffset)
    // }, [scrollOffset])
//     useFrame((state) =>
// {
//     const time = state.clock.getElapsedTime()

//     const x = Math.sin(time + timeOffset)
//     cubeRef.current.setNextKinematicTranslation({ x: position[0] + x, y: position[1], z: position[2] })
// })

const testRef = useRef()
const planeRef =  useRef()
let zbis = 0
    const player = () => {

        const [ timeOffset ] = useState(() => Math.random() * Math.PI * 2)
        const [ speed ] = useState(() => (Math.random() + 0.2) * (Math.random() < 0.5 ? - 1 : 1))

        const page = window.scrollY
        const docH = window.innerHeight / 4 /* document.body.offsetHeight */
        const res = (page / docH) 

        const [euler, setEuler] = useState(0)

        // useEffect(() => {
        //     console.log('first')
        // //   setEuler(prev => prev += 0.01)
        // }, [scrollOffset.pageY])
        const [z, setZ] = useState(0)
        // let zbis = 0
        const [scrollOffssetState, setscrollOffssetSate] = useState(0)
        // addEventListener('')

        const [isGood, setisGood] = useState(false)
        
        useFrame((state) => {
            console.log('test')
            if(isGood) {
                console.log('test2')
                setisGood(false)
                
                const time = state.clock.getElapsedTime()

                const rotation = new THREE.Quaternion()
                // rotation.setFromEuler(new THREE.Euler(0, 0, z /* <= Math.PI ? z : Math.PI */ ))
                // rotation.setFromEuler(new THREE.Euler(0, 0, state.clock.getElapsedTime() * 0.5))
                rotation.setFromEuler(new THREE.Euler(0, 0, res *1.5))
    
                // console.log(zbis)
    
                if(Math.PI * res == Math.PI) {
                    console.log('pi')
                }
                // console.log(scrollOffset)
                // console.log(document.body.offsetHeight)
    
                
                // console.log((scrollOffset.pageY / document.innerHeight * 100) / 100)
                // console.log(res)
                // console.log(2 / 5)
                // console.log(planeRef)
                // planeRef.current.setRotation(rotation)

                console.log(page)
                console.log(res)

                /*  
                
                avant les 25% de scroll de la div il faut que planeref == Math.PI
                
                
                */
            }
        })

        document.body.addEventListener('wheel', e => {

            setisGood(true)
            // console.log(e)
            // console.log(window)
            // console.log(document.body)
            // console.log(scrollOffset.pageY)
            // console.log(res)
            setscrollOffssetSate(e.deltaY)
            // if(z <= Math.PI) {
                // console.log('sup')
                if(e.deltaY < 0) {
                    // console.log('uup')
                    zbis -= 0.03
                    setZ(prev => prev > 0 ? prev -= 0.003 : 0)
                } else if(e.deltaY > 0) {
                    // console.log('downn')
                    zbis += 0.03
                    setZ(prev => prev < Math.PI ? prev += 0.003 : Math.PI)
    
                }

                // const rotation = new THREE.Quaternion()
                // // rotation.setFromEuler(new THREE.Euler(0, 0, z /* <= Math.PI ? z : Math.PI */ ))
                // rotation.setFromEuler(new THREE.Euler(0, 0, Math.PI * res <= Math.PI ? Math.PI * res : Math.PI * res <= 0 ? 0 : Math.PI * res ))
    
                // // console.log(zbis)
    
                // if(Math.PI * res == Math.PI) {
                //     console.log('pi')
                // }
                // // console.log(scrollOffset)
                // // console.log(document.body.offsetHeight)
    
                
                // // console.log((scrollOffset.pageY / document.innerHeight * 100) / 100)
                // // console.log(res)
                // // console.log(2 / 5)
                // // console.log(planeRef)
                // planeRef.current.setRotation(rotation)
            // } else {
            //     // console.log('no')
            //     setZ(Math.PI)
            // }
            // console.log(z)
            // if(scrollOffssetState < e.pageY) {
            //     console.log('down')
            //     setZ(prev => prev += 0.0025)
            // } else if(scrollOffssetState > e.pageY) {
            //     console.log('up')
            //     setZ(prev => prev -= 0.0025)
            // }

            setscrollOffssetSate(e.pageY)
            // const time = state.clock.getElapsedTime()

            // const y = Math.sin(time + timeOffset) + 1.15

            // rotation.setFromEuler(new THREE.Euler(0, 0, time * speed))
            // if(z <= Math.PI) {
            //     console.log(z)
            //     setZ(prev => prev += 0.0025)
            // }
        })

        document.addEventListener('scroll', e => {
            // console.log(e)
            // if(z <= Math.PI) {
            //     // console.log('sup')
            //     if(scrollOffssetState < 0) {
            //         console.log('uup')
            //         setZ(prev => prev -= 0.03)
            //     } else if(scrollOffssetState > 0) {
            //         console.log('downn')
            //         setZ(prev => prev += 0.03)
    
            //     }
            // } else {
            //     // console.log('no')
            //     setZ(Math.PI)
            // }
        })

        
        
        // useFrame(() => {
        //     const keys = getKeys()
        //     console.log(keys)
        // })
        
        // useFrame(() => {
            
        //     const rotation = new THREE.Quaternion()
        //     rotation.setFromEuler(new THREE.Euler(0, 0, z /* <= Math.PI ? z : Math.PI */ ))

        //     console.log(z)

        //     if(Math.PI * res == Math.PI) {
        //         console.log('pi')
        //     }
        //     // console.log(scrollOffset)
        //     // console.log(document.body.offsetHeight)

            
        //     // console.log((scrollOffset.pageY / document.innerHeight * 100) / 100)
        //     // console.log(res)
        //     // console.log(2 / 5)
        //     planeRef.current.setRotation(rotation)

        //     // console.log(new THREE.Euler(0, 0, time * speed))

        //     // console.log(scrollOffset)
        //     // console.log(res)
        //     // console.log(Math.PI * res)

        // })

        // useFrame((state, delta) =>
        // {
        //     // ...
        //     // console.log("hello")
        //     // console.log(body)
        //     const bodyPosition = cubeRef.current.translation()
        //     // console.log(bodyPosition)

        //     const cameraPosition = new THREE.Vector3()
        //     cameraPosition.copy(bodyPosition)
        //     cameraPosition.z += 2.25
        //     cameraPosition.y += 0.65

        //     const cameraTarget = new THREE.Vector3()
        //     cameraTarget.copy(bodyPosition)
        //     cameraTarget.y += 0.25

        //     // state.camera.position.copy(cameraPosition)
        //     // state.camera.lookAt(cameraTarget)

        //     // console.log(state.camera)

        //     // console.log(state.camera.rotation.z)
        //     // state.camera.rotation.x -= 0.1 * delta
        //     // state.camera.rotation.z += 0.1 * delta
        //     // state.camera.rotation.y -= 0.005 


        //     // testRef.current.rotation.y = scrollOffset.pageY / 10
        //     // console.log(testRef.current.rotation.z)

        //     // console.log(scrollOffset.pageY)

        //     // planeRef.current.rotation.x += 0.01

        //     // console.log(planeRef.current.setRotation(5))
        //     // let el = 0
        //     // planeRef.current.rotation.x += 0.01

        //     let impulse = {x: 0, y: 0, z:0}
        //     const impulseStrenght = 1 * delta

        //     // useEffect(() => {
        //     //     console.log('ouou')
        //     // //   impulse += impulseStrenght
        //     // }, [scrollOffset.pageY])
            

        //     // planeRef.current.applyImpulse(impulse)




        //     const time = state.clock.getElapsedTime()

        //     const y = Math.sin(time + timeOffset) + 1.15

        //     const rotation = new THREE.Quaternion()
        //     // rotation.setFromEuler(new THREE.Euler(0, 0, time * speed))
        //     rotation.setFromEuler(new THREE.Euler(0, 0, Math.PI * res))

        //     if(Math.PI * res == Math.PI) {
        //         console.log('pi')
        //     }
        //     console.log(scrollOffset)
        //     // console.log(document.body.offsetHeight)

            
        //     // console.log((scrollOffset.pageY / document.innerHeight * 100) / 100)
        //     // console.log(res)
        //     // console.log(2 / 5)
        //     planeRef.current.setNextKinematicRotation(rotation)

        //     // console.log(new THREE.Euler(0, 0, time * speed))

        //     // console.log(scrollOffset)
        //     // console.log(res)
        //     // console.log(Math.PI * res)

        // })


        // useEffect(() => {
        //   boxRef.current.rotation.x += 0.01
        // }, [scrollOffset.pageY])
        

        // return console.log('hello')
    
    }
    // const [ subscribeKeys, getKeys ] = useKeyboardControls()
    
    // useFrame(() => console.log('hello'))
    player()

    const [typeState, settypeState] = useState(false)
    const [xp, setxp] = useState(0)

    const onclicktest = () => {
        // setxp(prev => prev += 1)
        console.log('click')
        console.log(cubeRef.current.type)
        settypeState(true)




        // cubeRef.current.setTranslation({ x: 0, y: xp, z: 0 })
    }


    useFrame(() => {
        if(typeState) {
            // console.log('true')

            if(xp < 5) {
                setxp(prev => prev += 0.01)
            }

            cubeRef.current.setTranslation({ x: 0, y: xp, z: 0 })
        }
    })


  return (
    // <Canvas shadows camera={{position: [10, 10, 10], fov: 30}}>
    //     <Suspense>
            // {
                displayScene === false ?
                <group ref={testRef}>
                    <Physics debug>
                        {/* {player} */}
                        {/* <group rotation={[0, scrollOffset.pageY , 0]}> */}
                        <ambientLight intensity={0.5} />
                        {/* <directionalLight position={[-10, 10, 0]} intensity={0.4} /> */}
                        <OrbitControls />

                        {/* <RigidBody position={[2.5, 5, 0]} colliders={'ball'}>
                            <Sphere>
                                <meshBasicMaterial />
                            </Sphere>
                        </RigidBody> */}
                        <RigidBody type={typeState ? 'fixed' : ''} ref={cubeRef} position={[0, 5, 0]} /* rotation={[45, 45, 0]} */  onCollisionEnter={() => setIsColli(true)}>
                            <Box
                            // onClick={jump}
                                position={[0, 1,0]} 
                                args={[1,1,1]}
                                ref={boxRef}
                                onClick={onclicktest}
                                // onClick={() => testFrame()}
                                // onPointerEnter={() => setHover(true)}
                                // onPointerLeave={() => setHover(false)}
                                // onClick={jump}
                                // onClick={() => cubeRef.current.applyImpulse({x: -4, y: 0.1, z: 0})}
                                // onAfterRender={cubeRef.current.applyImpulse({x: -4, y: 0.1, z: 0})}
                                // onClick={() => alert('kk')}
                            >
                                <meshBasicMaterial color={hover ? 'blue' : 'red'} />
                            </Box>
                        </RigidBody>

                        <RigidBody position={[3, 10, 0]}>
                            <Box
                                args={[1, 1, 1]}
                            >
                                <meshBasicMaterial />
                            </Box>
                        </RigidBody>

                        {/* <RigidBody type='kinematicPosition' position={[0, 0.75, 0]} ref={kicker}>
                            <group>
                                
                            </group>
                        </RigidBody> */}

                        <RigidBody ref={planeRef} /* rotation={[0, scrollY , 0]} */ type='kinematicPosition' friction={2} onCollisionEnter={() => console.log('collsion')}>
                            <Box  position={[0,0,0]} args={[10, 1,10]}>
                                <meshStandardMaterial color={'green'} />
                            </Box>
                        </RigidBody>
                        {/* </group> */}
                    </Physics>
                </group>

                :
                    <Threescene />
            //     <Box ref={refScene} args={[1,1,1]}>
            //         <meshBasicMaterial />
            //     </Box>
            // }


            
    //     </Suspense>
    // </Canvas>
  )
}

export default ThreeTest