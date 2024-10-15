import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls for user interaction
import * as THREE from 'three'; // Import THREE for materials


const HeartModel = () => {
    const model = useLoader(GLTFLoader, '/models/realistic_human_heart.glb');

    const albedoMap = new THREE.TextureLoader().load('/textures/heart_albedo.jpg');
    const specularMap = new THREE.TextureLoader().load('/textures/heart_specular.jpg');
    const normalMap = new THREE.TextureLoader().load('/textures/heart_normal.jpg');
    const glossinessMap = new THREE.TextureLoader().load('/textures/heart_glossiness.jpg');
    const aoMap = new THREE.TextureLoader().load('/textures/heart_ao.jpg');
    const emissionMap = new THREE.TextureLoader().load('/textures/heart_emission.jpg');

    const material = new THREE.MeshStandardMaterial({
        map: albedoMap,
        specularMap: specularMap,
        normalMap: normalMap,
        roughnessMap: glossinessMap,
        aoMap: aoMap,
        emissiveMap: emissionMap,
        emissive: 0xff0000, // Keep it red
        emissiveIntensity: 1.5,
        metalness: 0.4, // Reduced for more color
        roughness: 0.2 // Adjusted for higher glossiness
    });

    return (
        <primitive
            object={model.scene}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0, 0]}
            material={material} // Apply material to realistic heart
        />
    );
};

const BeatingHeartModel = () => {
    const beatingModel = useLoader(GLTFLoader, '/models/beating-heart.glb');

    const albedoMap = new THREE.TextureLoader().load('/textures/heart_albedo.jpg');
    const normalMap = new THREE.TextureLoader().load('/textures/heart_normal.jpg');
    const specularMap = new THREE.TextureLoader().load('/textures/heart_specular.jpg');
    const aoMap = new THREE.TextureLoader().load('/textures/heart_ao.jpg');

    const material = new THREE.MeshStandardMaterial({
        map: albedoMap,
        normalMap: normalMap,
        roughnessMap: aoMap, // Use AO for some roughness control
        emissive: 0xff0000, // Emissive color for internal glow
        emissiveIntensity: 0.8, // Adjust intensity
        metalness: 0.0, // Low metalness for biological material
        roughness: 0.05, // Very low for a glossy, wet look
        transparent: true, // Allow for transparency
        opacity: 0.9, // Slightly transparent to simulate wetness
        alphaMap: specularMap, // For shiny areas
        side: THREE.DoubleSide, // Render both sides if needed
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

const ScalpelModel = () => {
    const scalpel = useLoader(GLTFLoader, '/models/scalpel.glb');
    
    return (
        <primitive
            object={scalpel.scene}
            scale={[0.5, 0.5, 0.5]} // Adjust scalpel scale
            position={[1, 0, 0]} // Adjust position for better view in scene
        />
    );
};

// New Model for Monitor
const MonitorModel = () => {
    const monitor = useLoader(GLTFLoader, '/models/monitor.glb');

    return (
        <primitive
            object={monitor.scene}
            scale={[0.5, 0.5, 0.5]} // Adjust monitor scale
            position={[-1, 0, 0]} // Adjust position for better view in scene
        />
    );
};

// New Model for Forceps
const ForcepsModel = () => {
    const forceps = useLoader(GLTFLoader, '/models/forceps.glb');

    return (
        <primitive
            object={forceps.scene}
            scale={[0.5, 0.5, 0.5]} // Adjust forceps scale
            position={[-1, 0, 0]} // Adjust position for better view in scene
        />
    );
};

const PatientModel = () => {
    const patient = useLoader(GLTFLoader, '/models/patient.glb');

    return (
        <primitive
            object={patient.scene}
            scale={[0.5, 0.5, 0.5]} // Adjust patient scale
            position={[-1, 0.5, 0]} // Adjust position for better view in scene
        />
    );
};

const HospitalBedModel = () => {
    const hospitalBed = useLoader(GLTFLoader, '/models/hospital_bed.glb');

    return (
        <primitive
            object={hospitalBed.scene}
            scale={[0.5, 0.5, 0.5]} // Adjust hospital bed scale
            position={[1, 0, 0]} // Adjust position for better view in scene
        />
    );
};

const SutureNeedleModel = () => {
    const sutureNeedle = useLoader(GLTFLoader, '/models/needle.glb');

    return (
        <primitive
            object={sutureNeedle.scene}
            scale={[0.5, 0.5, 0.5]} // Adjust suture needle scale
            position={[1, 0, 0]} // Adjust position for better view in scene
        />
    );
};


const Scene = ({ selectedEquipment }) => {
    const [isBeatingHeartVisible, setIsBeatingHeartVisible] = useState(false);

    useEffect(() => {
        // Update visibility based on selected equipment
        if (selectedEquipment === 'realistic human heart') {
            setIsBeatingHeartVisible(false); // Keep realistic heart visible by default
        } else if (selectedEquipment === 'beating heart') {
            setIsBeatingHeartVisible(true); // Show beating heart when selected
        } else {
            setIsBeatingHeartVisible(false); // Hide when other equipment is selected
        }
    }, [selectedEquipment]);

    return (
        <Canvas style={{ height: '100vh' }} shadows>
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={0.5}
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

            {/* Conditionally render the equipment */}
            {selectedEquipment === 'realistic human heart' && !isBeatingHeartVisible && <HeartModel />}
            {isBeatingHeartVisible && <BeatingHeartModel />}
            {selectedEquipment === 'scalpel' && <ScalpelModel />}
            {selectedEquipment === 'monitor' && <MonitorModel />}
            {selectedEquipment === 'forceps' && <ForcepsModel />}
            {selectedEquipment === 'patient' && <PatientModel />} {/* Render patient if selected */}
            {selectedEquipment === 'hospital bed' && <HospitalBedModel />} {/* Render hospital bed if selected */}
            {selectedEquipment === 'suture needle' && <SutureNeedleModel />} {/* Render suture needle if selected */}

            <OrbitControls />
        </Canvas>
        
    );
};

export default Scene;
