import React, { useState } from 'react'; 
import Scene from './HeartModel'; // Import the Scene component
import './App.css'; // Import the CSS file for styles

const App = () => {
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true); // State to toggle sidebar visibility
    const [isProtocolVisible, setIsProtocolVisible] = useState(false); // State to manage protocol visibility
    const [isPatientProfileVisible, setIsPatientProfileVisible] = useState(false); // State for patient profile visibility

    // Updated equipment list including monitor, forceps, patient, hospital bed, and suture needle
    const equipmentList = [
        'scalpel', 
        'realistic human heart', 
        'monitor',
        'patient', // New equipment
        'suture needle' // New equipment
    ]; 

    const handleEquipmentClick = (equipment) => {
        setSelectedEquipment(equipment); // Set selected equipment when clicked
        setIsProtocolVisible(false); // Hide protocol when equipment is selected
        setIsPatientProfileVisible(false); // Hide patient profile when equipment is selected
    };

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
    };

    const handleSurgicalProtocolClick = () => {
        setIsProtocolVisible(!isProtocolVisible); // Toggle protocol visibility
        setIsPatientProfileVisible(false); // Hide patient profile when protocol is toggled
    };

    const handlePatientProfileClick = () => {
        setIsPatientProfileVisible(!isPatientProfileVisible); // Toggle patient profile visibility
        setIsProtocolVisible(false); // Hide protocol when patient profile is selected
    };

    return (
        <div className="container">
            {/* Left side: 3D Simulation */}
            <div className="simulation">
                <h1>Cardiac Surgery Simulation</h1>
                <Scene selectedEquipment={selectedEquipment} />
            </div>

            {/* Sidebar toggle button - icon-based */}
            <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
                <h2>Surgical Equipment</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {equipmentList.map((item, index) => (
                        <li
                            key={index}
                            className="equipment-item"
                            onClick={() => handleEquipmentClick(item)}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </li>
                    ))}
                </ul>
                {/* Button for Surgical Protocol */}
                <button onClick={handleSurgicalProtocolClick}>
                    Surgical Protocol
                </button>
                 {/* Button for Patient Profile */}
                 <button onClick={handlePatientProfileClick}>
                    Patient Profile
                </button>
                

                {/* Protocol Content */}
                {isProtocolVisible && (
                    <div className="protocol">
                        <h3>Surgical Protocol for Aortic Valve Replacement</h3>
                        <h4>1. Objective</h4>
                        <p>To provide a comprehensive protocol for the Aortic Valve Replacement procedure, outlining the appropriate use of surgical equipment to ensure patient safety and surgical efficacy.</p>

                        <h4>2. Equipment List</h4>
                        <ul>
                            <li>Scalpel</li>
                            <li>Forceps</li>
                            <li>Realistic Human Heart</li>
                            <li>Beating Heart Simulator</li>
                            <li>Monitor</li>
                            <li>Patient (model)</li>
                            <li>Hospital Bed</li>
                            <li>Suture Needle</li>
                        </ul>

                        <h4>3. Preoperative Preparation</h4>
                        <h5>3.1 Patient Preparation</h5>
                        <p>Patient Positioning: Transfer the patient model to the hospital bed, ensuring proper alignment and comfort.</p>
                        <p>Monitoring Setup: Connect the patient model to the monitor to continuously track vital signs (heart rate, blood pressure, oxygen saturation) during the procedure.</p>

                        <h5>3.2 Equipment Preparation</h5>
                        <p>Ensure all surgical instruments are sterile and arranged on the surgical tray. Confirm the availability of a backup set of surgical instruments.</p>

                        <h4>4. Surgical Procedure Steps</h4>
                        <h5>4.1 Initial Incision</h5>
                        <p>Scalpel Use: Select a #10 scalpel blade for the incision. Perform a vertical midline incision from the suprasternal notch to the xiphoid process, maintaining steady pressure to minimize trauma to surrounding tissues.</p>

                        <h5>4.2 Exposure of the Thoracic Cavity</h5>
                        <p>Tissue Retraction: Utilize tissue forceps to grasp the edges of the incision, retracting them to enhance visibility of the underlying anatomy. Employ a rib-spreader if necessary to facilitate access to the thoracic cavity.</p>

                        <h5>4.3 Identifying the Aortic Valve</h5>
                        <p>Anatomical Reference: Utilize the Realistic Human Heart model to demonstrate the anatomy of the heart, particularly focusing on the aortic valve's location and structural relationship with surrounding tissues.</p>
                        <p>Simulating Cardiac Activity: Employ the Beating Heart Simulator to demonstrate normal cardiac function, emphasizing the aortic valve's role in effective hemodynamics.</p>

                        <h5>4.4 Valve Replacement Procedure</h5>
                        <h5>4.4.1 Dissection</h5>
                        <p>Carefully dissect the tissues surrounding the aortic valve, ensuring minimal damage to adjacent structures.</p>
                        <h5>4.4.2 Valve Removal and Replacement</h5>
                        <p>Suturing with Suture Needle: Select an appropriate suture needle based on the valve's sewing ring requirements. Load the needle with the chosen suture material (absorbable or non-absorbable). Insert the new valve into the aortic annulus, ensuring proper alignment.</p>

                        <h5>4.5 Closing the Incision</h5>
                        <p>Repositioning the Heart: Carefully reposition the heart within the thoracic cavity, ensuring all instruments are accounted for before closure. Suturing: Utilize the Suture Needle to close the sternum and soft tissues in layers.</p>

                        <h4>5. Postoperative Monitoring</h4>
                        <h5>5.1 Recovery Phase</h5>
                        <p>Monitoring: Maintain continuous observation of the patient model’s vital signs through the monitor. Pay particular attention to signs of distress or complications, adjusting interventions as necessary.</p>

                        <h4>6. Documentation</h4>
                        <p>Document the procedure details, including any complications, interventions taken, and patient responses. Ensure all surgical notes are clear and legible for future reference.</p>

                        <h4>7. Conclusion</h4>
                        <p>This Surgical Protocol provides essential instructions for conducting an Aortic Valve Replacement procedure. Adherence to this protocol is crucial for ensuring patient safety and achieving positive surgical outcomes.</p>
                    </div>
                )}
                {/* Patient Profile Content */}
                {isPatientProfileVisible && (
                    <div className="patient-profile">
                        <h3>Patient Profile</h3>
                        <p><strong>Patient ID:</strong> AV123456</p>
                        <p><strong>Name:</strong> John Doe</p>
                        <p><strong>Age:</strong> 65</p>
                        <p><strong>Gender:</strong> Male</p>
                        <p><strong>Date of Surgery:</strong> October 15, 2024</p>
                        <p><strong>Procedure:</strong> Aortic Valve Replacement (AVR)</p>
                        <p><strong>Surgeon:</strong> Dr. Sarah Thompson, MD</p>
                        <p><strong>Anesthesia Type:</strong> General Anesthesia</p>
                        <p><strong>Pre-Existing Conditions:</strong> Hypertension, Diabetes Mellitus Type 2</p>
                        <p><strong>Allergies:</strong> None</p>
                        <p><strong>Emergency Contact:</strong> Jane Doe (Spouse) - (555) 123-4567</p>
                    </div>
                )}
            </div>

            {/* Button to toggle sidebar */}
            <div className="toggle-button" onClick={toggleSidebar}>
                {isSidebarVisible ? '❮' : '❯'}
            </div>
        </div>
    );
};

export default App;  
