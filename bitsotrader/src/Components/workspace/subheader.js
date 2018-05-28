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
				      		<li> <a className="changeCurrLink" href="/btc_mxn/1month"> BTC/MXN </a> </li>
				      		<li className=""><a className="changeCurrLink" href="/eth_mxn/1month"> ETH/MXN </a></li>
				      		<li className=""><a className="changeCurrLink" href="/xrp_mxn/1month"> XRP/MXN </a></li>
				      		<li className=""><a className="changeCurrLink" href="/ltc_mxn/1month"> LTC/MXN </a></li>
				      		<li className=""><a className="changeCurrLink" href="/bch_mxn/1month"> BCH/MXN </a></li>				      		
				      	</ul>
				      </div>

				      <div className="col16 dataSH"> 
				      	<p className="darkLetter">Volumen 24 hrs.</p>
				      	<p className="lightLetter">{"170.5405818 " + this.props.currencyPair.split("_")[0]}</p> 
				      </div>
				      <div className="col16 dataSH"> 
				        <p className="darkLetter">Max.</p>
				      	<p className="lightLetter">{"304,934.23 " + this.props.currencyPair.split("_")[1]}</p>
				      </div>
				      <div className="col16 dataSH"> 
				      	<p className="darkLetter">Min.</p>
				      	<p className="lightLetter">{"274,934.23 " + this.props.currencyPair.split("_")[1] }</p>
				      </div>
				      <div className="col16 dataSH"> 
				      	<p className="darkLetter">Variación.</p>
				      	<p className="lightLetter">{"+4,061.68 " + " (1.4%)" }</p>
				      </div>
			</div>


		)

	}
}

export default SubHeader;