import React, {Component} from 'react';
import './Routes.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import Home from './Home.js';
import People from './People.js';
import Vehicles from './Vehicles.js';
import Starships from './Starships.js';
import Species from './Species.js';

export default class Routes extends Component {


    render() {
        return (
            <Router>
                    <nav className='NavBar'>
                        <NavLink className="Routes-NavLink" to='/'>Home</NavLink>
                        <NavLink className="Routes-NavLink" to='/starships'>Starships</NavLink>
                        <NavLink className="Routes-NavLink" to='/vehicles'>Vehicles</NavLink>
                        <NavLink className="Routes-NavLink" to='/people'>People</NavLink>
                        <NavLink className="Routes-NavLink-Last" to='/species'>Species</NavLink>
                    </nav>
                
                <Switch> 
                    <Route exact path="/" 
                        render={() => <Home />} />
                    <Route exact path="/starships"
                        render={() => <Starships />} />
                    <Route exact path="/vehicles"
                        render={routeProps => <Vehicles {...routeProps} />} />
                    <Route exact path="/people"
                        render={routeProps => <People {...routeProps} />} />
                    <Route exact path="/species"
                        render={() => <Species />} />
                   
                </Switch>
            </Router>
        );
    }

}