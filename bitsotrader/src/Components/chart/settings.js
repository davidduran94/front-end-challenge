import React, {Component} from 'react';


class Settings extends Component {
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

			 <div className="settingsChart row">
				      
		      	<div className="typeChart"> 
		      		<div className="col5 dataSH divSelectorLight"> 
				      	<a href="#" className="selectIconContainer"> <img className="candlesIcons" src="/dist/Assets/Images/SVG/icon_candles.svg" /> </a> 
				      	<a href="#" className="selectIconContainer"> <img className="arrowDown2" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
				    </div>
		      	</div>

		      	<div className="typePeriod"> 
		      		<p>Periodo</p>
		      		<div className="col5 dataSH divSelectorDark"> 
				      	<span> 3d </span> 
				      	<a href="#" className="selectIconContainer"> <img className="arrowDown2" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
				    </div>

				    <div className="options">
				    	
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