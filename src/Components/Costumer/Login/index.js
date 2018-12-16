import React, {Component} from 'react';

//class
import './Login.css';

class Userlog extends Component {
	render() {
		return(
			<div className="App-Login">
				<div className="Container">
					<form>
						<h1>¡Bienvenido Usuario!</h1>
						<input
							type="text"
							name=""
							id=""
							placeholder="Usuario"
						/>
						<button type="submit">Entrar</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Userlog;