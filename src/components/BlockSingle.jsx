import { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

const BlockSingle = ({pos, index, section, mainRef}) => {

    const boxRef = useRef()

    let isMovginX = false
    let isMovginY = false
    let isMovginZ = false
    
    let isRotateX = false
    let isRotateY = false
    let isRotateZ = false

    let activate = false
    let activateBody = false

    const [sectionID, setsectionID] = useState(0)

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

        const time = delta * 4
        // const time = state.clock.getElapsedTime() * delta * 1.5
        // const time = state.clock.getElapsedTime() 

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
                // console.log('z is good')

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
                // x: isMovginX && prevPos.x + 0.01,
                // y: isMovginY && prevPos.y + 0.01,
                // z: isMovginZ && prevPos.z + 0.01,
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

            activateBody = true
        }
    })

    return (

        // <group>
            <RigidBody 
                ref={boxRef}
                position={[
                    index - 3,
                    Math.floor(Math.random() * (7 - 4) + 4),
                    Math.floor(Math.random() * (2.5 + 2.5) - 2.5),
                ]} 
                restitution={1}
            >

                <mesh /* ref={boxRef} position={[
                    index - 3,
                    Math.floor(Math.random() * (8 - 5) + 5),
                    Math.floor(Math.random() * (4 + 4) - 4),
                ]} */  >
                    <boxGeometry args={[1,1,1]} />
                    <meshPhongMaterial transparent={true} opacity={1} wireframe /* color={color} */ />
                </mesh>

            </RigidBody>
        // </group>
    )


    // return elements
}

export default BlockSingle