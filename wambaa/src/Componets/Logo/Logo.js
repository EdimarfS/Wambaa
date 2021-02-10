import React from 'react';
import './Logo.css';
import logo from '../assets/Wambaa_logo_logotype_monochrome_negative.png'

function Logo() {
    return (
        <div>
            <img 
            className="logo-style"
            src={logo} alt="Logo" />
        </div>
    )
}

export default Logo
