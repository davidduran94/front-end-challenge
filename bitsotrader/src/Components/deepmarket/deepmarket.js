import React, {Component} from 'react';


/*
	Description: Component that shows the information about spread 
	Style:       deepmarket.less
*/

class DeepMarket extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      zoom: 75,
	      WidthCandle : "2.88"
	    };
	}

	componentWillMount() {
    	 
        this.setState({ zoom: this.GetZoom()  })
    }

	/*Eventos*/
	handleMouseOver(event){
		event.target.setAttribute('stroke-width', '0.4');
	}
	handleMouseOut(event){
		event.target.setAttribute('stroke-width', '0.1');
	}	

	/*
		When the zoom has changed we reecalculate the position of the hole elements
	*/
	GetZoom(){
		return this.state.zoom; 
	}

	moreZoom() {
    	var width = this.CalculateCandlesWidth(this.state.zoom + 10);
        this.setState({ zoom: this.state.zoom + 10, WidthCandle: width  })
    }
    lessZoom() {
    	var width = this.CalculateCandlesWidth(this.state.zoom - 10);
        this.setState({ zoom: this.state.zoom - 10, WidthCandle: width  })
    }



	render(){
		
		return (
				<div className="chartContainer" id="deepContainerR">
					<div className="rangeTime">
						<p>179.50</p>
						<p>179.50</p>
						<p>179.50</p>
						<p>179.50</p>
						<p>179.50</p>
						<p>179.50</p>
						<p>179.50</p>
						<p>179.50</p>
					</div>

					<div className="graph">
					
			        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 90" id="BoxTrading" transform="scale(1 -1) translate(0 -200)">
			            <defs>
			                
			            </defs>
			            <title>icon_candles</title>
			                <g  id="Capa_2" data-name="Capa 2">

			                    <g  id="Capa_0-2" data-name="Capa 0">
			                            
			                            <line className="dash" strokeDasharray="1, 0.5" x1="1" y1="0" x2="1" y2="90"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="41" y1="0" x2="41" y2="90"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="82" y1="0" x2="82" y2="90"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="123" y1="0" x2="123" y2="90"  ></line>
			                            
			                            <line className="dash" strokeDasharray="1, 0.5" x1="164" y1="0" x2="164" y2="90"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="205" y1="0" x2="205" y2="90"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="246" y1="0" x2="246" y2="90"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="290" y1="0" x2="290" y2="90"  ></line>

			                            <line className="dash" strokeDasharray="1, 0.5" x1="1" y1="1" x2="290" y2="1"  ></line>
			                    </g>

			                    <g  id="Capa_1-2" data-name="Capa 1">			                        

			                    	<polygon className="redCandleBar" strokeWidth="0.3"  points="0 340.5 0 340.0969152736737 0 340.0969152736737 0 340.0969152736737 0.038804197182464376 340.0969152736737 0.038804197182464376 339.3905444314807 1.4600079192143278 339.3905444314807 1.4600079192143278 309.4146998935422 95.49712928133343 309.4146998935422 95.49712928133343 308.10175681961584 96.75826568995409 308.10175681961584 96.75826568995409 307.43385247924914 144.78331023559352 307.43385247924914 144.78331023559352 307.310765581576 193.28855672143825 307.310765581576 193.28855672143825 307.26768516739037 207.35022767768015 307.26768516739037 207.35022767768015 7.509239788005857 207.35507820233326 7.509239788005857 207.35507820233326 5.799711345210994 240.33864581270768 5.799711345210994 240.33864581270768 5.176981865680716 297.8658681449224 5.176981865680716 297.8658681449224 4.930808070334422 314.5516729360502 4.930808070334422 314.5516729360502 0.908268434142883 333.95377153038805 0.908268434142883 333.95377153038805 0.8605354583120857 338.80429617897255 0.8605354583120857 338.80429617897255 0.7682202850571684 363.0569194218949 0.7682202850571684 363.0569194218949 0.15278579669131886 387.3095426648173 0.15278579669131886 387.3095426648173 0.14011646231381292 532.8252821223516 0.14011646231381292 532.8252821223516 0.047801289058952534 587.6362106513561 0.047801289058952534 587.6362106513561 0.01926974617833821 588 0.01926974617833821 588 0.009634873089169105 588 0.009634873089169105 588 0 588 340.5"></polygon>

			                    	<text y="60" transform="rotate(180 50 50) scale(-1 1)">
			                    		<tspan x="44" textAnchor="middle" className="text">$3,895.10 MXN</tspan>
			                    		<tspan x="44" textAnchor="middle" className="text" dy="8">0.28% spread</tspan>
			                    	</text>

			                    	<polygon className="greenCandleBar" strokeWidth="0.3" points="0 340.5 0 0 0 0 0 0 1.7724746444053217 0 1.7724746444053217 0.4681355988232099 47.93066850881938 0.4681355988232099 47.93066850881938 0.546504933715596 47.939900147600866 0.546504933715596 47.939900147600866 1.7802604275495355 47.97682670267305 1.7802604275495355 47.97682670267305 221.10956705013135 48.0322165353082 221.10956705013135 48.0322165353082 222.52622395224807 140.11781329481425 222.52622395224807 140.11781329481425 224.32924281015366 324.8798316953038 224.32924281015366 324.8798316953038 225.04973130579725 324.8798316953038 225.04973130579725 324.8798316953038 225.12790971123832 324.8798316953038 225.12790971123832 324.8798316953038 315.18897166668677 424.5815304424381 315.18897166668677 424.5815304424381 326.5094661317521 463.3544132885459 326.5094661317521 463.3544132885459 326.52821504363 465.75463936950086 326.52821504363 465.75463936950086 326.6219316840902 539.053851226185 326.6219316840902 539.053851226185 326.88923111475276 541.8233428580498 326.88923111475276 541.8233428580498 326.9891385526118 541.8233428580498 326.9891385526118 541.8233428580498 327.0399906306343 568.7058749646803 327.0399906306343 568.7058749646803 327.0908427086568 587.0952994002747 327.0908427086568 587.0952994002747 328.58911294511756 587.9907683612454 328.58911294511756 587.9907683612454 340.2503237179409 588 340.2503237179409 588 340.4375804791799 588 340.5"></polygon>	

			                       			                        
			                    </g>
			                </g>
			        </svg>

			        </div>
			    </div>

			)
	}
}

export default DeepMarket;