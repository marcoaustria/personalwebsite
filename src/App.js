import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,

  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Typography from "./components/Typography"
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./components/Homepage"


function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
              <Route exact path='/' component={Homepage} />
              {/* {/* <Route path='/contact' component={Contact} /> */}
              <Route path='/typography' component={Typography} />
          </Switch>
       </Router>
    </div>
  );
}

export default App;
