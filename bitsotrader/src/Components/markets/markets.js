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


	openNav() {
    	document.getElementById("mySidenav").style.width = "250px";
    	document.getElementById("marketItemC").style.display = "block";
	}

	closeNav() {
	    document.getElementById("mySidenav").style.width = "40px";
	    document.getElementById("marketItemC").style.display = "none";

	}

	render(){
		return (
			<div className="col2">
			     <div id="mySidenav" className="sidenav">

			     <div className="col2 merc">
			      <div className="colVertical">
			      	<a href="javascript:void(0)"  onMouseOver={this.openNav} onClick={this.closeNav} className="selectIconContainer right verticalI"> <img className="arrowDown2" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
			      	<span className="vertical"> MERCADOS </span> 
			      </div>
			     </div>

			     <div id="marketItemC">
				  <div className="topnav"></div>
				  <div className="topnav"></div>
				  <div className="topnav"></div>
				  <div className="topnav"></div>
				  <div className="topnav"></div>
				  </div>
				</div>
			</div>
			)
	}
}

export default Markets;