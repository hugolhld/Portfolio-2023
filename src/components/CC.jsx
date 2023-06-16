import { 
    RapierRigidBody, 
    quat, 
    vec3, 
    euler, 
    RigidBody,
    Physics
  } from "@react-three/rapier";
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from "react";
  
  const CC = () => {
    const rigidBody = useRef(null)
  
    useEffect(() => {
      if (rigidBody.current) {
        const position = vec3(rigidBody.current.translation())
        const quaternion = quat(rigidBody.current.rotation())
        const eulerRot = euler().setFromQuaternion(quat(rigidBody.current.rotation()))
  
        // While Rapier's return types need conversion, setting values can be done directly with Three.js types
        rigidBody.current.setTranslation(position, true)
        rigidBody.current.setRotation(quaternion, true)
        rigidBody.current.setAngVel({x: 0, y: 2, z: 0}, true)
      }
    }, [rigidBody.current])
  
    return (
        <Canvas>
            <Suspense>
                <Physics>
                    <RigidBody ref={rigidBody}>
                        <mesh>

                        <boxBufferGeometry />
                        <meshStandardMaterial />
                        </mesh>
                    </RigidBody>
                </Physics>
            </Suspense>
        </Canvas>
    );
  }
  
export default CC