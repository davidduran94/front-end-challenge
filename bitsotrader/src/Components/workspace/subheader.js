import React, {Component} from 'react';

class SubHeader extends Component {


	showCurrencies = (event) => {
		document.getElementById("currencyOptions").style.display = "block"
		
	}
	hideCurrencies = (event) => {
		document.getElementById("currencyOptions").style.display = "none"
		
	}
	render(){
		return (


			<div id="subheader" className="subheader"> 
				      <div className="col5 dataSH" onClick={((e) => this.showCurrencies(e))}> 
				      	<p className="greenLetter letterBig1" > {this.props.currencyPair} </p> 
				      	<a href="#" className="arrowContainer1"> <img className="arrowDown" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
				      </div>
				      <div id="currencyOptions" onMouseLeave={((e) => this.hideCurrencies(e))}>
				      	<ul className="dropdown-options" >
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