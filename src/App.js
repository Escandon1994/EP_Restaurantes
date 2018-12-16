import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//css
import './App.css';


//Components Waiter
import Login from './Components/Login/main';
//Dashboard 
import Code from './Components/code';
//Mesas
//Busqueda
//Logout


//Components Client
import Userlog from './Components/Costumer/Login';
//Bienvenido
//Menu
//import Validate from './Components/Validate_Order';
//Dashboard
import Userlogout from './Components/Costumer/Logout';


//Components Kitchen
//Dashboard



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
         <Route path="/Login" exact component={Login}/>
         <Route path="/Code" exact component={Code}/>

         <Route path="/" exact component={Userlog}/>
         <Route path="/Userlogout" exact component={Userlogout}/>
        </Switch>
      </div>
    );
  }
}

export default App;
