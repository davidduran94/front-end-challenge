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

	handleToolTip = (event, id, data1, data2) => {

		var svgDocument = event.target.ownerDocument;

		var tooltip1 = svgDocument.getElementById(id + "tt1");
		var tooltip2 = svgDocument.getElementById(id + "tt2");
		var tooltip3 = svgDocument.getElementById(id + "tt3");
		var tooltip4 = svgDocument.getElementById(id + "tt4");
		var tooltip5 = svgDocument.getElementById(id + "tt5");

        var tooltip_bg = svgDocument.getElementById(id + "bg");

		var svg = document.getElementById("chartContainerR");
		
		tooltip1.firstChild.data = "value:211698.91141059" 
		tooltip2.firstChild.data = "open:212826.06"
		tooltip3.firstChild.data = "low:196500"
		tooltip4.firstChild.data = "high:221021"
		tooltip5.firstChild.data = "close:200800"        

        if(data1+30 > 290 ) data1 = data1-30; //screen width ajusment
        if(data2+20 > 90 ) data2 = data2-20;  //screen high ajusment

        tooltip1.setAttributeNS(null,"x", data1+2);
        tooltip1.setAttributeNS(null,"y", data2+12);
        tooltip2.setAttributeNS(null,"x", data1);
        tooltip2.setAttributeNS(null,"y", data2+5);
        tooltip3.setAttributeNS(null,"x", data1);
        tooltip3.setAttributeNS(null,"y", data2+8);
        tooltip4.setAttributeNS(null,"x", data1);
        tooltip4.setAttributeNS(null,"y", data2+11);
        tooltip5.setAttributeNS(null,"x", data1);
        tooltip5.setAttributeNS(null,"y", data2+14);

        tooltip_bg.setAttributeNS(null,"x",  data1 );
        tooltip_bg.setAttributeNS(null,"y",  data2 );

        tooltip_bg.setAttributeNS(null,"visibility","visibile");
        
        //tooltip1.setAttributeNS(null,"visibility","visible");
        //tooltip2.setAttributeNS(null,"visibility","visible");
        //tooltip3.setAttributeNS(null,"visibility","visible");
        //tooltip4.setAttributeNS(null,"visibility","visible");
        //tooltip5.setAttributeNS(null,"visibility","visible");

	}

	hideToolTip = (event, id) => {
		var svgDocument = event.target.ownerDocument;

		var tooltip1 = svgDocument.getElementById(id + "tt1");
		var tooltip2 = svgDocument.getElementById(id + "tt2");
		var tooltip3 = svgDocument.getElementById(id + "tt3");
		var tooltip4 = svgDocument.getElementById(id + "tt4");
		var tooltip5 = svgDocument.getElementById(id + "tt5");

        var tooltip_bg = svgDocument.getElementById(id + "bg");

    	tooltip1.setAttributeNS(null,"visibility","hidden");
    	tooltip2.setAttributeNS(null,"visibility","hidden");
    	tooltip3.setAttributeNS(null,"visibility","hidden");
    	tooltip4.setAttributeNS(null,"visibility","hidden");
    	tooltip5.setAttributeNS(null,"visibility","hidden");

        tooltip_bg.setAttributeNS(null,"visibility","hidden");
    }



	render(){
		
		return (
			<g>

				<rect 
					className={this.props.color} x={this.props.rectX} y={this.props.rectY} 
					width={this.props.WidthCandle + ""} height={this.props.height} stroke-width="0.3" 
					onMouseMove={((e) => this.handleToolTip(e, this.props.id, this.props.lineBottomX1, this.props.lineBottomY1, this.props.data))}  onMouseOut={((e) => this.hideToolTip(e, this.props.id))}
				/>

	            <line className={this.props.color}  x1={this.props.lineTopX1} y1={this.props.lineTopY1} x2={this.props.lineTopX2} y2={this.props.lineTopY2} stroke-width="0.25" />
	            <line className={this.props.color} x1={this.props.lineBottomX1} y1={this.props.lineBottomY1} x2={this.props.lineBottomX2} y2={this.props.lineBottomY2} stroke-width="0.25" />
           		
	            <g >
	           		<rect className="tooltip_bg cls-4 volum" id={this.props.id + "bg"} x="20" y="20" rx="3" ry="3" width="30" height="20" stroke-width="0.4" visibility="hidden"/>
					<text className="tooltip" id={this.props.id + "tt1"} x="20" y="20" visibility="hidden">Tooltip</text>
					<text className="tooltip" id={this.props.id + "tt2"} x="20" y="20" visibility="hidden">Tooltip</text>
					<text className="tooltip" id={this.props.id + "tt3"} x="20" y="20" visibility="hidden">Tooltip</text>
					<text className="tooltip" id={this.props.id + "tt4"} x="20" y="20" visibility="hidden">Tooltip</text>
					<text className="tooltip" id={this.props.id + "tt5"} x="20" y="20" visibility="hidden">Tooltip</text>
				</g>

            </g>
			)
	}
}

export default Candle;