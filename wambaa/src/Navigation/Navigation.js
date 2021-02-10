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
                    Serviços
                </li>
                </Link>

                <Link to="/sobreNos">
                <li>
                   Sobre nós
                </li>
                </Link>

                <Link to="/contactos">
                <li className="contacts-style"> 
                    Contactos
                </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation
