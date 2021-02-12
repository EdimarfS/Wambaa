import React from 'react';
import './Details.css';
import Logo from '../../../Componets/assets/Wambaa_logo_emblem_fullcolor_positive.png';
import Lottie from 'react-lottie';
import shopLady from '../../../Componets/assets/animations/lf30_editor_xysvm7qq.json';
import Button from '../../../Componets/Button/Button';

export default function Details() {

    return (
        <div className="home-details-container">
          <div>
            <p className="sub-section-1">Seja bem-vindo ao Wambaa</p>
            <p className="sub-section-2">Compre rápido e fácil</p>
            <p className="sub-section-3">Avisaremos quando estivermos prontos, para receber nossas novidades em primeira 
mão, deixe os seu email à baixo.</p>
          </div>

          <div>
            <p>Logo</p>
          </div>
  
        </div>
    )
}
