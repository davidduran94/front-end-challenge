import React, {Component} from 'react';

/*
	Description: Component that shows the table of all buy positions
	Style:       trades.less
*/
class Buys extends Component {
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

			<tr className="hovDataRowG">
		      <td className="barDataG"> <div className="barGreen barSize"></div> </td>
		      <td className="horaData">1.09</td>
		      <td className="montoData">{actual.amount}</td>
		      <td className="montoData">{actual.price}</td>
		      <td className="precioData">{actual.price}</td>
    		</tr>
		);		     

		return (

				<div className="col50">

					      	<div className="buyContainer  row">
					      		
					      		<div className="buyTitle">
					      			<p>Posturas de Compra</p>
					      			<p>
					      			{"MXN Bid" + this.props.data[0].price}</p>
					      		</div>

					      	</div>

				      		<div className="lastTradesTableC lastTradesTableD">
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
								    
								  	{listItems}

						    	   </tbody>
						    	 </table>
						   	</div>

						</div>
			)

	}
}

export default Buys;