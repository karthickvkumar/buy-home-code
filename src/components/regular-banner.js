import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class RegularBanner extends Component {
  render() {
    const Background = require("../images/bg_1.jpg").default;
    return (
      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${Background})` }} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
          <div className="col-md-9 pb-0 text-center">
          	<p className="breadcrumbs"><span className="mr-2"><NavLink to="/">Home <i className="fa fa-chevron-right"></i></NavLink></span> <span>{this.props.bannerText} <i className="fa fa-chevron-right"></i></span></p>
            <h1 className="mb-3 bread">{this.props.bannerText}</h1>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default RegularBanner;