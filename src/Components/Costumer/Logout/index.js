import React, {Component} from 'react';

//class
import './Logout.css';

class Userlogout extends Component {
	render() {
		return(
			<div className="App-Login">
				<div className="Container">
					<form>
						<h1>¡Regresa Pronto!</h1>
						<button type="submit">Nueva Cuenta</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Userlogout;