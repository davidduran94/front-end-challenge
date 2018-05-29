import React from 'react';
import ReactDom from 'react-dom';
import Workspace from './src/Components/workspace/workspace.js'
import data from './src/Components/chart/api.json';
import { BrowserRouter as Router, Route } from 'react-router-dom'


const app = document.getElementById('container'); 

var url = window.location.href;
var arr = url.split("/");
var currency = arr[arr.length-3];
var period = arr[arr.length-2];
var zoom = arr[arr.length-1];

if(zoom<10){
	zoom = 15;
}

if(zoom == "" | currency=="" | period==""  ){
	currency = "btc_mxn";
	period = "1month";
	zoom = 75;
}



ReactDom.render(<Workspace currencyPair={currency} period={period} theme='dark' zoom={zoom} />, app );