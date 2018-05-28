import React from 'react';
import ReactDom from 'react-dom';
import Workspace from './src/Components/workspace/workspace.js'
import data from './src/Components/chart/api.json';
import { BrowserRouter as Router, Route } from 'react-router-dom'


const app = document.getElementById('container'); 

var url = window.location.href
var arr = url.split("/")
const currency = arr[arr.length-2]
const period = arr[arr.length-1]



ReactDom.render(<Workspace currencyPair={currency} period={period} theme='dark' zoom={75} />, app );