import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CrearDog } from '../pages/CrearDog';
import { DogDetail } from '../pages/DogDetail';
import { Home } from '../pages/Home';
import { Landing } from '../pages/Landing';
import { Favoritos } from '../components/Favoritos.js';
import AcercaDe from '../pages/AcercaDe';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/dog/acercade" component={AcercaDe}/>
                <Route exact path="/dog/favoritos" component={Favoritos}/>
                <Route exact path="/dog/crear" component={CrearDog}/>
                <Route exact path="/dog/:id" component={DogDetail}/>
                
            </Switch>
        </div>
    </Router>
      
  )
}
