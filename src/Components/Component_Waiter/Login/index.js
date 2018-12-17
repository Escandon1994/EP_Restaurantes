import React, {Component} from 'react';
import './Login.css';

class Login_Waiter extends Component {
    render(){
        return(
            <div className="Login-App">
                <div className="Container">
                <form>
                        <h1>Bienvenido</h1>
                        <div className="name">
                        <label>Nombre:</label>
                        <input type="text" name="" id="" placeholder="Nombre"/>
                        </div>
                        <div className="password">
                        <label>Password:</label>
                        <input type="text" name="" id="" placeholder="Password"/>
                        </div>
                        <button type="submit">Registarse</button>
                    </form>
                    <div className="image"></div>
                </div>
            </div>
        );
    }
}

export default Login_Waiter;
