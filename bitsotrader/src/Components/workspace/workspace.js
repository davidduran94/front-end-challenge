import React, {Component} from 'react';
import stilos from '../../Styles/dist/main.css';

class Workspace extends Component {

	render(){
		return (
			<div className={stilos.worspaceContainer}>
				<div id="header" className={stilos.header}> 
					<div className={stilos.container}>
					  <div className={stilos.row}>
					    
					    <div className="col20 logoContainer">
					      <img src="/dist/Assets/Images/2x/bitso_logo@2x.png" />
					      <h2>EXCHANGE</h2>
					    </div>

					    <div className="col25 space">
					      <p className="greenLetter"></p>
					    </div>

					    <div className="col55 dataHeaderContainer">
					      <div className="col16 dataH"> <p>1 BTC = 158,000.00 MXN</p> </div>
					      <div className="col16 dataH"> <p>Wallet</p> </div>
					      <div className="col16 dataH"> <p>Exchange</p> </div>
					      <div className="col16 dataH"> <p>Ayuda</p> </div>
					      <div className="col16 dataH"> <p>Usuario</p> </div>
					      <div className="col16 dataH"> <p>Luna</p> </div>
					    </div>
					    
					  </div>
					</div>
				</div>


				<div id="subheader" className={stilos.subheader}> </div>


				<div className={stilos.container}>
				  <div className={stilos.row}>
				    <div className={stilos.col20}>
				      One of three columns
				    </div>
				    <div className={stilos.col75}>
				      <p className="greenLetter">One of three columns</p>
				    </div>
				    <div className={stilos.col5}>
				      <p className="redLetter">One of three columns</p>
				    </div>
				  </div>
				</div>


			</div>
		)
	}

}

 export default Workspace;