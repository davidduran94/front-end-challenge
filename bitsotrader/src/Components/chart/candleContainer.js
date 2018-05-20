import React, {Component} from 'react';


class CandleContainer extends Component {
	constructor(props){
		super(props);
		//this.ha
	}

	/*Eventos*/
	handleMouseOver(event){
		event.target.style.fill= 'black'
	}
	handleMouseOut(event){
		event.target.style.fill='rgb(25,30,35)'
	}

	render(){
		return (

			  <rect className="candleCont" x={this.props.id} y="0" width="3" height="90" stroke-width="0.3" 
                onMouseOver={this.handleMouseOver} 
                onMouseOut={this.handleMouseOut}
             />	

			)
	}
}

export default CandleContainer;