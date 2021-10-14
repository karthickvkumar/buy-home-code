import React, { Component } from 'react';

import RegularHeader from '../components/regular-header';
import RegularBanner from '../components/regular-banner';
import AboutFamily from '../components/about';
import HomeCount from '../components/home-count';
import HappyClient from '../components/happy-client';
import Footer from '../components/footer';

class About extends Component {
  render() {
    return (
      <div>
        <RegularHeader></RegularHeader>
        <RegularBanner bannerText={"About Us"}></RegularBanner>
        <AboutFamily></AboutFamily>
        <HomeCount></HomeCount>
        <HappyClient></HappyClient>
        <Footer></Footer>
      </div>
    );
  }
}

export default About;