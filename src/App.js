import React, { Component } from 'react';
import './App.css';
import Login from './Components/Component_Waiter/Login';
import Validate from './Components/Component_Waiter/Validate_Order'; 
import Code from './Components/Component_Waiter/Code'
import Register from './Components/Component_Waiter/Register'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login></Login>
        <Validate></Validate>
        <Code></Code>
        <Register></Register>
      </div>
    );
  }
}

export default App;

