import React, {Component} from 'react';

import VolumeBar from '../chart/volumeBar.js';
import CandleContainer from '../chart/candleContainer.js';
import Candle from '../chart/candle.js';

/*
	Description: Component that shows the information of the hole candle chart with events, 
				 calculation of the high, with and color of the candles 

	Style:       trades.less
*/
class Chart extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      zoom: 120,
	      WidthCandle : "2.88"
	    };
	}

	componentWillMount() {
    	var width = this.CalculateCandlesWidth(this.props.zoom);
        this.setState({ zoom: this.props.zoom, WidthCandle: width  })
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
		return this.props.zoom; 
	}

	moreZoom() {
    	var width = this.CalculateCandlesWidth(this.state.zoom + 10);
        this.setState({ zoom: this.state.zoom + 10, WidthCandle: width  })
    }
    lessZoom() {
    	var width = this.CalculateCandlesWidth(this.state.zoom - 10);
        this.setState({ zoom: this.state.zoom - 10, WidthCandle: width  })
    }

	/*
		Zoom is calculated based on the how many candles will be displayed 
		If there will be 75 candles the zoom si 100%
		Other side if it would be more candles the zoom is higher
	*/
	CalculateCandlesWidth(zoom){
		if(this.props.data.length > zoom){
			const ChartSize = 290 - zoom ;
			return ChartSize / zoom;
		}else{
			const ChartSize = 290 - zoom ;
			return ChartSize / zoom;
		}
	}

	/*Calculate the color of the bar with the close an open values*/
	calculateColor(currentCandle){
		if( currentCandle.open - currentCandle.close < 0){
			return "greenCandleBar"
		}else{
			return "redCandleBar"
		}
	}



	GetCandles(){
		const result = [];
		var i = 0;

		/*  Fix when zoom translate of chart feature is completed
		var DataToShow = [];
		if(this.props.Zoom < this.props.data.length ){
			i= this.props.data.length - this.props.Zoom; 
		}
		*/

		for (i ; i<this.props.data.length; i++) {
			//if(this.props.data.length > this.state.zoom){ i+=this.state.zoom }
			//if(i > this.props.data.length){return result}
			var rectY = 0
			var unity = (85 / (Math.abs(this.props.MinsMaxs.MaxPrice - this.props.MinsMaxs.MinPrice )))
			var lby2 = 85;
			if( this.props.data[i].close - this.props.data[i].open < 0){
				rectY = ( (this.props.data[i].close - this.props.MinsMaxs.MinPrice) *  unity  )
				lby2 = (rectY + ( unity * Math.abs(this.props.data[i].low - this.props.data[i].open))  ) 
			}else{
				rectY = ( (this.props.data[i].open - this.props.MinsMaxs.MinPrice) *  (unity) )
				lby2 = (rectY + ( unity * Math.abs(this.props.data[i].low - this.props.data[i].close))  ) 
			}


			const actual = {
				id: "candle" + i,
				rectX : 0.5 + ((1+this.state.WidthCandle)*i) + "",
				rectY:  rectY + 7 + "" ,
				width: this.state.WidthCandle + "",
				height: ( unity * Math.abs(this.props.data[i].open - this.props.data[i].close) ) + "" ,
				
				lineTopX1: 0.5 + ((1+this.state.WidthCandle)*i) + ((0.5)*(this.state.WidthCandle)) + "",
				lineTopX2: 0.5 + ((1+this.state.WidthCandle)*i) + ((0.5)*(this.state.WidthCandle)) + "",
				lineTopY1: ( (rectY -  ( unity * Math.abs(this.props.data[i].high - this.props.data[i].open))  ))  + 7 + "", 
				lineTopY2: rectY + 7 +"",

				lineBottomX1: 0.5 + ((1+this.state.WidthCandle)*i) + ((0.5)*(this.state.WidthCandle)) + "",
				lineBottomX2: 0.5 + ((1+this.state.WidthCandle)*i) + ((0.5)*(this.state.WidthCandle)) + "",
				lineBottomY1: rectY + ( unity * Math.abs(this.props.data[i].open - this.props.data[i].close) ) + 7 +"", //  
				lineBottomY2: lby2 + 7 +  "", // 

				color : this.calculateColor(this.props.data[i])
			}
			result.push(actual)
		}
		return result;
	};


	GetContainers(){
		const result = [];
		const width = this.state.WidthCandle;
		for (var i = 0; i<this.props.data.length; i++) {
			const actual = { id: 0.5 + ((1+this.state.WidthCandle)*i) + "", width: width+"" }
			result.push(actual)
		}
		return result
	}



	/*
	Calculate position and high volume bar from 0 to the max value
	*/
	GetVolumes(){
		const result = [];
		
		for (var i = 0; i<this.props.data.length; i++) {
			const actual = { 
				id : i,
				x: 0.5 + ((1+this.state.WidthCandle)*i) + "",
				y: 0,//(0 + ((3 / Math.abs(this.props.MinsMaxs.MaxVol) ) * Math.abs(this.props.data[i].volume) ) )+ "",
				width: this.state.WidthCandle,
				height:  ((3 / Math.abs(this.props.MinsMaxs.MaxVol) ) * Math.abs(this.props.data[i].volume) ) + ""
			}
			result.push(actual)
		}
		return result
	}



	render(){
		const Candles = this.GetCandles()
		const Containers = this.GetContainers()
		const Volumes = this.GetVolumes()
		return (
				<div className="chartContainer" id="chartContainerR">
					<div className="rangeTime">
						<p>1 Abril</p>
						<p>1 Mayo</p>
						<p>1 Junio</p>
						<p>1 Julio</p>
						<p>1 Agos</p>
						<p>1 Sept</p>
					</div>

					<div className="graph">
					
			        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 90" id="BoxTrading" transform="scale(1 -1) translate(0 -200)">
			            <defs>
			                
			            </defs>
			            <title>icon_candles</title>
			                <g  id="Capa_2" data-name="Capa 2">

			                    <g  id="Capa_0-2" data-name="Capa 0">
			                           
			                            {
			                        		Containers.map( (item) => {
			                        			return <CandleContainer id={item.id} width={item.width} /> 
			                            	}
			                            	)
			                            }

			                            
			                            <line className="dash" strokeDasharray="1, 0.5" x1="0" y1="0" x2="290" y2="0"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="0" y1="22.5" x2="290" y2="22.5"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="0" y1="45" x2="290" y2="45"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="0" y1="67.5" x2="290" y2="67.5"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="0" y1="90" x2="290" y2="90"  ></line>

			                            <line className="dash" strokeDasharray="1, 0.5" x1="0" y1="0" x2="0" y2="90"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="58" y1="0" x2="58" y2="90"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="116" y1="0" x2="116" y2="90"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="174" y1="0" x2="174" y2="90"  ></line>
			                            <line className="dash" strokeDasharray="1, 0.5" x1="232" y1="0" x2="232" y2="90"  ></line>
			                    </g>

			                    <g  id="Capa_1-2" data-name="Capa 1">			                        

			                        {
			                        	Candles.map( (item) => {
			                        		return <Candle WidthCandle = {this.state.WidthCandle + ""} 
							                        		id = {item.id}
							                        		rectX = {item.rectX}
															rectY = {item.rectY}
															width= {item.width}
															height= {item.height}
															lineTopX1= {item.lineTopX1}
															lineTopX2= {item.lineTopX2}
															lineTopY1= {item.lineTopY1}
															lineTopY2= {item.lineTopY2}
															lineBottomX1= {item.lineBottomX1}
															lineBottomX2= {item.lineBottomX2}
															lineBottomY1= {item.lineBottomY1}
															lineBottomY2= {item.lineBottomY2}
															data = {this.props.data}
															color = {item.color}
			                        		/>
			                        	})
			                    	}
                      

			                        {
			                        	Volumes.map( (item) => {
			                        		return <VolumeBar 
			                        				width = {item.width}
			                        				x = {item.x}
			                        				y = {item.y}
			                        				height = {item.height}
			                        			/>
			                        	})
			                        }
			                        
			                    </g>
			                </g>
			        </svg>

			        <div className="rangePrice">
						<p>100k</p>
						<p>100k</p> 
						<p>100k</p>
						<p>100k</p>
						<p></p>
					</div>

			        </div>
			    </div>

			)
	}
}

export default Chart;