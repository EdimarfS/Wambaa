import React from 'react';
import './Details.css';
import Logo from '../../../Componets/assets/Wambaa_logo_emblem_fullcolor_positive.png';
import Lottie from 'react-lottie';
import shopLady from '../../../Componets/assets/animations/lf30_editor_xysvm7qq.json';
import Button from '../../../Componets/Button/Button';

export default function Details() {
    const defaultOptions = {
        loop: false,
        autoplay: false, 
        animationData: shopLady,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div className="details-container">
            <div className="logo-container">
            <Lottie 
              options={defaultOptions}
              height={500}
              width={580}
              />

            </div>
            <div className="description-container">
                <p className="welcome-text">Welcome to Wambaa</p>
                <p className="header-1">Simple and Fast to buy</p>
                <p className="description-text">
                Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
              </p>
            <div className="btn-container"> 
              <Button/>
            </div>
            </div>
            


        </div>
    )
}
