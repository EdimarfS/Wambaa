import React from 'react';
import Logo from '../Componets/Logo/Logo';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="nav-container">
            <Logo/>
            <ul className="list-style">
                <li>Servicos</li>
                <li>Sobre Nos</li>
                <li>Contacts</li>
            </ul>
        </nav>
    )
}

export default Navigation
