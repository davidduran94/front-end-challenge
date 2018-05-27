import React, {Component} from 'react';


/*
	Description: Component shows bitso's logo and sections of wallet, exchange, user and theme color change 
	Style:       maim.less
*/
class Header extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      theme: "dark",
	    };
	}

    componentWillMount() {
        this.setState({ theme: "dark" })
    }

	handleThemeChanger = (event, theme) => {
		if(theme == "dark"){
			
			document.getElementsByClassName("header")[0].style.backgroundColor = "#747f89"
			var elementArray = document.getElementsByClassName("candleCont")
			for (var i = 0; i < elementArray.length; ++i)
    			elementArray[i].style.fill = "white"

			document.getElementsByClassName("worspaceContainer")[0].style.backgroundColor = "white"
			document.getElementsByClassName("chartContainer")[0].style.backgroundColor = "white"
			document.getElementsByClassName("chartContainer")[1].style.backgroundColor = "white"
			document.getElementsByClassName("subheader")[0].style.backgroundColor = "#b0bac1"
			document.getElementsByClassName("divSelectorDark")[0].style.backgroundColor = "#b0bac1"
			document.getElementsByClassName("divSelectorDark")[1].style.backgroundColor = "#b0bac1"
			document.getElementsByClassName("divSelectorDark")[2].style.backgroundColor = "#b0bac1"
			document.getElementsByClassName("vertical")[0].style.color = "black"
			document.getElementsByClassName("sellContainer")[0].style.backgroundColor = "#cccccc"
			document.getElementsByClassName("lastTradesBox")[0].style.backgroundColor = "#cccccc"
			document.getElementsByClassName("buyContainer")[0].style.backgroundColor = "#cccccc"
			document.getElementsByClassName("merc")[0].style.backgroundColor = "#cccccc"
			document.getElementById("mySidenav").style.backgroundColor = "#cccccc"
			
			var elementArray = document.getElementsByClassName("navItem")
			for (var i = 0; i < elementArray.length; ++i)
    			elementArray[i].style.backgroundColor = "#cccccc"

			var elementArray = document.getElementsByClassName("greenLetter")
			for (var i = 0; i < elementArray.length; ++i)
    			elementArray[i].style.color = "#466830"
			
			var elementArray = document.getElementsByClassName("lightLetter")
			for (var i = 0; i < elementArray.length; ++i)
    			elementArray[i].style.color  = "black"
		
			this.setState({ theme: "white" })
		}
		else {
			this.setState({ theme: "dark" })
		}	
	}

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
			      <div id="wall" className="col16 dataH"> 
			      	<p>Wallet</p> 
			      	<a href="#" className="arrowContainer"> <img className="arrowDown" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
			      </div>
			      <div  id="exchange" className="col16 dataH"> 
			      	<p>Exchange</p> 
			      	<a href="#" className="arrowContainer"> <img className="arrowDown" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
			      </div>
			      <div id="help" className="col16 dataH"> <p>Ayuda</p> </div>
			      <div id="usu" className="col16 dataH"> 
			      	<div className="userPhotoCircle"> 
			      		<div className="userPhotoCont"> <div className="userPhoto"> </div> </div>
			      	</div>
			      	<p>Usuario</p> 
			      	<a href="#" className="arrowContainer"> <img className="arrowDown" src="/dist/Assets/Images/SVG/icon_dropdown.svg" /> </a>
			      </div>
			      <div className="col16 dataH"> 
			      	<label className="switch">
					  <input type="checkbox" onClick={((e) => this.handleThemeChanger(e, this.state.theme))} />
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