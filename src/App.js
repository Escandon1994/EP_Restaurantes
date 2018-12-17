import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//css
import './App.css';

//Components Waiter
import Login_Waiter from './Components/Component_Waiter/Login';
import Validate_Waiter from './Components/Component_Waiter/Validate_Order'; 
import Register_Waiter from './Components/Component_Waiter/Register'

//Dashboard 
import Code_Waiter from './Components/Component_Waiter/Code'
//Mesas
//Busqueda
//Logout

//Components Client
import Userlog from './Components/Costumer/Login';
//Bienvenido
//Menu
//Dashboard
import Userlogout from './Components/Costumer/Logout';
import Menu from './Components/Costumer/Menu/index';
import Example from './Components/Costumer/Dashboard/index'
import Welcome from './Components/Costumer/Welcome/index'


//Components Kitchen
//Dashboard

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
         <Route path="/" exact component={Validate_Waiter}/>
         <Route path="/Register" exact component={Register_Waiter}/>
         <Route path="/Login" exact component={Login_Waiter}/>
         <Route path="/Code" exact component={Code_Waiter}/>
         <Route path="/Menu" exact component={Menu}/>

         <Route path="/Userlog" exact component={Userlog}/>
         <Route path="/Userlogout" exact component={Userlogout}/>
         <Route path="/Example" exact component={Example}/>
         <Route path="/Welcome" exact component={Welcome}/>
        </Switch>
      </div>
    );
  }
}

export default App;

