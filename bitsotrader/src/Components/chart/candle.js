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
	handleToolTip(event){
		//var svgDocument = event.target.ownerDocument;
        //var tooltip = svgDocument.getElementById('tooltip');
        //var tooltip_bg = svgDocument.getElementById('tooltip_bg');

		//var svg = document.getElementById("BoxTrading")
		//console.log("mysvg",svg)
        //tooltip.setAttributeNS(null,"x",event.clientX+11 - svg.offsetLeft)
        //tooltip.setAttributeNS(null,"y",event.clientY+27 - svg.offsetTop)
        //tooltip.firstChild.data = "Prueba de texto de bitso";
        //tooltip.setAttributeNS(null,"visibility","visible");
        //length = tooltip.getComputedTextLength()
        //tooltip_bg.setAttributeNS(null,"width",length+8);
        //tooltip_bg.setAttributeNS(null,"x",event.clientX+8 - svg.offsetLeft)
        //tooltip_bg.setAttributeNS(null,"y",event.clientY+11 - svg.offsetTop)
        //tooltip_bg.setAttributeNS(null,"visibility","visibile")
	}

	HideTooltip(event){
		//var svgDocument = event.target.ownerDocument;
        //var tooltip = svgDocument.getElementById('tooltip');
        //var tooltip_bg = svgDocument.getElementById('tooltip_bg');

        //tooltip.setAttributeNS(null,"visibility","hidden");
        //tooltip_bg.setAttributeNS(null,"visibility","hidden");
      }

	render(){
		return (
			<g>
			<rect 
				className={this.props.color} x={this.props.rectX} y={this.props.rectY} 
				width={this.props.WidthCandle + ""} height={this.props.height} stroke-width="0.3" 
				onMouseMove={this.handleToolTip}
				onMouseOut={this.hideToolTip}
			/>

			<rect class="tooltip_bg" id="tooltip_bg" x="10" y="10" ry="2" width="25" height="15" />
			
            
            <line className={this.props.color}  x1={this.props.lineTopX1} y1={this.props.lineTopY1} x2={this.props.lineTopX2} y2={this.props.lineTopY2} stroke-width="0.25" />
            <line className={this.props.color} x1={this.props.lineBottomX1} y1={this.props.lineBottomY1} x2={this.props.lineBottomX2} y2={this.props.lineBottomY2} stroke-width="0.25" />
           
            </g>
			)
	}
}

export default Candle;