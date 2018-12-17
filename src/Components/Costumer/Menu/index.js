import React, { Component} from 'react';

//css
import './Menu.css';

//Material UI
//import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

//Card
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';

//Img
import Img from "../../../assets/img_menu/food.jpg";

//Card Style
const styles = theme => ({
	card: {
		maxWidth:300,
	},
	media: {
		height: 0,
		paddingTop: '56.25%'
	},
	actions: {
		display:'flex',
	},

});

class Menu extends Component {

	render(){
		const { classes } = this.props;

		return(
			<div className="App-Menu">
				<div className="Container">
					{/* <div className="title">
						<p>Lunes 3 de Diciembre</p>
						<p>14:43 pm</p>
					</div> */}
					<div className="Menu">
						<Card className={classes.card}>
							<CardMedia
								className={classes.media}
								image= {Img}
								title="Paella dish"
							/>
							<CardHeader
								title="Shrimp and Chorizo Paella"
							/>
							
						</Card>
					</div>		
				</div>	
			</div>
		);
	}
}

Menu.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);