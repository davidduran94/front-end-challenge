import React, {Component} from 'react';

/*
	Description: Component that shows the table of all buy positions
	Style:       trades.less
*/
class Buys extends Component {
	render(){
		return (


				<div className="col50">

					      	<div className="buyContainer  row">
					      		
					      		<div className="buyTitle">
					      			<p>Posturas de Compra</p>
					      			<p>MXN Bid 319,140.00</p>
					      		</div>

					      	</div>

				      		<div className="lastTradesTableC">
								<table className="tableMData">
								  <thead>
								    <tr>
								      <th className="lightLetter"></th>
								      <th className="lightLetter">sum</th>
								      <th className="lightLetter"><span className="darkLetter">{this.props.currencyPair.split("_")[0]}</span> monto</th>
								      <th className="lightLetter"><span className="darkLetter">{this.props.currencyPair.split("_")[1]}</span> valor</th>
								      <th className="lightLetter"><span className="darkLetter">{this.props.currencyPair.split("_")[1]}</span> precio</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr className="hovDataRowG">
								      <td className="barDataG"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr className="hovDataRowG">
								      <td className="barDataG"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr className="hovDataRowG">
								      <td className="barDataG"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr className="hovDataRowG">
								      <td className="barDataG"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr className="hovDataRowG">
								      <td className="barDataG"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr className="hovDataRowG">
								      <td className="barDataG"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr className="hovDataRowG">
								      <td className="barDataG"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		
						    	   </tbody>
						    	 </table>
						   	</div>

						</div>
			)

	}
}

export default Buys;