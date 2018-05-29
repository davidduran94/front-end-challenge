import React, {Component} from 'react';
import {ConsultLastTrades} from '../../Services/consultlasttrades.js';
import {_URLS} from '../../Services/constants.js';



/*
	Description: Component that shows the table of last trades
	Style:       trades.less
*/
class LastTrades extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      items: [],
	    };
	}



	render(){
		
    	const listItems = this.props.data.map((actual) =>
    		<tr className="hovDataRowGR">
				   <td className="horaData">{actual.created_at.split("T")[1].split("+")[0]}</td>
			       <td className={"precioData color" + actual.maker_side }>{actual.price}</td>
			       <td className="montoData">{actual.amount}</td>
			</tr>
		);		     

		

		return (
		    <div className="containerLastTrades">
		      <div className="lastTradesBox">últimos trades</div>
		      <div className="lastTradesTableC">
				<table className="tableLTData">
				  <thead>
				    <tr>
				      <th className="lightLetter">hora</th>
				      <th className="lightLetter"><span className="darkLetter">{this.props.currencyPair.split("_")[1]}</span> precio</th>
				      <th className="lightLetter"><span className="darkLetter">{this.props.currencyPair.split("_")[0]}</span> monto</th>
				    </tr>
				  </thead>
				  <tbody>


				  	{listItems}
				  	{listItems}

				  
				  </tbody>
				</table>
		      </div>
		    </div>
				    

		)
	}
}


export default LastTrades;