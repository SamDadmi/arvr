import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const HeartModel = ({ onDoubleClick }) => {
    const model = useLoader(GLTFLoader, '/models/realistic_human_heart.glb');
    const [mixer] = useState(() => new THREE.AnimationMixer());

    const albedoMap = new THREE.TextureLoader().load('/textures/heart_albedo.jpg');
    const specularMap = new THREE.TextureLoader().load('/textures/heart_specular.jpg');
    const normalMap = new THREE.TextureLoader().load('/textures/heart_normal.jpg');
    const glossinessMap = new THREE.TextureLoader().load('/textures/heart_glossiness.jpg');
    const aoMap = new THREE.TextureLoader().load('/textures/heart_ao.jpg');
    const emissionMap = new THREE.TextureLoader().load('/textures/heart_emission.jpg');

    const material = new THREE.MeshStandardMaterial({
        map: albedoMap,
        specularMap,
        normalMap,
        roughnessMap: glossinessMap,
        aoMap,
        emissiveMap: emissionMap,
        emissive: 0xff0000,
        emissiveIntensity: 1.5,
        metalness: 0.4,
        roughness: 0.2,
    });

    useEffect(() => {
        if (model.animations.length) {
            mixer.clipAction(model.animations[0], model.scene).play();
        }
    }, [model, mixer]);

    useFrame((_, delta) => mixer.update(delta));

    return (
        <primitive
            object={model.scene}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0, 0]}
            material={material}
            onDoubleClick={onDoubleClick}
        />
    );
};

const BeatingHeartModel = () => {
    const beatingModel = useLoader(GLTFLoader, '/models/beating-heart.glb');
    const [mixer] = useState(() => new THREE.AnimationMixer());
    const albedoMap = new THREE.TextureLoader().load('/textures/heart_albedo.jpg');
    const normalMap = new THREE.TextureLoader().load('/textures/heart_normal.jpg');
    const specularMap = new THREE.TextureLoader().load('/textures/heart_specular.jpg');
    const aoMap = new THREE.TextureLoader().load('/textures/heart_ao.jpg');

    const material = new THREE.MeshStandardMaterial({
        map: albedoMap,
        normalMap,
        roughnessMap: aoMap,
        emissive: 0xff0000,
        emissiveIntensity: 0.8,
        metalness: 0.0,
        roughness: 0.05,
        transparent: true,
        opacity: 0.9,
        alphaMap: specularMap,
        side: THREE.DoubleSide,
    });

    useEffect(() => {
        if (beatingModel.animations.length) {
            mixer.clipAction(beatingModel.animations[0], beatingModel.scene).play();
        }
    }, [beatingModel, mixer]);

    useFrame((_, delta) => {
        mixer.update(delta);
        const scale = 1 + 0.05 * Math.sin(_.clock.getElapsedTime() * 6);
        beatingModel.scene.scale.set(scale, scale, scale);
    });

    return (
        <group>
            <primitive
                object={beatingModel.scene}
                scale={[1, 1, 1]}
                position={[0, 0, 0]}
                material={material}
            />
            <pointLight position={[2, 2, 2]} intensity={1.5} distance={10} decay={2} />
            <pointLight position={[-2, -2, -2]} intensity={1.5} distance={10} decay={2} />
            <spotLight
                position={[0, 5, 5]}
                angle={Math.PI / 8}
                intensity={2.0}
                penumbra={1}
                distance={15}
                castShadow
            />
        </group>
    );
};

const MonitorModel = ({ onClick }) => {
    const model = useLoader(GLTFLoader, '/models/monitor.glb');
    return (
        <primitive
            object={model.scene}
            scale={[1, 1, 1]}
            position={[0, 0, 0]}
            onClick={onClick}
        />
    );
};

const Scene = ({ selectedEquipment }) => {
    const [isBeatingHeartVisible, setIsBeatingHeartVisible] = useState(false);
    const [isMonitorVisible, setIsMonitorVisible] = useState(false);

    // Audio listener setup
    const audioListener = new THREE.AudioListener();
    const [audio] = useState(new THREE.Audio(audioListener));
    const heartbeatSound = useRef(new Audio('/audio/heartbeat.mp3'));

    useEffect(() => {
        if (selectedEquipment === 'realistic human heart') {
            setIsBeatingHeartVisible(false);
            setIsMonitorVisible(false);
        } else if (selectedEquipment === 'monitor') {
            setIsMonitorVisible(true);
            setIsBeatingHeartVisible(false);
        } else {
            setIsBeatingHeartVisible(false);
            setIsMonitorVisible(false);
        }
    }, [selectedEquipment]);

    const handleDoubleClick = () => {
        if (selectedEquipment === 'realistic human heart') {
            setIsBeatingHeartVisible((prev) => !prev);
            heartbeatSound.current.play(); // Play heartbeat sound
        }
    };

    const handleMonitorClick = () => {
        setIsBeatingHeartVisible(false);
        heartbeatSound.current.pause(); // Stop heartbeat sound
        heartbeatSound.current.currentTime = 0; // Reset audio
    };

    return (
        <Canvas style={{ height: '100vh' }} shadows>
            <ambientLight intensity={0.3} color="#ffebe6" />
            <directionalLight
                position={[10, 10, 5]}
                intensity={0.6}
                color="#ffdda1"
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.5}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[2, 2, 2]} intensity={1} color="#ff4f4f" distance={10} decay={2} />
            <spotLight
                position={[0, 5, 5]}
                angle={Math.PI / 8}
                intensity={1.5}
                color="#ff6666"
                penumbra={0.5}
                distance={15}
                castShadow
            />
            {selectedEquipment === 'realistic human heart' && !isBeatingHeartVisible && (
                <HeartModel onDoubleClick={handleDoubleClick} />
            )}
            {isBeatingHeartVisible && <BeatingHeartModel />}
            {isMonitorVisible && <MonitorModel onClick={handleMonitorClick} />}
            <OrbitControls />
        </Canvas>
    );
};

export default Scene;
