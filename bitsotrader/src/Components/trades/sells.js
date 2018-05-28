import React, {Component} from 'react';


/*
	Description: Component that shows the table of all sell positions
	Style:       trades.less
*/
class Sells extends Component {


	render(){
		return (
	<div className="col50">
		<div className="sellContainer row">
	  		<div className="sellTitle">
	  			<p>274,140.00 Ask MXN</p>
				<p>Posturas de venta</p>
	  		</div>
	  	</div>

	  	<div className="lastTradesTableC">
			<table className="tableMData">
			  <thead>
			    <tr>
				    <th className="lightLetter"><span className="darkLetter">{this.props.currencyPair.split("_")[1]}</span> precio</th>
				    <th className="lightLetter"><span className="darkLetter">{this.props.currencyPair.split("_")[1]}</span> valor</th>
					<th className="lightLetter"><span className="darkLetter">{this.props.currencyPair.split("_")[0]}</span> monto</th>
				    <th className="lightLetter">sum</th>
			        <th className="lightLetter"></th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr className="hovDataRowR">
			      <td className="precioDataRed">134,134.00</td>
			      <td className="horaData">12:00:00</td> 
			      <td className="montoData">0.002523</td>
			      <td className="montoData">0.002523</td>
			      <td className="horaData"> <div className="barRed"></div> </td>
	    		</tr>
	    		<tr className="hovDataRowR">
			      <td className="precioDataRed">134,134.00</td>
			      <td className="horaData">12:00:00</td>
			      <td className="montoData">0.002523</td>
			      <td className="montoData">0.002523</td>
			      <td className="horaData"> <div className="barRed"></div> </td>
	    		</tr>
	    		<tr className="hovDataRowR">
			      <td className="precioDataRed">134,134.00</td>
			      <td className="horaData">12:00:00</td>
			      <td className="montoData">0.002523</td>
			      <td className="montoData">0.002523</td>
			      <td className="horaData"> <div className="barRed"></div> </td>
	    		</tr>
	    		<tr className="hovDataRowR">
			      <td className="precioDataRed">134,134.00</td>
			      <td className="horaData">12:00:00</td>
			      <td className="montoData">0.002523</td>
			      <td className="montoData">0.002523</td>
			      <td className="horaData"> <div className="barRed"></div> </td>
	    		</tr>
	    		<tr className="hovDataRowR">
			      <td className="precioDataRed">134,134.00</td>
			      <td className="horaData">12:00:00</td>
			      <td className="montoData">0.002523</td>
			      <td className="montoData">0.002523</td>
			      <td className="horaData"> <div className="barRed"></div> </td>
	    		</tr>
	    		<tr className="hovDataRowR">
			      <td className="precioDataRed">134,134.00</td>
			      <td className="horaData">12:00:00</td>
			      <td className="montoData">0.002523</td>
			      <td className="montoData">0.002523</td>
			      <td className="horaData"> <div className="barRed"></div> </td>
	    		</tr>
	    		<tr className="hovDataRowR"> 
			      <td className="precioDataRed">134,134.00</td>
			      <td className="horaData">12:00:00</td>
			      <td className="montoData">0.002523</td>
			      <td className="montoData">0.002523</td>
			      <td className="horaData"> <div className="barRed"></div> </td>
	    		</tr>

	    	   </tbody>
	    	 </table>
	   	</div>
	</div>
	   	)
	}
}

export default Sells;