import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import React, { useEffect, useRef, useState } from 'react'

const BlockElement = () => {

    const finalCoord = [
        [0, 2, 0],
        [0, 1, 0],
        [0, 0, 0],
        [1, 1, -1],
        [2, 2, -2],
        [2, 1, -2],
        [2, 0, -2],
        [3, 0, -3],
    ]

    const [first, setfirst] = useState(0)

    // useEffect(() => {
    //   setfirst(elements)
    // }, [elements])

    let sleepIndex = 0

    useEffect(() => {
        console.log(first)
    }, [sleepIndex])


    const elements = finalCoord.map((pos, index) => {
        
        const boxRef = useRef()
        const secondRef = useRef()
        const [isFixed, setIsFixed] = useState(false)

        let isMovginX = false
        let isMovginY = false
        let isMovginZ = false

        const jump = (ref) => {
            boxRef.current.setBodyType(1)
    
            
        }

        window.addEventListener('click', () => {
            // jump()
            setIsFixed(true)
        })

        
        
        
        let isF = false

        useEffect(() => {
            if(isF == true) {
                console.log('ppp')
                setfirst(prev => prev += 1)
            }
        }, [isF])

        useFrame((state) => {
            // console.log(index)
            // console.log(boxRef.current.nextTranslation())
            // console.log(boxRef.current.translation())$

            if(!isF && boxRef.current.isSleeping()) {
                // console.log('sleep')
                console.log('sleep')
                sleepIndex += 1
                isF = true
                boxRef.current.setBodyType(1)

            }
            
            if(boxRef.current.isSleeping()) {
                // console.log(state)
                
                const prevPos = boxRef.current.translation()
                // let isMove = boxRef.current.ismo::

                let y = prevPos.y
                let x = prevPos.x
                let z = prevPos.z


                // if(Math.sign(prevPos.x) == -1) {

                // }
                if(!isMovginZ) {
                    if(z > pos[2] - 0.25 && z < pos[2] + 0.25) {
                        console.log('z is good')
    
                        z = 0
                        isMovginZ = true
                    } else {
                        // console.log(({z: 0}))
                        // console.log({pos: z})
                        // console.log((0 - prevPos.z))
                        if(prevPos.z < 0) {
                            // console.log(0)
                            // console.log(prevPos.z)
                            z += 0.01
                        } else if(prevPos.z > 0) {
                            z -= 0.01
                        } 
                    }
                }


                
                if(!isMovginX) {
                    if(x > pos[0] - 0.25 && x < pos[0] + 0.25) {
                        
                        console.log('x is good')
                        x = pos[0]
                        isMovginX = true
                        
                    } else {
                        // console.log(({x: pos[0]}))
                        // console.log({pos: x})
                        console.log(index)
    
                        if(prevPos.x < pos[0]) {
                            // console.log(pos[0])
                            // console.log(prevPos.x)
                            x += 0.01
                        } else if(prevPos.x > pos[0]) {
                            x -= 0.01
                        } 
                    }
                }

                
                if(!isMovginY) {

                    if(y > (pos[1] + 1) - 0.25 && y < (pos[1] + 1) + 0.25) {
                        // console.log('y is good')
    
                        y = pos[1] + 1
    
                        isMovginZ = true
                    
                    } else {

                        console.log(({y: pos[1] + 1}))
                        console.log({pos: y})

                        if(y < pos[1] + 1) {
                            y += 0.01
                        } else if(y > pos[1] + 1) {
                            y -= 0.01
                        }
                    }
                }
                // console.log(prevPos)
                // console.log(y)
                if(!isMovginX || !isMovginY|| !isMovginZ) {
                    boxRef.current.setTranslation({
                        x: isMovginX ? pos[0] : x,
                        y: isMovginY ? pos[1] : y,
                        z: isMovginZ ? 0 : z
                    })
                }
            }

        })

        return (

            <group /* position={[0, 0, 0]} */ key={index}>
                <RigidBody
                    // key={index} 
                    ref={boxRef}
                    // type='kinematicPostion'
                    // type='fixed'
                    position={[index - 3, Math.floor(Math.random() * (10 - 5) + 5), 0]} 
                    // position={[0, index, 0]}
                    // position={[pos[0], pos[1], 0]}
                >

                    <Box ref={secondRef} /* onClick={jump} */ args={[1,1,1]}>

                        <meshBasicMaterial />

                    </Box>

                </RigidBody>
            </group>


        )
    })



    return elements
}

export default BlockElement