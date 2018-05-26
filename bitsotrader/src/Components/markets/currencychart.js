import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

/*
	Description: Component that shows the information on the sidebar of one currency pair
	Style:       markets.less
*/
class CurrencyChart extends Component {
	constructor(props){
		super(props);
	}

	/*
		Events
	*/

	showNavChart = (event, id) => {
		var chart = document.getElementById("navChart" + id)
		var chartC = document.getElementsByClassName("navChart" + id)

		chart.style.display = "block"
		chartC[0].style.background = '#161a1e'
		chartC[0].style.height = '145px'
	}

	hideNavChart = (event, id) => {
		var chart = document.getElementById("navChart" + id)
		var chartC = document.getElementsByClassName("navChart" + id)

		chart.style.display = "none"
		chartC[0].style.background = '#23292d'
		chartC[0].style.height = '22px'
	}

	/*
		Creates a unique Id for te element
	*/
	getIdChart(){
		return "navChart"+this.props.id; 
	}

	/*
		If the price has drop since the first value, the color is red
		If the price has up since the first value, the color is green
	*/
	getColor(){
		if(this.props.data[0] > this.props.data[this.props.data.length-1])
			return "redLetter"
		else
			return "greenLetter"
	}
	getColorCode(){
		if(this.props.data[0] > this.props.data[this.props.data.length-1])
			return "#722837"
		else
			return "#80c156"
	}
	getArrowDirection(){
		if(this.props.data[0] > this.props.data[this.props.data.length-1]) 
			return "orderDown"
		else
			return "orderUp"
	}
	getArrow(){
		if(this.props.data[0] > this.props.data[this.props.data.length-1]) 
			return "order_selector_r.svg"
		else
			return "order_selector_g.svg"
	}

	

	render(){
		return (

 				<div className={"topnav navItem " + this.getIdChart()}>
				  	
				  	<div className="infoNav" onMouseOver={((e) => this.showNavChart(e, this.props.id ))}  
										     onMouseOut={((e) => this.hideNavChart(e, this.props.id))} >
					  	<p className="darkLetter">{this.props.currency}</p>
					  	<p className={"flex " + this.getColor()}>
							<a href="#" className={"orderIconCont verticalI " + this.getColor() }> 
								<img className={this.getArrowDirection()} src={"/dist/Assets/Images/SVG/" + this.getArrow()} /> 
							</a>
					  		${this.props.price} MXN
					  	</p>
				  	</div>

				  	<p className="timenavI"> {this.props.time} </p>
				  	<div id={this.getIdChart()} className="colGraph chartNav" 
				  						onMouseOver={((e) => this.showNavChart(e, this.props.id ))}  
									    onMouseOut={((e) => this.hideNavChart(e, this.props.id))} >
				      	<Sparklines data={this.props.data} limit={15} width={100} height={40} margin={5}>
						    <SparklinesLine color={this.getColorCode()} style={{ fill: "none", strokeWidth: 0.5}} />
						    <SparklinesSpots style={{ fill: this.getColorCode(), stroke: this.getColorCode, strokeWidth: 0.1 }} />
						</Sparklines>
			      	</div>

				  </div>

				 )
	}

}

export default CurrencyChart;