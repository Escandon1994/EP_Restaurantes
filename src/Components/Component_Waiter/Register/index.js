import React, {Component} from 'react';
import './Register.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFile,faMugHot,faSearch} from '@fortawesome/free-solid-svg-icons'

// library.add(faFile,faMugHot,faSearch)


class Register_Waiter extends Component{
    render(){
        return(
            <div className="Register-App">
                <div className="Container">
                    <div className="Right">
                        <div className="Options">
                            <div className="Top-Options Table"></div>
                            <div className="Top-Options Bill"></div>
                            <div className="Top-Options Search"></div>
                        </div>
                        <div className="Header">
                            <div className="Words" id="date">06/12/18</div>
                            <div className="Words" id="time">16:30</div>
                            <div className="Words" id="name">Israel Salinas</div>
                        </div>
                        <div className="Information-Costumer">
                            <p>Registrar al cliente</p>
                            <div className="Inputs-Costumers">
                                <input type="text" name="" id="name" placeholder="Nombre"/>
                                <input type="text" name="" id="costumer-number" placeholder="N . de Comensales"/>
                            </div>
                        </div>
                    </div>
                    <div className="Left">
                        <div className="Information"></div>
                        <div className="Orders"></div>
                        <div className="Search"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register_Waiter;