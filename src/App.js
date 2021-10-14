import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Property from './pages/property';
import Service from './pages/service';
import Contact from './pages/contact';
import Admin from './pages/admin';
import PropertyDetail from './pages/property-detail';
import Lot from './pages/lot';
import Login from './pages/login';
import Register from './pages/register';
import ForgetPassword from './pages/forget-password';

import './css/bootstrap.min.css';
import './css/animate.css';
import './css/magnific-popup.css';
import './css/flaticon.css';
import './css/style.css';
import './css/font-awesome.min.css';
import './css/elegant-icons.css';
import './css/style-property.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/service" component={Service}></Route>
          <Route path="/property" exact component={Property}></Route>
          <Route path="/property/:id" component={PropertyDetail}></Route>
          <Route path="/lot" component={Lot}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/forget-passowrd" component={ForgetPassword}></Route>
          <Route path="/admin" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;