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
		
		const lastt = ConsultLastTrades(_URLS.lastTrades, {"book": this.props.currencyPair })
		console.log(lastt)
    	
    	/*
    	const listItems = (
    		<tr>
				   <td className="horaData">{actual.created_at.split("T")[1].split("+")[0]}</td>
								      <td className="precioData">134,134.00</td>
								      <td className="montoData">0.002523</td>
			</tr>
		)		     
		*/
        	
      
      	//console.log(data);

		

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

				  	
				    <tr className="hovDataRowN" >
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr className="hovDataRowN">
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr className="hovDataRowN">
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr className="hovDataRowN">
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr className="hovDataRowN">
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr className="hovDataRowN">
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr className="hovDataRowN">
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr className="hovDataRowN">
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr className="hovDataRowN">
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr className="hovDataRowN">
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr className="hovDataRowN">
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				    <tr>
				      <td className="horaData">12:00:00</td>
				      <td className="precioData">134,134.00</td>
				      <td className="montoData">0.002523</td>
				    </tr>
				  </tbody>
				</table>
		      </div>
		    </div>
				    

		)
	}
}


export default LastTrades;