![mainpage](https://github.com/user-attachments/assets/8433c774-f177-4c1f-9c53-867d57afb811)

**Interactive 3D Heart Visualization**

This repository hosts an advanced interactive 3D visualization project designed using React and Three.js via the React Three Fiber library. The primary feature of this project is an anatomically accurate, interactive heart model that allows users to toggle between a static and a beating heart, enhanced by realistic textures and materials.
This project is designed to support educational purposes and medical training, offering both an immersive visualization experience and interactivity through audio-visual effects.


**Features**

1. Realistic Heart Model
The main focus is on creating a high-fidelity 3D model of the human heart, using multiple textures like albedo, specular, normal, glossiness, ambient occlusion (AO), and emission maps.
Users can view the static model or interactively toggle to a dynamic, beating heart animation.
2. Interactive Components
Supports double-click interaction to toggle the heart between static and beating modes.
Accompanied by a realistic heartbeat sound upon interaction.
3. 3D Models of Medical Instruments
Additional 3D models such as scalpel, monitor, and forceps are included to simulate a more comprehensive medical setting.
4. Dynamic Lighting and Emissive Effects
High-quality lighting, including ambient, directional, point, and spot lights with shadow-casting, creates an immersive scene.
Emissive effects simulate internal glowing areas, adding realism to the heart.

**Technology Stack**

React: Frontend framework for managing UI and state.
React Three Fiber: React renderer for Three.js, enabling the integration of 3D models within the React ecosystem.
Three.js: JavaScript 3D library that provides the foundation for all 3D effects, animations, and lighting.
GLTFLoader: Used to load GLTF 3D models, which are optimized for the web.
OrbitControls: Allows users to manipulate the camera around the 3D scene.


**Detailed Code Explanation**

1. Main Components
HeartModel: Loads the static heart model with textures for a realistic appearance. Double-click toggles to the beating heart.
BeatingHeartModel: Plays an animation simulating a beating heart with a pulsing scale effect and sound.
MonitorModel, ScalpelModel, ForcepsModel: These models add interactive elements to the scene, enriching the educational context.

3. Lighting and Texturing
The scene utilizes multiple lighting sources to simulate a clinical environment:
AmbientLight for subtle general lighting.
DirectionalLight to cast shadows and highlight the 3D objects.
PointLight with red tones and SpotLight for depth and realistic intensity effects.

5. Interaction Handling
User Interactions:
Double-click on the heart to toggle between static and animated models.
Click on the monitor to trigger or pause the animation and sound.
Sound Effects:
Heartbeat sound is triggered in synchronization with the animation, enhancing realism.


**Future Enhancements**

Expanded Model Library: Integrate additional medical models to enhance the simulation scope.
Advanced Interactions: Introduce haptic feedback for an even more immersive experience.
Medical Annotation: Label various parts of the heart and instruments with interactive tooltips or pop-ups.
Contributing
We welcome contributions that can help improve this project. Please open an issue first to discuss potential changes or features. For major changes, ensure to first discuss what you would like to change.


**Setup and Installation**

This will launch the application at http://localhost:3000.

```bash
git clone https://github.com/username/interactive-3d-heart.git
cd interactive-3d-heart

npm install

npm start
