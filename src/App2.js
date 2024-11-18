import React, { useState } from 'react';
import Scene from './interactiveheart'; // Import the Scene component
import './App2.css'; // Import the CSS file for styles

const App2 = () => {
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true); // State to toggle sidebar visibility
    const [isProtocolVisible, setIsProtocolVisible] = useState(false); // State to manage protocol visibility
    const [isPatientProfileVisible, setIsPatientProfileVisible] = useState(false); // State for patient profile visibility

    // Updated equipment list including monitor, forceps, patient, hospital bed, and suture needle
    const equipmentList = [
        'realistic human heart', 
        'monitor',
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

                {selectedEquipment === 'monitor' && (
    <div className="video-container">
        <h2>Surgical Video</h2>
        <video width="20%" controls autoPlay muted>
            <source src="/video/ecg.mp4" type="video/mp4" />
        </video>
    </div>
)}


 

                {/* Monitor Stats - visible only when monitor is selected */}
                {selectedEquipment === 'monitor' && (
                    <div className="monitor-stats">
                        <h3>Monitor Stats</h3>
                        <p><strong>Heart Rate:</strong> 72 bpm</p>
                        <p><strong>Blood Pressure:</strong> 120/80 mmHg</p>
                        <p><strong>Oxygen Saturation:</strong> 98%</p>
                        <p><strong>Respiration Rate:</strong> 16 breaths/min</p>
                    </div>
                )}
            </div>

            {/* Sidebar */}
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
                    ECG Data
                </button>
                {/* Button for Patient Profile */}
                <button onClick={handlePatientProfileClick}>
                    Patient Profile
                </button>

                {/* Protocol Content */}
                {isProtocolVisible && (
                    <div className="protocol">
                        <h4>Heart Rate: 0-30 bpm (asystole or very low due to cardioplegia; circulation handled by the machine).</h4>
                        <h5>PR, QRS, QT Intervals: Not applicable or minimal activity.</h5>
                        <p>Rhythm: Often asystole due to intentional cardiac arrest.</p>
                        <p>Monitoring Setup: Connect the patient model to the monitor to continuously track vital signs (heart rate, blood pressure, oxygen saturation) during the procedure.</p>

                        <h5>PCO₂ (Partial Pressure of Carbon Dioxide)</h5>
                        <p>Arterial PCO₂: 35-45 mmHg (controlled by the perfusionist).
Venous PCO₂: 40-50 mmHg (varies with tissue metabolism).
End-Tidal CO₂ (ETCO₂): Lower (20-30 mmHg) or absent if lungs not ventilated.</p>

                        <h4>Blood Gas Parameters</h4>
                        <h5>pH: 7.35-7.45 (maintained via oxygenator adjustments).</h5>
                        <p>Scalpel Use: Select a #10 scalpel blade for the incision. Perform a vertical midline incision from the suprasternal notch to the xiphoid process, maintaining steady pressure to minimize trauma to surrounding tissues.</p>

                        <h5>Respiratory Parameters</h5>
                        <p>Respiratory Rate: 0 or very low if intermittently ventilated.
Tidal Volume & Minute Ventilation: 0 (lungs deflated or minimally ventilated).
O₂ Saturation (SpO₂): 95-100% (managed via the heart-lung machine).</p>

                        <h5>Cardiovascular Parameters</h5>
                        <p>Mean Arterial Pressure (MAP): 50-80 mmHg (controlled to reduce cardiac stress).</p>
                        <p>Systolic/Diastolic: Not meaningful; focus on MAP.</p>

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

export default App2;
