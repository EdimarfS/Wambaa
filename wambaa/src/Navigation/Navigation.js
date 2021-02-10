import React from 'react';
import Logo from '../Componets/Logo/Logo';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="nav-container">
            <Link to="/">
            <Logo/>
            </Link>
            <ul className="list-style">
                <Link to="/servicos">
                <li>
                    Servicos
                </li>
                </Link>

                <Link to="/sobreNos">
                <li>
                   Sobre Nos
                </li>
                </Link>

                <Link to="/contactos">
                <li>
                    Contacts
                </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation
