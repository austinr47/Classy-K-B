import React, { Component } from 'react';
import './styles/main.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing'
import Countertops from './components/Countertops'
import CounterTypes from './components/CounterTypes'
import ProductDetails from './components/ProductDetails'
import Products from './components/Products'
// import Showroom from './components/Showroom'
import OurProcess from './components/OurProcess'
import Appointment from './components/Appointment'

class Routes extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Landing } /> 
          <Route exact path='/countertops' component={ Countertops } /> 
          <Route exact path='/countertops-types/:types' component={ CounterTypes } /> 
          <Route exact path='/showroom' component={ OurProcess } /> 
          <Route exact path='/our-process' component={ OurProcess } /> 
          <Route exact path='/appointment' component={ Appointment } /> 
          <Route exact path='/:section' component={ Products } /> 
          <Route exact path='/:section/:details' component={ ProductDetails } /> 
          <Route exact path='/:section/:types/:details' component={ ProductDetails } /> 
        </Switch>
      </div>
    );
  }
}

export default Routes;
