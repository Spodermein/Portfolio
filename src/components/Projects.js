import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2>My Projects</h2>
            <div className="project-card">
                <h3>Weather App</h3>
                <p>This app predicts the weather based on your location.</p>
                <a href="https://github.com/username/weather-app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            {/* Add more project cards as needed */}
        </section>
    );
}

export default Projects;
