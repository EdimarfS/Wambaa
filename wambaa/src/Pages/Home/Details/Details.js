import React from 'react';
import './Details.css';
import Logo from '../../../Componets/assets/Wambaa_logo_emblem_fullcolor_positive.png';

export default function Details() {
    return (
        <div className="details-container">
            <div className="description-container">
                <p className="welcome-text">Welcome to Wambaa</p>
                <p className="header-1">Simple and Fast</p>
                <p className="description-text">Contrary to popular belief, 
                Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years</p>
            </div>

            <div className="logo-container">
            <img 
            className="logo-style-1"
            src={Logo} alt="Logo" />
            </div>
        </div>
    )
}
