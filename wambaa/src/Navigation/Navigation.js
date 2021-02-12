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
          
                <Link
                activeClass="active"
                to="Servicos"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                 >
                <li>
                    Serviços
                
                </li>
                </Link>


 
              
                <Link
                activeClass="active"
                to="SobreNos"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                 >
                    <li>
                    Sobre nós
                    </li>
                </Link>
                  

                <Link
                activeClass="active"
                to="Contactos"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                 >
                    <li className="contacts-style"> 
                    Contactos
                    </li>
                </Link>
                    
         

            </ul>
        </nav>
    )
}

export default Navigation
