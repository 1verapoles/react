import React from 'react'
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index.css'
import App from './App'
import Error from './Error'
import Header from './Header'
import Details from './Details'
import About from './About'



function Application() {
  let location = useLocation();
  return (<>
    <Header />
    <TransitionGroup>
      <CSSTransition timeout={2000} classNames="page" key={location.key}>
        <Switch location={location} >
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </>)
}


export default Application