import React from "react";
import "./App.css";
import {
  HashRouter,
  Switch,
  Route,

  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Typography from "./components/Typography"
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./components/Homepage"
import NavbarComp from "./components/NavbarComp";
import DinosaurGame from "./components/DinosaurGame"
import Professional from "./components/Professional"

function App() {
  return (
    <div className="App">
            <NavbarComp />

       <HashRouter basename="/">
          <Switch>
              <Route exact path='/' component={Homepage} />
              {/* {/* <Route path='/contact' component={Contact} /> */}
              <Route path='/typography' component={Typography} />
              <Route path='/game' component={DinosaurGame} />
              <Route path='/professional' component={Professional} />
          </Switch>
       </HashRouter>
    </div>
  );
}

export default App;
