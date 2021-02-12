import React from 'react';
import Logo from '../Componets/Logo/Logo';
import './Navigation.css';
import { Link, animateScroll as scroll } from "react-scroll";


function Navigation() {
    return (
        <nav className="nav-container"
        >
            <Logo/>
            <ul 
            className="list-style"
            >
                <li>
                <Link
                activeClass="active"
                to="Servicos"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                 >
                    Serviços
                </Link>
                </li>


 
                <li>
                <Link
                activeClass="active"
                to="SobreNos"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                 >
                    Sobre nós
                </Link>
                  
                </li>
                <li className="contacts-style"> 
                <Link
                activeClass="active"
                to="Contactos"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                 >
                    Contactos
                </Link>
                    
                </li>

            </ul>
        </nav>
    )
}

export default Navigation
