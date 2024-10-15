import React, { useState } from 'react';
import App from './App'; // Import App for View Mode
import Scene from './HeartModel'; // Import Scene for Interactive Mode
import './MainPage.css'; // Import CSS for styling

const MainPage = () => {
    const [mode, setMode] = useState(null);

    const handleViewMode = () => {
        setMode('view');
    };

    const handleInteractiveMode = () => {
        setMode('interactive');
    };

    return (
        <div className="main-container">
            {/* Background video */}
            <video className="background-video" autoPlay loop muted>
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content section */}
            <div className="content">
                <h1>Cardiac Surgery Simulation</h1>
                <div className="buttons-container">
                    <button onClick={handleViewMode} className="mode-button view-mode-button">
                        View Mode
                    </button>
                    <button onClick={handleInteractiveMode} className="mode-button interactive-mode-button">
                        Interactive Mode
                    </button>
                </div>

                {/* Conditionally render based on the selected mode */}
                {mode === 'view' && <App />} {/* View Mode */}
                {mode === 'interactive' && <Scene interactiveMode={true} />} {/* Interactive Mode */}
            </div>
        </div>
    );
};

export default MainPage;
