import React, {Component} from 'react';
//import stilos from '../../Styles/dist/main.css';

class Workspace extends Component {

	render(){
		return (
			<div className="worspaceContainer">
				<div id="header" className="header"> 
					<div className="container">
					  <div className="row">
					    
					    <div className="col20 logoContainer">
					      <img src="/dist/Assets/Images/2x/bitso_logo@2x.png" />
					      <div className="lineRight"></div>
					      <h2>EXCHANGE</h2>
					    </div>

					    <div className="col25 space">
					      <p className="greenLetter"></p>
					    </div>

					    <div className="dataHeaderContainer">
					      <div className="col16 dataH lineRight"> <p>1 BTC = 158,000.00 MXN</p> </div>
					      <div className="col16 dataH"> 
					      	<p>Wallet</p> 
					      	<a href="#" className="arrowContainer"> <img className="arrowDown" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
					      </div>
					      <div className="col16 dataH"> 
					      	<p>Exchange</p> 
					      	<a href="#" className="arrowContainer"> <img className="arrowDown" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
					      </div>
					      <div className="col16 dataH"> <p>Ayuda</p> </div>
					      <div className="col16 dataH"> <p>Usuario</p> </div>
					      <div className="col16 dataH"> <p>Luna</p> </div>
					    </div>
					    
					  </div>
					</div>
				</div>


				<div id="subheader" className="subheader"> 
					      <div className="col5 dataSH"> 
					      	<p className="greenLetter letterBig1" > BTC/MXN </p> 
					      	<a href="#" className="arrowContainer1"> <img className="arrowDown" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
					      </div>
					      <div className="col16 dataSH"> 
					      	<p className="darkLetter">Volumen 24 hrs.</p>
					      	<p className="lightLetter">170.5405818 BTC</p> 
					      </div>
					      <div className="col16 dataSH"> 
					        <p className="darkLetter">Max.</p>
					      	<p className="lightLetter">304,934.23 MXN</p>
					      </div>
					      <div className="col16 dataSH"> 
					      	<p className="darkLetter">Min.</p>
					      	<p className="lightLetter">274,934.23 MXN</p>
					      </div>
					      <div className="col16 dataSH"> 
					      	<p className="darkLetter">Variación.</p>
					      	<p className="lightLetter">+4,061.68 MXN</p>
					      </div>


				</div>


				<div className="container">
				  <div className="row">
				    <div className="col20">
				    <div className="containerLastTrades">
				      <div className="lastTradesBox">últimos trades</div>
				      <div className="lastTradesTableC">
						<table className="tableLTData">
						  <thead>
						    <tr>
						      <th className="lightLetter">hora</th>
						      <th className="lightLetter"><span className="darkLetter">mxn</span> precio</th>
						      <th className="lightLetter"><span className="darkLetter">btc</span> monto</th>
						    </tr>
						  </thead>
						  <tbody>
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
				    </div>
				    
				    <div className="col75">
				      <div className="settingsChart row">
				      	<p>Periodo</p>
				      </div>
				      <div className="candleChartContainer row">
				      	<p className="greenLetter">One of three columns</p>
				      </div>
				      <div className="sellBuyContainer row">
				      	<div className="col50">
					      	<div className="buyContainer  row">
					      		
					      		<div className="buyTitle">
					      			<p>Posturas de Compra</p>
					      			<p>MXN Bid 319,140.00</p>
					      		</div>

					      	</div>

				      		<div className="lastTradesTableC">
								<table className="tableLTData">
								  <thead>
								    <tr>
								      <th className="lightLetter"></th>
								      <th className="lightLetter">sum</th>
								      <th className="lightLetter"><span className="darkLetter">btc</span> monto</th>
								      <th className="lightLetter"><span className="darkLetter">mxn</span> valor</th>
								      <th className="lightLetter"><span className="darkLetter">mxn</span> precio</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr>
								      <td className="horaData"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr>
								      <td className="horaData"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr>
								      <td className="horaData"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr>
								      <td className="horaData"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr>
								      <td className="horaData"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr>
								      <td className="horaData"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr>
								      <td className="horaData"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    		<tr>
								      <td className="horaData"> <div className="barGreen"></div> </td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="precioData">134,134.00</td>
						    		</tr>
						    	   </tbody>
						    	 </table>
						   	</div>

						</div>
				      	

						<div className="col50">
					      	<div className="sellContainer row">
					      		<div className="sellTitle">
					      			<p>274,140.00 Ask MXN</p>
									<p>Posturas de venta</p>
					      		</div>
					      	</div>

					      	<div className="lastTradesTableC">
								<table className="tableLTData">
								  <thead>
								    <tr>
									    <th className="lightLetter"><span className="darkLetter">mxn</span> precio</th>
									    <th className="lightLetter"><span className="darkLetter">mxn</span> valor</th>
										<th className="lightLetter"><span className="darkLetter">btc</span> monto</th>
									    <th className="lightLetter">sum</th>
								        <th className="lightLetter"></th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr>
								      <td className="precioDataRed">134,134.00</td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="horaData"> <div className="barRed"></div> </td>
						    		</tr>
						    		<tr>
								      <td className="precioDataRed">134,134.00</td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="horaData"> <div className="barRed"></div> </td>
						    		</tr>
						    		<tr>
								      <td className="precioDataRed">134,134.00</td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="horaData"> <div className="barRed"></div> </td>
						    		</tr>
						    		<tr>
								      <td className="precioDataRed">134,134.00</td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="horaData"> <div className="barRed"></div> </td>
						    		</tr>
						    		<tr>
								      <td className="precioDataRed">134,134.00</td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="horaData"> <div className="barRed"></div> </td>
						    		</tr>
						    		<tr>
								      <td className="precioDataRed">134,134.00</td>
								      <td className="horaData">12:00:00</td>
								      <td className="montoData">0.002523</td>
								      <td className="montoData">0.002523</td>
								      <td className="horaData"> <div className="barRed"></div> </td>
						    		</tr>
						    		<tr>
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