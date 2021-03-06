import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Contactos from '../Pages/Contactos/Contactos';
import Footer from '../Pages/Footer/Footer';
import Home from '../Pages/Home/Home';
import Servicos from '../Pages/Servicos/Servicos';
import SobreNos from '../Pages/SobreNos/SobreNos';


function Wambaa() {
    return (
        <Router>
            <Navigation/>
                <Home/>
                <Servicos/>
                <SobreNos/>
                <Contactos/>
                <Footer/>
        </Router>

    )
}

export default Wambaa;
