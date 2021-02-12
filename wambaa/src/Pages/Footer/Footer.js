import React from 'react';
import './Footer.css';
import Facebook from '../../Componets/assets/icons/facebook.png'
import Instagram from '../../Componets/assets/icons/instagram.png'
import Twitter from '../../Componets/assets/icons/twitter.png'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="icons-style">
            <div className="general-aligment">
            <img className="icon" src={Facebook} alt="Facebook" />
                facebook/Wambaa
            </div>

            <div className="general-aligment">
            <img  className="icon" src={Instagram} alt="Facebook" />
                @Wambaa
            </div>
            <div className="general-aligment">
            <img  className="icon" src={Twitter} alt="Facebook" />
                twitter/Wambaa
            </div>
            </div>
        </div>
    )
}
