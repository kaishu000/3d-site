import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'

const Spaceship = ({ progress }: { progress: number }) => {
  const { scene } = useGLTF('spaceship.glb')
  const modelRef = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    if (!modelRef.current) return;
  
    // 1. ページ判定
    const pages = 4;
    const page = Math.min(Math.floor(progress * pages), pages - 1);
  
    // 2. 目標値を保持する変数を用意 (初期値は 0)
    const targetPosition = new THREE.Vector3(0, 0, 0);
    const targetRotation = new THREE.Euler(0, 0, 0);
  
    // 3. Switch文で「目標値」だけを決定する
    switch (page) {
      case 0:
        targetRotation.y = -Math.PI / 3;
        targetRotation.x=Math.PI/4;
        targetPosition.x = 2.5;
        targetPosition.y = -0.5;
        break;
      case 1:
        targetRotation.y = -Math.PI / 2;
        targetPosition.x = 2.5;
        targetPosition.y = -0.5;
        break;
      case 2:
        targetRotation.x = -Math.PI / 2;
        targetPosition.x = -8;
        targetPosition.y = -0.5;
        targetPosition.z = -25;
        break;
      case 3:
        targetRotation.x = Math.PI/2;
        targetRotation.y = -Math.PI / 2;
        targetPosition.x = 4;
        targetPosition.z = -10;
        break;
      default:
        targetRotation.y = -Math.PI / 2;
        targetPosition.x = 2.5;
        break;
    }
  
    // --- 4. 滑らかに移動させる処理 ---
  
    // 位置を近づける (0.1 は速度。小さいほどゆっくり、1.0 で即時反映)
    modelRef.current.position.lerp(targetPosition, 0.1);
  
    // 回転を近づける (Quaternionに変換して slerp を使う)
    const targetQuaternion = new THREE.Quaternion().setFromEuler(targetRotation);
    modelRef.current.quaternion.slerp(targetQuaternion, 0.1);
  });
  return (
    <group ref={modelRef}>
      <primitive object={scene} />
    </group>
  );
}

export default Spaceship;