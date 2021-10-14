import React, { Component } from 'react';

import RegularHeader from '../components/regular-header';
import RegularBanner from '../components/regular-banner';
import Cities from '../components/cities';

import Footer from '../components/footer';

class Lot extends Component {
  render() {
    return (
      <div>
        <RegularHeader></RegularHeader>
        <RegularBanner bannerText={"Find a Lot"}></RegularBanner>
        <Cities></Cities>
      </div>
    );
  }
}

export default Lot;