import React, {Component} from 'react';

/*
	Description: Component that shows the information of the proce, volume, max and min on the candle hover
	Style:       trades.less
*/
class DataSquare extends Component {
	constructor(props){
		super(props);
		
	}

	/*Eventos*/
	handleMouseOver (event) { 
		event.target.setAttribute('stroke-width', '0.4');
	}
	handleMouseOut(event){
		event.target.setAttribute('stroke-width', '0.1');
	}

	render(){
		return (

			 <rect className="cls-4 volum" 
                    x="25.95" y="20" width="15" height="15" stroke-width="0.1"
                    onMouseOver={this.handleMouseOver} 
                    onMouseOut={this.handleMouseOut}
            />

			)
	}
}

export default DataSquare;