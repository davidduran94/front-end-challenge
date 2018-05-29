import React, {Component} from 'react';
import LastTrades from '../trades/lastTrades.js';
import Sells from '../trades/sells.js';
import Buys from '../trades/buys.js';
import Chart from '../chart/chart.js';
import Settings from '../chart/settings.js';
import Markets from '../markets/markets.js';
import DeepMarket from '../deepmarket/deepmarket.js';


import Header from '../workspace/header.js';
import SubHeader from '../workspace/subheader.js';

import {ConsultChart} from '../../Services/consultchart.js';
import {ConsultLastTrades} from '../../Services/consultlasttrades.js';
import {ConsultSellBuys} from '../../Services/consultsellbuys.js';

import {_URLS} from '../../Services/constants.js';
import {_CURRENCY} from '../../Services/constants.js';
import {_TIMEPERIOD} from '../../Services/constants.js';

/*
	Represent all the area that is showed on the browser
*/
class Workspace extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      items: [],
	      lastTrades: [],
	      orders: []
	    };
	}

    componentWillMount() {
    	console.log(this.props.currencyPair)

		
    	ConsultChart(_URLS.historyBook, {"book": this.props.currencyPair, "period": _TIMEPERIOD.threemonths })
    	.then((items) => {

    		ConsultLastTrades(_URLS.lastTrades, {"book": this.props.currencyPair })
    		.then((lt) => {

    			ConsultSellBuys(_URLS.orderBook, {"book": this.props.currencyPair })
    			.then((books) => {
        	
        			this.setState({ items: items, lastTrades: lt, orders:books, isLoaded: true, error:0 })

      		})
      		})
      	})
    }


	componentDidMount() {
	    
	}


	/*
		Calculate the max price, min price, 
		and max and min volume
		in all the date range
	*/
	CalculateMaxAndMin(){
		var result = {
			MaxPrice : Math.trunc(this.state.items[0].high),
			MinPrice : Math.trunc(this.state.items[0].low),
			MaxVol : Math.trunc(this.state.items[0].volume),
			MinVol : Math.trunc(this.state.items[0].volume)
		}
		
		for (var i =0;  i<this.state.items.length; i++) {
			//console.log(result.MaxPrice)

			if( result.MaxPrice < Math.trunc(this.state.items[i].high)) { result.MaxPrice = this.state.items[i].high }
			if( result.MinPrice > Math.trunc(this.state.items[i].low)) { result.MinPrice = this.state.items[i].low }

			if( Math.trunc(this.state.items[i].volume) >  result.MaxVol ) {result.MaxVol = this.state.items[i].volume}
			if( Math.trunc(this.state.items[i].volume) <  result.MinVol ) {result.MinVol = this.state.items[i].volume}
		}
		
		return result;
	}


	render(){
	if (this.state.items.length > 0) {
		//const WidthCandle = this.CalculateCandlesWidth();
		var MinsMaxs = this.CalculateMaxAndMin();
		//var Zoom = this.GetZoom();
		return (
			<div className="worspaceContainer">
				
				<Header currencyPair={this.props.currencyPair} price={this.state.lastTrades.payload[0].price} />
				<SubHeader currencyPair={this.props.currencyPair} />
				

				<div className="container">
				  <div className="row rowmed">
					    <div className="col20">
					   		<LastTrades currencyPair={this.props.currencyPair} data={this.state.lastTrades.payload}/>
					    </div>

					    <div className="col78">
						      <Settings currencyPair={this.props.currencyPair} zoom={this.props.zoom} />

						      <div className="candleChartContainer row">
						      	<Chart data={this.state.items} MinsMaxs={MinsMaxs} zoom={this.props.zoom}  />
						      	<DeepMarket data={this.state.items}  />
						      </div>

						      <div className="sellBuyContainer row">
									<Buys currencyPair={this.props.currencyPair} data= {this.state.orders.payload.bids}/>
									<Sells currencyPair={this.props.currencyPair} data= {this.state.orders.payload.asks} />
						      </div>
					    </div>

				    	<Markets/>
				  </div>
				</div>


			</div>
		)
	}else{
		      return (
		      	<ul  className="charginC">
				<li className="charginT"></li>
				<li className="charginT"></li>
				<li className="charginT"></li>
				<li className="charginT"></li>
				<li className="charginT"></li>
				<li className="charginT"></li><li className="charginT"></li><li className="charginT"></li>
			</ul>
		      	)

	}
	}

}

 export default Workspace;