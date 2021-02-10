import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Contactos from '../Pages/Contactos/Contactos';
import Home from '../Pages/Home/Home';
import Servicos from '../Pages/Servicos/Servicos';
import SobreNos from '../Pages/SobreNos/SobreNos';

    {/* <Switch>        
    <Route path="/" exact component={Home}/>
    <Route path="/servicos" exact component={Servicos}/>
    <Route path="/sobreNos"  component={SobreNos}/>
    <Route path="/contactos"  component={Contactos}/>
</Switch> */}
function Wambaa() {
    return (
        <Router>
            <Navigation/>
                <Home/>
                <Servicos/>
                <SobreNos/>

        </Router>
    )
}

export default Wambaa
