'use client'

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import Spaceship from "../../components/Spaceship";
import Link from "next/link";

const Preview = () => {
    return (
        <div
            className="w-full h-screen bg-black"
        >
            <div className="absolute top-12 left-12 text-2xl border border-white px-4 py-2 text-white">Preview</div>
            <Link href="/" className="absolute bottom-12 right-12 text-black bg-white text-2xl px-4 py-2 z-10">Back Home</Link>
            <div className="absolute top-12 right-12 w-12 h-12 border-t-2 border-r-2 border-white"></div>
            <div className="absolute bottom-12 left-12 w-12 h-12 border-b-2 border-l-2 border-white"></div>
            <Canvas
                camera={{ position: [0, 10, 50], fov: 10 }}
            >
                <OrbitControls />
                <ambientLight intensity={30} />
                <directionalLight intensity={20} />
                <Suspense fallback={null}>
                    <Spaceship progress={0} />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Preview;