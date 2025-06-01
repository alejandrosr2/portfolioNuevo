import React, { useEffect, useRef, useState } from 'react';
import './header.css';
import gsap from 'gsap';
import Button from '../button/Button';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const scrollRef = useRef(null);
    const btnRef = useRef(null);
    const [copied, setCopied] = useState(false);
    const email = "alejandro.solerr2@gmail.com"; 
    /* Animations */
    useEffect(() => {
        const letters = titleRef.current.querySelectorAll(".letter");

        gsap.fromTo(
            letters,
            { opacity: 0, y: (i) => (i % 2 === 0 ? 200 : -200) },
            {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power4.out",
                stagger: 0.08,
            }
        );

        gsap.fromTo(
            subtitleRef.current,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                delay: 1.5,
            }
        );

        gsap.fromTo(
            scrollRef.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                delay: 2.2,
            }
        );

        gsap.fromTo(
            btnRef.current.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.2,
                delay: 2.5,
            }
        );
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <header>
            {/* Title */}
            <h1 className="title" ref={titleRef}>
                <span className="line">
                    {"ALEJANDRO".split("").map((char, i) => (
                        <span className="letter" key={`a-${i}`}>
                            {char}
                        </span>
                    ))}
                </span>
                <span className="line">
                    {"SOLER".split("").map((char, i) => (
                        <span className="letter" key={`s-${i}`}>
                            {char}
                        </span>
                    ))}
                </span>
            </h1>
            {/* Subtitle */}
            <div className="subtitle-wrapper">
                <h2 className="subtitle" ref={subtitleRef}>
                    JUNIOR FRONTEND DEVELOPER
                </h2>
            </div>
            <div className="container">
                <div className="scroll-div" ref={scrollRef}>
                    <div className="scroll">
                        <span className="open">OPEN</span>
                        <span className="work">TO WORK</span>
                    </div>
                </div>
                {/* Socials buttons */}
                <div className="btn-div" ref={btnRef}>
                    <Button
                        text="CV"
                        icon={FaFileAlt}
                        href="https://github.com/alejandrosr2/curriculum/blob/main/CurriculumAlejandroSolerRondan.pdf"
                    />
                    <Button
                        text="GIT"
                        icon={FaGithub}
                        href="https://github.com/alejandrosr2"
                    />
                    <Button
                        text="LinkedIn"
                        icon={FaLinkedin}
                        href="https://www.linkedin.com/in/alejandro-soler-rond%C3%A1n-10587b299/"
                    />
                </div>
            </div>
            {/* Side menu */}
            <div className="nav-links">
                <a href="#description">Sobre mí</a>
                <a href="#projects">Proyectos</a>
                <a href="#contact" onClick={handleCopyEmail}>Contacto</a>
            </div>
            {/* Toast Notification */}
            {copied && <div className="toast">¡Email copiado al portapapeles!</div>}
        </header>
    );
};

export default Header;
