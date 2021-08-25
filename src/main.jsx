import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import Application from './Application'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Application />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
