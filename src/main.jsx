import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css'
import Application from './Application'
import { store } from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Application />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
