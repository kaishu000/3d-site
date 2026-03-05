'use client'

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";
import Spaceship from "./Spaceship";
import { RectAreaLightUniformsLib } from "three/examples/jsm/Addons.js";

RectAreaLightUniformsLib.init()
const InnerLights = () => {
    const distance = 10 // 中心からの距離
    const intensity = 3 // 明るさ
    const size = [10, 10] // ライトの幅と高さ

    // 6面の配置データ (位置, 回転)
    const lightConfigs = [
        { pos: [0, 0, distance] as const, rot: [0, 0, 0] as const, },          // 前
        { pos: [0, 0, -distance] as const, rot: [0, Math.PI, 0] as const, },   // 後
        { pos: [distance, 0, 0] as const, rot: [0, Math.PI / 2, 0] as const, }, // 右
        { pos: [-distance, 0, 0] as const, rot: [0, -Math.PI / 2, 0] as const, }, // 左
        { pos: [0, distance, 0] as const, rot: [-Math.PI / 2, 0, 0] as const, }, // 上
        { pos: [0, -distance, 0] as const, rot: [Math.PI / 2, 0, 0] as const, }, // 下
    ]

    return (
        <>
            {lightConfigs.map((config, index) => (
                <rectAreaLight
                    key={index}
                    width={size[0]}
                    height={size[1]}
                    intensity={intensity}
                    color="white"
                    position={config.pos}
                    rotation={config.rot}
                />
            ))}
        </>
    )
}
const Scene = ({ progress }: { progress: number }) => {
    return (
        <div
            className="w-full h-screen fixed inset-0 bg-white z-0"
        >
            <Canvas
                camera={{ position: [0, 0, 50], fov: 10 }}
                gl={{ alpha: false }}
            >
                <color attach="background" args={['#050505']} />
                <ambientLight intensity={30} />
                <directionalLight intensity={10} position={[0,0,5]}/>
                <InnerLights />
                <Suspense fallback={null}>
                    <Spaceship progress={progress} />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Scene;