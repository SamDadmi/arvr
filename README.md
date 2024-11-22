[ARVR Code Documentation.pdf](https://github.com/user-attachments/files/17865912/ARVR.Code.Documentation.pdf)
![mainpage](https://github.com/user-attachments/assets/8433c774-f177-4c1f-9c53-867d57afb811)

https://github.com/user-attachments/assets/d1fa7e3f-5108-47e4-95cb-b52fc02b5f1e

# Interactive 3D Heart Visualization

This repository hosts an advanced interactive 3D visualization project designed using **React** and **Three.js** via the **React Three Fiber** library. It features an anatomically accurate, interactive heart model that toggles between a static and beating heart, enhanced by realistic textures and materials. This project supports educational purposes and medical training by offering an immersive visualization experience with audio-visual effects.

---

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Detailed Code Explanation](#detailed-code-explanation)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [Setup and Installation](#setup-and-installation)

---

## Features

### **1. Realistic Heart Model**
- High-fidelity 3D heart model using textures such as **albedo**, **specular**, **normal**, **glossiness**, **ambient occlusion (AO)**, and **emission maps**.
- Toggle between a static model and a beating heart animation.

### **2. Interactive Components**
- Double-click interaction toggles the heart between static and beating modes.
- Realistic heartbeat sound plays in sync with the animation.

### **3. 3D Models of Medical Instruments**
- Includes 3D models of a **scalpel**, **monitor**, and **forceps** for a simulated medical setting.

### **4. Dynamic Lighting and Emissive Effects**
- High-quality lighting with **ambient**, **directional**, **point**, and **spotlights**, including shadow-casting.
- **Emissive effects** simulate internal glowing areas of the heart.

---

## Technology Stack

- **React**: Frontend framework for managing UI and state.
- **React Three Fiber**: React renderer for Three.js to integrate 3D models.
- **Three.js**: JavaScript 3D library for 3D effects, animations, and lighting.
- **GLTFLoader**: Loads optimized GLTF 3D models.
- **OrbitControls**: Enables camera manipulation around the 3D scene.

---

## Detailed Code Explanation

### **Main Components**
1. **HeartModel**: Loads the static heart model with textures. Double-click toggles to the beating heart.
2. **BeatingHeartModel**: Plays the beating heart animation with a pulsing scale effect and sound.
3. **MonitorModel, ScalpelModel, ForcepsModel**: Add interactive elements to enrich the educational context.

### **Lighting and Texturing**
- **AmbientLight**: Subtle general lighting.
- **DirectionalLight**: Casts shadows and highlights objects.
- **PointLight**: Adds depth with red tones.
- **SpotLight**: Adds intensity and realism to the scene.

### **Interaction Handling**
- **User Interactions**: 
  - Double-click the heart to toggle between static and animated models.
  - Click the monitor to trigger or pause animations and sounds.
- **Sound Effects**: Heartbeat sound is synchronized with the animation for added realism.

---

## Future Enhancements
- **Expanded Model Library**: Add more medical models to broaden the simulation.
- **Advanced Interactions**: Introduce haptic feedback for immersive experiences.
- **Medical Annotation**: Label parts of the heart and instruments with tooltips or pop-ups.

---

## Contributing
We welcome contributions to improve this project.  
- Open an issue first to discuss potential changes or features.  
- For major changes, discuss them in advance to ensure alignment.  

---

## Setup and Installation

1. **Clone the repository:**
   - First, clone the repository to your local machine using Git. Open your terminal or command prompt and run:
     ```bash
     git clone https://github.com/username/interactive-3d-heart.git
     ```
   - This will create a local copy of the project files on your computer.

2. **Navigate to the project directory:**
   - Once the repository is cloned, navigate into the project directory using the `cd` (change directory) command:
     ```bash
     cd interactive-3d-heart
     ```

3. **Install the project dependencies:**
   - Now, install all the required dependencies for the project. Run the following command in the terminal:
     ```bash
     npm install
     ```
   - This will download and install the necessary packages for the project.

4. **Start the development server:**
   - After the installation completes, start the development server by running:
     ```bash
     npm start
     ```
## Contributors

- **Sameeksha Dadmi **
