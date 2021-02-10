import React from 'react';
import './Button.css';

export default function Button({onClick, label}) {
    return (
        <button 
        onClick={onClick}
        className="btn-style">
            <p>{label}</p>
        </button>
    )
}
