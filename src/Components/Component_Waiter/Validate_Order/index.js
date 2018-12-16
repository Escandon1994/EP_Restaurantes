import React, {Component} from 'react';
import './Validate.css'

class Validate extends Component{
    render(){
        return(
            <div className="Validate-App">
                <div className="Container">
                <div className="title">
                    <div className="name">
                        <p id="order">Orden List</p>
                        <p id="date">Lunes 3 de Diciembre</p>
                        <p id="time">14:43 pm</p>
                    </div>
                    <div className="table">
                        <div className="circle">
                            <p>2</p>
                        </div>
                        <p id="number_table">Mesa 2</p>
                    </div>
                </div>
                <div className="search">
                    <input type="text" name="" id="" placeholder="Ingrese su búsqueda"/>
                </div>
                <div className="menu">
                    <div className="name">Tacos</div>
                    <div className="information">
                        <div id="price">$ 5.00</div>
                        <div className="add">
                            <div id="dash"></div>
                            <div id="units">5</div>
                            <div id="plus"></div>
                        </div>
                        <div id="total">$ 25.00</div>
                        <div id="cancel"></div>
                    </div>
                </div>
                <button type="submit">Enviar orden</button>
                </div>
            </div>
        )
    }
}

export default Validate;