import React from 'react';
import ReactDom from 'react-dom';
import Workspace from './src/Components/workspace/workspace.js'

const app = document.getElementById('container'); 

ReactDom.render(<Workspace/>, app );