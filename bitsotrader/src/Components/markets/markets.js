import React, {Component} from 'react';
import CurrencyChart from '../markets/currencychart.js';

/*
	Description: Component that shows the information on the sidebar of each currency pair
	Style:       markets.less
*/
class Markets extends Component {
	constructor(props){
		super(props);
		
	}

	/*
		Eventos
	*/


	openNav() {
    	document.getElementById("mySidenav").style.width = "320px";
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
				  <div className="topnav navHead"> <p>mercados 24 hrs</p> </div>

				  

				  <CurrencyChart id="1" time="10:23 AM" currency="BTC / MXN" price="152,948.00" data={[5,1,5,2,4,1,4,6,2,4,3,1,0,1]} />
				  <CurrencyChart id="2" time="10:03 AM" currency="ETH / MXN" price="17,948.00" data={[0,1,6,2,4,1,9,6,2,0,2,1,0,3]} />
				  <CurrencyChart id="3" time="12:51 PM" currency="XRP / MXN" price="15.10" data={[5,9,3,2,7,4,6,2,0,3,1,0,3]} />
				  <CurrencyChart id="4" time="10:23 AM" currency="LTC / MXN" price="2,948.00"  data={[1,1,5,2,3,1,4,6,2,3,3,1,0,6]}/>
				  <CurrencyChart id="5" time="08:01 AM" currency="BCH / MXN" price="29,248.00" data={[4,1,5,2,4,1,4,6,2,4,3,1,0,1]} />
				  <CurrencyChart id="6" time="05:15 PM" currency="USDT / MXN" price="19.10" data={[0,9,3,2,7,4,6,2,0,3,1,0,3]} />



				  

				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
				  <div className="topnav navItem"></div>
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