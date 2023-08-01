import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import React, { useEffect, useRef, useState } from 'react'
import { BoxGeometry } from 'three'
import * as THREE from 'three'

const BlockSingle = ({pos, index, section}) => {

    const boxRef = useRef()

    let isMovginX = false
    let isMovginY = false
    let isMovginZ = false
    
    let isRotateX = false
    let isRotateY = false
    let isRotateZ = false

    let activate = false
    let activateBody = false


    // useEffect(() => {
    //   console.log(section)
    // }, [section])

    const [sectionID, setsectionID] = useState(0)

    // useEffect(() => {
    //   setsectionID(section)
    // }, [])

    const testSection = () => {
        if(section !== sectionID) {
            setsectionID(section)
        }
    }

    // window.addEventListener('wheel', () => {
    //     testSection()
    //     console.log(section)
    // })
    
    // useEffect(() => {
    //   console.log(section)
    // }, [section])
    
    


    const fun = () => {
        boxRef.current.wakeUp()
        boxRef.current.setBodyType(2)
    }


    useFrame((state, delta) => {
    //   console.log(section)


        if(boxRef.current.isSleeping() && !activate) {
            if(!activate) {
               fun()
               activate = true
           }

        } else if(!activate) {
            return
        }
            
        const prevPos = boxRef.current.translation()
        const prevRot = boxRef.current.rotation()

        let y = prevPos.y
        let x = prevPos.x
        let z = prevPos.z
        
        let yR = prevRot.y
        let xR = prevRot.x
        let zR = prevRot.z

        /* 
        
            Rotation
        
        */

        const time = state.clock.getElapsedTime() * delta * 1.5

        if(!isRotateX) {
            if(xR > 0 - 0.03 && xR < 0 + 0.03) {
                xR = 0
                isRotateX = true
            } else {

                if(prevRot.x < 0) {
                    xR += time
                } else if(prevRot.x > 0) {
                    xR -= time
                } 
            }
        }
        if(!isRotateY) {
            if(yR > 0 - 0.03 && yR < 0 + 0.03) {
                yR = 0
                isRotateY = true
            } else {

                if(prevRot.y < 0) {
                    yR += time
                } else if(prevRot.y > 0) {
                    yR -= time
                } 
            }
        }
        if(!isRotateZ) {
            if(zR > 0 - 0.03 && zR < 0 + 0.03) {
                zR = 0
                isRotateZ = true
            } else {

                if(prevRot.z < 0) {
                    zR += time
                } else if(prevRot.z > 0) {
                    zR -= time
                } 
            }
        }


        /*

            Translation

        */


        if(!isMovginZ) {
            if(z > pos[2] - 0.03 && z < pos[2] + 0.03) {
                console.log('z is good')

                z = 0
                isMovginZ = true
            } else {

                if(prevPos.z < pos[2]) {
                    z += time
                } else if(prevPos.z > pos[2]) {
                    z -= time
                } 
            }
        }

        if(!isMovginX) {
            if(x > pos[0] - 0.03 && x < pos[0] + 0.03) {

                x = pos[0]

                isMovginX = true

            } else {

                if(prevPos.x < pos[0]) {
                    x += time
                } else if(prevPos.x > pos[0]) {
                    x -= time
                } 
            }
        }

        
        if(!isMovginY) {

            if(y > (pos[1] + 1) - 0.03 && y < (pos[1] + 1) + 0.03) {

                y = pos[1] + 1

                isMovginY = true
            
            } else {

                if(y < pos[1] + 1) {
                    y += time
                } else if(y > pos[1] + 1) {
                    y -= time
                }

            }
        }

        if(!isRotateX || !isRotateY|| !isRotateZ) {
            
            const rotation = new THREE.Quaternion()

            rotation.setFromEuler(new THREE.Euler(
                isRotateX ? 0 : xR,
                isRotateY ? 0 : yR,
                isRotateZ ? 0 : zR
            ))
            
            boxRef.current.setNextKinematicRotation(rotation)

        }
        
        if(!isMovginX || !isMovginY|| !isMovginZ) {
            boxRef.current.setNextKinematicTranslation({
                x: isMovginX ? pos[0] : x,
                y: isMovginY ? pos[1] + 1 : y,
                z: isMovginZ ? pos[2] : z
            })
        } else if(!activateBody) {

            boxRef.current.setNextKinematicTranslation({
                x: pos[0],
                y: pos[1] + 1,
                z: pos[2]
            })

            setTimeout(() => {
                boxRef.current.setBodyType(0)
                console.log('sec')
            }, 10000);
            // setTimeout(() => {
            //     boxRef.current.addForce({x: 2, y:0, z: -5})
            //     console.log('sec')
            // }, 12000);
            activateBody = true
        }
    })

    return (

        // <group>
            <RigidBody 
                ref={boxRef}
                position={[
                    index - 3,
                    Math.floor(Math.random() * (8 - 5) + 5),
                    Math.floor(Math.random() * (4 + 4) - 4),
                ]} 
                restitution={1}
            >

                <mesh>
                    <boxGeometry args={[1,1,1]} />
                    <meshBasicMaterial wireframe /* color={color} */ />
                </mesh>

            </RigidBody>
        // </group>
    )


    // return elements
}

export default BlockSingle