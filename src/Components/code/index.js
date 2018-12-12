import React, {Component} from 'react';
import './Code.css';

class Code extends Component {
    render(){
        return(
            <div className="Code-App">
                <div className="Container">
                        <p>El código del cliente es: </p>
                        <div>A 1 B 2 C 3 D 4 E</div>
                        <button type="submit">Asignar</button>
                </div>
            </div>
        );
    }
}

export default Code;
