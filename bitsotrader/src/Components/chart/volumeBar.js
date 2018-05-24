import React, {Component} from 'react';


class VolumeBar extends Component {
	constructor(props){
		super(props);
		//this.ha
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
                    x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height} strokeWidth="0.1"
                    onMouseOver={this.handleMouseOver} 
                    onMouseOut={this.handleMouseOut}
            />

			)
	}
}

export default VolumeBar;