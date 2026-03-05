'use client'

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';

const Box = ({progress}:{progress:number}) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    useFrame(()=>{
        const targetRotation=progress*Math.PI*2
        meshRef.current.rotation.y=THREE.MathUtils.lerp(
            meshRef.current.rotation.y,
            targetRotation,
            0.1
        )
        meshRef.current.position.z=THREE.MathUtils.lerp(
            meshRef.current.position.z,
            progress*5,
            0.1
        )
    })
    return (
        <mesh scale={1} ref={meshRef}>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial color='red'/>
        </mesh>
    );
}

export default Box;