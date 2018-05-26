import React from 'react';
import ReactDom from 'react-dom';
import Workspace from './src/Components/workspace/workspace.js'

import data from './src/Components/chart/api.json';

const app = document.getElementById('container'); 

ReactDom.render(<Workspace currency="btc_mxn" period="3months" theme='dark' zoom={75} />, app );