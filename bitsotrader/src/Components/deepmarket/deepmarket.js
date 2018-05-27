import React, {Component} from 'react';



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
    	 var width = this.CalculateCandlesWidth(75);
        this.setState({ zoom: this.GetZoom(), WidthCandle: width  })
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