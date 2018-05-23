import React, {Component} from 'react';
import LastTrades from '../trades/lastTrades.js';
import Sells from '../trades/sells.js';
import Buys from '../trades/buys.js';
import Chart from '../chart/chart.js';

import Header from '../workspace/header.js';
import SubHeader from '../workspace/subheader.js';



class Workspace extends Component {
	
	GetZoom(){
		return 75; // 100% equivale a 75 velas
	}

	CalculateCandlesWidth(){
		if(this.props.data.length > this.GetZoom()){
			const ChartSize = 290 - this.GetZoom() ;
			return ChartSize / this.GetZoom();
		}else{
			const ChartSize = 290 - this.GetZoom() ;
			return ChartSize / this.GetZoom();
		}
	}

	CalculateMaxAndMin(){
		const result = {
			MaxPrice : this.props.data[0].high,
			MinPrice : this.props.data[0].low,
			MaxVol : this.props.data[0].volume,
			MinVol : this.props.data[0].volume
		};
		for (var i = 0; i<this.props.data.length; i++) {
			if( this.props.data[i].high >  result.MaxPrice ) result.MaxPrice = this.props.data[i].high;
			if( this.props.data[i].low  <  result.MinPrice ) result.MinPrice = this.props.data[i].low;

			if( this.props.data[i].volume <  result.MaxVol ) result.MaxVol = this.props.data[i].volume;
			if( this.props.data[i].volume >  result.MinVol ) result.MinVol = this.props.data[i].volume;
		}
		return result;
	}

	render(){
		const WidthCandle = this.CalculateCandlesWidth();
		const MinsMaxs = this.CalculateMaxAndMin();

		return (
			<div className="worspaceContainer">
				
				<Header/>
				<SubHeader/>
				

				<div className="container">
				  <div className="row">
				    
				    <div className="col20">
				   		<LastTrades/>
				    </div>

				    <div className="col75">
				      
				      <div className="settingsChart row">
				      	<div className="typeChart"> 
				      		<div className="col5 dataSH divSelectorLight"> 
						      	<a href="#" className="selectIconContainer"> <img className="candlesIcons" src="/dist/Assets/Images/SVG/icon_candles.svg" /> </a> 
						      	<a href="#" className="selectIconContainer"> <img className="arrowDown2" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
						    </div>
				      	</div>

				      	<div className="typePeriod"> 
				      		<p>Periodo</p>
				      		<div className="col5 dataSH divSelectorLight"> 
						      	<a href="#" className="selectIconContainer"> <img className="candlesIcons" src="/dist/Assets/Images/SVG/icon_candles.svg" /> </a> 
						      	<a href="#" className="selectIconContainer"> <img className="arrowDown2" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
						    </div>
				      	</div>

				      	<div className="typeInterval"> 
				      		<p>Intervalo</p>
				      		<div className="col5 dataSH divSelectorLight"> 
						      	<a href="#" className="selectIconContainer"> <img className="candlesIcons" src="/dist/Assets/Images/SVG/icon_candles.svg" /> </a> 
						      	<a href="#" className="selectIconContainer"> <img className="arrowDown2" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
						    </div>
				      	</div>
				      	
				      </div>

				      <div className="candleChartContainer row">
				      	<Chart data={this.props.data} MinsMaxs={MinsMaxs} WidthCandle={WidthCandle} />
				      </div>

				      <div className="sellBuyContainer row">
							<Buys/>
							<Sells/>
				      </div>
				    </div>

				    <div className="col5">
				      <p className="redLetter">One of three columns</p>
				    </div>

				  </div>


				</div>


			</div>
		)
	}

}

 export default Workspace;