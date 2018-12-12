import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login/main';
import Validate from './Components/Validate_Order'; 
import Code from './Components/code'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login></Login>
        <Validate></Validate>
        <Code></Code>
      </div>
    );
  }
}

export default App;
