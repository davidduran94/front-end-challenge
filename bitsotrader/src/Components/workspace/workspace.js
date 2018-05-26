import React, {Component} from 'react';
import LastTrades from '../trades/lastTrades.js';
import Sells from '../trades/sells.js';
import Buys from '../trades/buys.js';
import Chart from '../chart/chart.js';
import Settings from '../chart/settings.js';
import Markets from '../markets/markets.js';

import Header from '../workspace/header.js';
import SubHeader from '../workspace/subheader.js';

import {ConsultChart} from '../../Services/consultchart.js';
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
	    };
	}

    componentWillMount() {
    	ConsultChart(_URLS.historyBook, {"book": _CURRENCY.book_btc_mx, "period": _TIMEPERIOD.threemonths })
    	.then((items) => {
    		//console.log(items);
        	this.setState({ items: items })
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
						      	<Chart data={this.state.items} MinsMaxs={MinsMaxs}  />
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