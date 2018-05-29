import React, {Component} from 'react';


/*
	Description: Component that shows the table of all sell positions
	Style:       trades.less
*/
class Sells extends Component {
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
    		<tr className="hovDataRowR">
		      <td className="precioDataRed">{actual.price}</td>
		      <td className="horaData">{actual.price}</td> 
		      <td className="montoData">{actual.amount}</td>
		      <td className="montoData">0.0245</td>
		      <td className="horaData"> <div className="barRed"></div> </td>
    		</tr>
		);		     

		return (
			<div className="col50">
				<div className="sellContainer row">
			  		<div className="sellTitle">
			  			<p>{this.props.data[0].price + "Ask MXN"} </p>
						<p>Posturas de venta</p>
			  		</div>
			  	</div>

			  	<div className="lastTradesTableC lastTradesTableD">
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
					    
					    {listItems}

			    	   </tbody>
			    	 </table>
			   	</div>
			</div>
	   	)
	}
}

export default Sells;