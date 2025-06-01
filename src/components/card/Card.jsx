import React, { forwardRef } from 'react';
import './card.css';

const Card = forwardRef(({
    title,
    imageSrc,
    technologies = [],
    description,
    githubLink,
    liveUrl,
    }, ref) => {
    return (
        <div className="card-container" ref={ref}>
        <div className="card">
            {/* Front side */}
            <div className="card-front">
            <h3 className="card-title">{title}</h3>
            <img src={imageSrc} alt={`${title} screenshot`} className="card-image" />
            <ul className="tech-list">
                {technologies.map((tech, i) => (
                <li key={i} className="tech-item">{tech}</li>
                ))}
            </ul>
            </div>
            {/* Back side */}
            <div className="card-back">
            <p className="card-description">{description}</p>
            <div className="links">
                {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="card-link">
                    GitHub
                </a>
                )}
                {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="card-link">
                    Live Demo
                </a>
                )}
            </div>
            </div>
        </div>
        </div>
    );
});

export default Card;
