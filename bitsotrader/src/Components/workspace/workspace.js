import React, {Component} from 'react';
import LastTrades from '../trades/lastTrades.js';
import Sells from '../trades/sells.js';
import Buys from '../trades/buys.js';

import Header from '../workspace/header.js';
import SubHeader from '../workspace/subheader.js';


class Workspace extends Component {

	render(){
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
				      	<p>Periodo</p>
				      </div>

				      <div className="candleChartContainer row">
				      	<p className="greenLetter">One of three columns</p>
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