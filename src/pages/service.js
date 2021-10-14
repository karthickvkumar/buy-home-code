import React, { Component } from 'react';

import RegularHeader from '../components/regular-header';
import RegularBanner from '../components/regular-banner';
import BrandInfo from '../components/brand-info';
import HowItWork from '../components/how-it-work';
import SpecialService from '../components/special-service';
import Footer from '../components/footer';

class Service extends Component {
  render() {
    return (
      <div>
        <RegularHeader></RegularHeader>
        <RegularBanner bannerText={"Services"}></RegularBanner>
        <SpecialService></SpecialService>
        <HowItWork></HowItWork>
        <BrandInfo></BrandInfo>
        <Footer></Footer>
      </div>
    );
  }
}

export default Service;