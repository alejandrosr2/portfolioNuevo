import React from 'react'

const GenerateStars = (count) => {
    const stars = [];

    for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        const movementTypes = ["static", "horizontal", "vertical", "diagonal"];
        const movement = movementTypes[Math.floor(Math.random() * movementTypes.length)];

        const twinkle = Math.random() > 0.5;
        const duration = 7;
        const delay = Math.random() * 10;

        const classes = ["star"];
        if (twinkle) classes.push("twinkle");
        if (movement !== "static") classes.push(`move-${movement}`);

        stars.push(
        <div
            key={i}
            className={classes.join(" ")}
            style={{
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            }}
        />
        );
    }

    return stars;
};

export default GenerateStars
