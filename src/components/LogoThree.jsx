import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import React, { useEffect, useRef, useState } from 'react'

const LogoThree = () => {
    
    const finalCoord = [
        [0, 2, 0],
        [0, 1, 0],
        [0, 0, 0],
        [1, 1, 0],
        [2, 2, 0],
        [2, 1, 0],
        [2, 0, 0],
        [3, 0, 0],
      ]

      const randomCoord = [
        [Math.random() * (30 - 10) + 10, 2, 0],
        [0, 1, 0],
        [0, 0, 0],
        [1, 1, 0],
        [2, 2, 0],
        [2, 1, 0],
        [2, 0, 0],
        [3, 0, 0],
      ]

    const groupRef = useRef(null)
    // useEffect(() => {
    //     console.log(groupRef)
    // }, [groupRef])

    const blockElements = finalCoord.map((coord, index) => {


        

        const [tempX, setTempX] = useState(Math.floor(Math.random() * (10 - 5) + 5))
        const [tempY, setTempY] = useState(Math.floor(Math.random() * (10 - 5) + 5))
        const [tempZ, setTempZ] = useState(Math.floor(Math.random() * (10 - 5) + 5))

        // useEffect(() => {
        //   setTempX(Math.floor(Math.random() * (10 - 5) + 5))
        //   setTempZ(Math.floor(Math.random() * (10 - 5) + 5))
        //   setTempY(Math.floor(Math.random() * (10 - 5) + 5))
        // }, [])

        useEffect(() => {
          console.log(tempX)
        }, [tempX])
        

        const [isMovingX, setIsMovingX] = useState(null)
        const [isMovingY, setIsMovingY] = useState(null)
        const [isMovingZ, setIsMovingZ] = useState(null)

        useEffect(() => {
          if(tempX > coord[0]) {
            setIsMovingX(true)
          } else {
            setIsMovingX(false)
            console.log('11111')
          }

          if(tempY > coord[1]) {
            setIsMovingY(true)
          } else {
            setIsMovingY(false)
          }

          if(tempZ > coord[2]) {
            setIsMovingZ(true)
          } else {
            setIsMovingZ(false)
          }
        }, [tempX,tempY, tempZ])
        
        
        useFrame((state, delta) => {
            // console.log(delta)
          if(isMovingX) {
            // console.log(groupRef.current)
            setTempX(tempX => tempX - 0.01)
            groupRef.current.children[index].position.set(tempX, tempY, tempZ)
          }
          if(isMovingY) {
            setTempY(tempY => tempY - 0.01)
            groupRef.current.children[index].position.set(tempX, tempY, tempZ)
          }
          if(isMovingZ) {
            setTempZ(tempZ => tempZ - 0.01)
            groupRef.current.children[index].position.set(tempX, tempY, tempZ)
          }

        })
        
        useEffect(() => {
            if(isMovingX === false && isMovingX === false && isMovingZ === false) {
                console.log('finshios')
                setTempX(coord[0])
                setTempY(coord[1])
                setTempZ(coord[2])

                console.log(tempX)
            }
            // if(isMovingX === false){
            //     if(isMovingY === false) {
            //         if(isMovingZ === false) {
            //         }
            //     }
            // }
        }, [isMovingX, isMovingY, isMovingZ])
        
        
        return(
            // <RigidBody>
                <Box key={index} args={[1,1,1]} castShadow receiveShadow>
                    <meshBasicMaterial color={'fff'} wireframe />
                </Box>
            // </RigidBody>
        )
      })

  return (
    <group ref={groupRef} castShadow receiveShadow>
        {blockElements}
    </group>
  )
}

export default LogoThree