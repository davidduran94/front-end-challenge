import React, {Component} from 'react';

import VolumeBar from '../chart/volumeBar.js';
import CandleContainer from '../chart/candleContainer.js';
import Candle from '../chart/candle.js';


class Chart extends Component {
	constructor(props){
		super(props);
		//this.ha
	}

	/*Eventos*/
	handleMouseOver(event){
		event.target.setAttribute('stroke-width', '0.4');
	}
	handleMouseOut(event){
		event.target.setAttribute('stroke-width', '0.1');
	}	


	/*Calculate the color of the bar with the close an open values*/
	calculateColor(currentCandle){
		if( currentCandle.close - currentCandle.open < 0){
			return "greenCandleBar"
		}else{
			return "redCandleBar"
		}
	}



	GetCandles(){
		const result = [];
		
		for (var i = 0; i<this.props.data.length; i++) {
			const actual = {
				rectX : 0.5 + ((1+this.props.WidthCandle)*i) + "",
				rectY:  ( (90 / (this.props.MinsMaxs.MaxPrice - this.props.MinsMaxs.MinPrice) ) * Math.abs(this.props.data[i].open - this.props.MinsMaxs.MinPrice) ) + "" ,
				width: this.props.WidthCandle + "",
				height: ( (90 / (this.props.MinsMaxs.MaxPrice - this.props.MinsMaxs.MinPrice )) * Math.abs(this.props.data[i].close - this.props.data[i].open ) )  + "",
				
				lineTopX1: "0.5",
				lineTopX2: "1.75",
				lineTopY1: "2.5",
				lineTopY2: "0.5",

				lineBottomX1: "1.75",
				lineBottomX2: "1.75",
				lineBottomY1: "80",
				lineBottomY2: "82",

				color : this.calculateColor(this.props.data[i] )
			}
			result.push(actual)
		}
		return result;
	};


	GetContainers(){
		const result = [];
		
		for (var i = 0; i<this.props.data.length; i++) {
			const actual = { id: 0.5 + ((1+this.props.WidthCandle)*i) + "" }
			result.push(actual)
		}
		return result
	}




	GetVolumes(){
		const result = [];
		
		for (var i = 0; i<this.props.data.length; i++) {
			const actual = { 
				id : i,
				x: 0.5 + ((1+this.props.WidthCandle)*i) + "",
				y: (90 - ((3 / Math.abs(this.props.MinsMaxs.MaxVol) ) * Math.abs(this.props.data[i].volume) ) )+ "",
				width: this.props.WidthCandle,
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
				<div className="chartContainer">

			        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 90" id="BoxTrading">
			            <defs>
			                
			            </defs>
			            <title>icon_candles</title>
			                <g  id="Capa_2" data-name="Capa 2">

			                    <g  id="Capa_0-2" data-name="Capa 0">
			                           
			                            {
			                        		Containers.map( (item) => {
			                        			return <CandleContainer id={item.id} /> 
			                            	}
			                            	)
			                            }

			                            
			                            <line className="dash" stroke-dasharray="1, 0.5" x1="0" y1="1" x2="290" y2="1"  ></line>
			                            <line className="dash" stroke-dasharray="1, 0.5" x1="0" y1="22.5" x2="290" y2="22.5"  ></line>
			                            <line className="dash" stroke-dasharray="1, 0.5" x1="0" y1="45" x2="290" y2="45"  ></line>
			                            <line className="dash" stroke-dasharray="1, 0.5" x1="0" y1="67.5" x2="290" y2="67.5"  ></line>
			                            <line className="dash" stroke-dasharray="1, 0.5" x1="58" y1="0" x2="58" y2="90"  ></line>
			                            <line className="dash" stroke-dasharray="1, 0.5" x1="116" y1="0" x2="116" y2="90"  ></line>
			                            <line className="dash" stroke-dasharray="1, 0.5" x1="174" y1="0" x2="174" y2="90"  ></line>
			                            <line className="dash" stroke-dasharray="1, 0.5" x1="232" y1="0" x2="232" y2="90"  ></line>
			                    </g>

			                    <g  id="Capa_1-2" data-name="Capa 1">			                        

			                        {
			                        	Candles.map( (item) => {
			                        		return <Candle WidthCandle = {this.props.WidthCandle + ""} 
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
			    </div>

			)
	}
}

export default Chart;