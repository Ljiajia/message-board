import React, { Component } from 'react';
import {HashRouter,Switch,Route,Redirect} from "react-router-dom";
import './App.css';


import Home from "./Pages/Home";
class App extends Component {
  render() {
    return (
      <HashRouter>
         <Switch> 
         <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/" component={Home}></Route> 
         </Switch>
      </HashRouter>
    );  
  }
}

export default App;
