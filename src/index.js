import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes/index'

ReactDOM.render((
    <Router>
        <Routes />
    </Router>

), document.getElementById('root'));