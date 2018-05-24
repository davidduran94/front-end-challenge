import React, {Component} from 'react';

class Header extends Component {

	render(){
		return (

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
			      <div className="col16 dataH"> 
			      	<div className="userPhotoCircle"> 
			      		<div className="userPhotoCont"> <div className="userPhoto"> </div> </div>
			      	</div>
			      	<p>Usuario</p> 
			      	<a href="#" className="arrowContainer"> <img className="arrowDown" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
			      </div>
			      <div className="col16 dataH"> 
			      	<label className="switch">
					  <input type="checkbox" />
					  <span className="slider round"></span>
					</label>
			      </div>
			    </div>
			    
			  </div>
			</div>
		</div>

		)
	}
}
export default Header;