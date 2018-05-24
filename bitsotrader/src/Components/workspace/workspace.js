import React, {Component} from 'react';
import LastTrades from '../trades/lastTrades.js';
import Sells from '../trades/sells.js';
import Buys from '../trades/buys.js';
import Chart from '../chart/chart.js';
import Settings from '../chart/settings.js';
import Markets from '../markets/markets.js';

import Header from '../workspace/header.js';
import SubHeader from '../workspace/subheader.js';


/*
	Represent all the area that is showed on the browser
*/
class Workspace extends Component {
	
	/*
		When the zoom has changed we reecalculate the position of the hole elements
	*/
	GetZoom(){
		return 75; 
	}


	/*
		Zoom is calculated based on the how many candles will be displayed 
		If there will be 75 candles the zoom si 100%
		Other side if it would be more candles the zoom is higher
	*/
	CalculateCandlesWidth(){
		if(this.props.data.length > this.GetZoom()){
			const ChartSize = 290 - this.GetZoom() ;
			return ChartSize / this.GetZoom();
		}else{
			const ChartSize = 290 - this.GetZoom() ;
			return ChartSize / this.GetZoom();
		}
	}


	/*
		Calculate the max price, min price, 
		and max and min volume
		in all the date range
	*/
	CalculateMaxAndMin(){
		var result = {
			MaxPrice : Math.trunc(this.props.data[0].high),
			MinPrice : Math.trunc(this.props.data[0].low),
			MaxVol : Math.trunc(this.props.data[0].volume),
			MinVol : Math.trunc(this.props.data[0].volume)
		}
		
		for (var i =0;  i<this.props.data.length; i++) {
			console.log(result.MaxPrice)

			if( result.MaxPrice < Math.trunc(this.props.data[i].high)) { result.MaxPrice = this.props.data[i].high }
			if( result.MinPrice > Math.trunc(this.props.data[i].low)) { result.MinPrice = this.props.data[i].low }

			if( Math.trunc(this.props.data[i].volume) >  result.MaxVol ) {result.MaxVol = this.props.data[i].volume}
			if( Math.trunc(this.props.data[i].volume) <  result.MinVol ) {result.MinVol = this.props.data[i].volume}
		}
		
		return result;
	}


	render(){
		const WidthCandle = this.CalculateCandlesWidth();
		var MinsMaxs = this.CalculateMaxAndMin();
		var Zoom = this.GetZoom();
		return (
			<div className="worspaceContainer">
				
				<Header/>
				<SubHeader/>
				

				<div className="container">
				  <div className="row">
				    
				    <div className="col20">
				   		<LastTrades/>
				    </div>

				    <div className="col78">
				      
				      <Settings />

				      <div className="candleChartContainer row">
				      	<Chart data={this.props.data} MinsMaxs={MinsMaxs} WidthCandle={WidthCandle} Zoom={Zoom} />
				      </div>

				      <div className="sellBuyContainer row">
							<Buys/>
							<Sells/>
				      </div>
				    </div>

				    <Markets/>

				  </div>


				</div>


			</div>
		)
	}

}

 export default Workspace;