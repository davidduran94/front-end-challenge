import React, {Component} from 'react';

class SubHeader extends Component {

	render(){
		return (


			<div id="subheader" className="subheader"> 
				      <div className="col5 dataSH"> 
				      	<p className="greenLetter letterBig1" > BTC/MXN </p> 
				      	<a href="#" className="arrowContainer1"> <img className="arrowDown" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
				      </div>
				      <div id="currencyOptions">
				      	<ul className="dropdown-options">
				      		<li className="">BTC/MXN</li>
				      		<li className="">ETH/MXN</li>
				      		<li className="">XRP/MXN</li>
				      		<li className="">LTC/MXN</li>
				      		<li className="">BCH/MXN</li>
				      	</ul>
				      </div>

				      <div className="col16 dataSH"> 
				      	<p className="darkLetter">Volumen 24 hrs.</p>
				      	<p className="lightLetter">170.5405818 BTC</p> 
				      </div>
				      <div className="col16 dataSH"> 
				        <p className="darkLetter">Max.</p>
				      	<p className="lightLetter">304,934.23 MXN</p>
				      </div>
				      <div className="col16 dataSH"> 
				      	<p className="darkLetter">Min.</p>
				      	<p className="lightLetter">274,934.23 MXN</p>
				      </div>
				      <div className="col16 dataSH"> 
				      	<p className="darkLetter">Variación.</p>
				      	<p className="lightLetter">+4,061.68 MXN</p>
				      </div>
			</div>


		)

	}
}

export default SubHeader;