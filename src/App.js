import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/signup";

function App() {

  return (
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Yogeshagrawal.tech</Link>
          
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;