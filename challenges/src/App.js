import React from "react";
import "./App.css";
import {Switch,Route} from 'react-router-dom'
import Header from "./Component/header";
import Home from './Component/homepage'
import Login from './Component/Login'

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
      
     
    </div>
  );
}

export default App;
