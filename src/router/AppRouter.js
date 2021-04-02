import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    
  } from "react-router-dom";
import { NavBar } from '../NavBar';
import { AboutScreen } from '../paginas/AboutScreen';
import { HomeScreen } from '../paginas/HomeScreen';
import { LoginScreen } from '../paginas/LoginScreen';



export const AppRouter = () => {
    return (
        
        
            <Router>
            
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />
                        <Route exact path="/" component={ HomeScreen } />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        
    )
}
