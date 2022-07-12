import React, {useState, useRef, useEffect } from "react";
import "./App.css"
import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import {Canvas, useFrame, useThree } from '@react-three/fiber'


const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };
 

function Box (props: JSX.IntrinsicElements["mesh"]) {
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    useFrame((state, delta) => (ref.current.rotation.x += 0.01));
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={() => click(!clicked)}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : '#3f7b9d'} />
        </mesh>
    )
}

export default function App(){
    return (
        <div className="App">
            <div className="ThreeContainer">
                <Canvas>
                    <CameraController />
                    <primitive object={new THREE.AxesHelper(10)} />
                    <ambientLight />
                    <pointLight position={[0, 10, 0]} />
                    <Box position={[-1.2, 0, 0]} castShadow />
                    <Box position={[1.2, 0, 0]}  castShadow/>
                </Canvas>
            </div>
            <div className="">

            </div>
        </div>
    )
}


