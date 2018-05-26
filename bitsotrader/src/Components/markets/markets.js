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
    	document.getElementById("mySidenav").style.width = "320px";
    	document.getElementById("marketItemC").style.display = "block";
	} 

	closeNav() {
	    document.getElementById("mySidenav").style.width = "40px";
	    document.getElementById("marketItemC").style.display = "none";

	}


	openVerticalNav() {
    	document.getElementById("mySidenav").style.width = "250px";
    	document.getElementById("marketItemC").style.display = "block";
	} 

	closeVerticalNav() {
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
				  <div className="topnav navHead"> <p>mercados 24 hrs</p> </div>
				  <div className="topnav navItem">
				  	<p className="darkLetter">BTC / MXN</p>
				  	<p className="greenLetter">$172,948.00 MXN</p>

				  	<div className="colGraph hidden ">
				      	Grafica
			      	</div>

				  </div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  </div>
				</div>
			</div>
			)
	}
}

export default Markets;