import React, {Component} from 'react';


class Markets extends Component {
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

			 <div className="col2 merc">
		      <div className="colVertical">
		      	<a href="#" className="selectIconContainer verticalI"> <img className="arrowDown2" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
		      	<span className="vertical"> MERCADOS </span> 
		      </div>
		     </div>

			)
	}
}

export default Markets;