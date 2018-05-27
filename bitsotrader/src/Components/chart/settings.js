import React, {Component} from 'react';


class Settings extends Component 
{
	constructor(props){
		super(props);	
	}

	/*Eventos*/
	handleMouseOver (event) 
	{ 
		event.target.setAttribute('stroke-width', '0.4');
	}
	handleMouseOut(event)
	{
		event.target.setAttribute('stroke-width', '0.1');
	}

	showDeepMarket = (event) => {
		document.getElementById("chartContainerR").style.display = "none"
		document.getElementById("deepIcon").style.display = "none"
		document.getElementById("deepContainerR").style.display = "block"
		document.getElementById("candleIcon").style.display = "block"
	}

	showChart = (event) => {
		document.getElementById("chartContainerR").style.display = "block"
		document.getElementById("deepIcon").style.display = "block"
		document.getElementById("deepContainerR").style.display = "none"
		document.getElementById("candleIcon").style.display = "none"
	}

	render(){
		return (

			 <div className="settingsChart row">
				      
		      	<div className="typeChart"> 
		      		<div className="col5 dataSH divSelectorLight"> 
				      	<a href="#" onClick={((e) => this.showChart(e))} className="selectIconContainer" id="candleIcon"> 
				      		<img className="candlesIcons" src="/dist/Assets/Images/SVG/icon_candles.svg" /> 
				      	</a>
				      	<a href="#" onClick={((e) => this.showDeepMarket(e))} className="selectIconContainer" id="deepIcon">
				      		<img className="candlesIcons" src="/dist/Assets/Images/SVG/icon_deep.svg" /> 
				      	</a> 
				      	<a href="#" className="selectIconContainer"> <img className="arrowDown2" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
				    </div>
		      	</div>

		      	<div className="typePeriod"> 
		      		<p>Periodo</p>
		      		<div className="col5 dataSH divSelectorDark"> 
				      	<span> 3d </span> 
				      	<a href="#" className="selectIconContainer"> <img className="arrowDown2" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
				    </div>

				    <div id="periodOptions">
				      	<ul className="dropdown-options">
				      		<li className="">1 month</li>
				      		<li className="">3 months</li>
				      		<li className="">1 year</li>
				      	</ul>
				      </div>

		      	</div>

		      	<div className="typeInterval"> 
		      		<p>Intervalo</p>
		      		<div className="col5 dataSH divSelectorDark"> 
				      	<span> 1h </span> 
				      	<a href="#" className="selectIconContainer"> <img className="arrowDown2" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
				    </div>
		      	</div>

		      	<div className="typeZoom">
		      	<p id="zoomSpan">Zoom</p>
			      	<div className="divSelectorDark zoomButtonC"> 
			      		<div className="less"> 
					      	<a href="#" className="zoomless"> - </a> 
					    </div>

					    <div className="more"> 
					      	<a href="#" className="zoomplus"> + </a> 						      	
					    </div>
			      	</div>
		      	</div>

			</div>

			)
	}
}

export default Settings;