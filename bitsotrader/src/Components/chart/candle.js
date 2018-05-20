import React, {Component} from 'react';


class Candle extends Component {
	state = {
			rectX : "0.5",
			rectY: "2.5",
			width: "2.5",
			height: "10",
			lineTopX1: "1.75",
			lineTopX2: "1.75",
			lineTopY1: "2.5",
			lineTopY2: "0.5",
			lineBottomX1: "1.75",
			lineBottomX2: "1.75",
			lineBottomY1: "80",
			lineBottomY2: "82"
	}
	

	/*Eventos*/
	handleMouseOver(event){
		event.target.style.fill= 'black'
	}
	handleMouseOut(event){
		event.target.style.fill='rgb(25,30,35)'
	}

	render(){
		return (
			<g>
			<rect className={this.props.color} x={this.props.rectX} y={this.props.rectY} width={this.props.WidthCandle + ""} height={this.props.height} stroke-width="0.3" />
             
            <line className="cls-3 candle" x1={this.props.lineTopX1} y1={this.props.lineTopY1} x2={this.props.WidthCandle} y2={this.props.lineBottomY2} />
            <line className="cls-3 candle" x1={this.props.lineBottomX1} y1={this.props.lineBottomY1} x2={this.props.lineBottomX2} y2={this.props.lineBottomY2} />
           
            </g>
			)
	}
}

export default Candle;