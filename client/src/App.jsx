import React from "react";

import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" >
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>





    </>

  )
}

export default App;
