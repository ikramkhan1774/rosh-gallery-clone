import React from 'react'
import { useState } from 'react';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const closeNavbar = () => {
        setIsOpen(false);
    };
    return (
        <>
            <nav className="navbar">
                
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    <span className={`navbar-toggle-icon ${isOpen ? 'active' : ''}`}>
                        {isOpen ? '✕' : '☰'}
                    </span>
                </button>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <a href="#" className="navbar-link" onClick={closeNavbar}>Home</a>
                    <a href="#" className="navbar-link" onClick={closeNavbar}>About</a>
                    <a href="#" className="navbar-link" onClick={closeNavbar}>Services</a>
                    <a href="#" className="navbar-link" onClick={closeNavbar}>Contact</a>
                </div>
            </nav>
        </>
    )
}

export default Nav