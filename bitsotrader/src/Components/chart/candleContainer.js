import React, {Component} from 'react';
import Tooltip from "react-simple-tooltip"

/*
	Description: This Component represents the container that change its color when is hover  
	Style:       markets.less
*/
class CandleContainer extends Component {
	constructor(props){
		super(props);
		//this.ha
	}

	/*Eventos*/
	handleMouseOver = (event) => {
		var element = document.getElementsByClassName('userPhotoCont')[0],
	    style = window.getComputedStyle(element),
	    back = style.getPropertyValue('background-color');
		

		event.target.style.fill= back;
	}
	handleMouseOut = (event) => {
		var element = document.getElementsByClassName('worspaceContainer')[0],
	    style = window.getComputedStyle(element),
	    back = style.getPropertyValue('background-color');

		event.target.style.fill=back
	}

	render(){
		return (
			
			  <rect className="candleCont" x={this.props.id} y="0" width={this.props.width} height="90" strokeWidth="0.3" 
                onMouseOver={((e) => this.handleMouseOver(e, this.props.theme ))} 
                onMouseOut={((e) => this.handleMouseOut(e, this.props.theme ))}
             />	

			)
	}
}

export default CandleContainer;