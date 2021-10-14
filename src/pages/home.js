import React, { Component } from 'react';

import Header from '../components/header';
import HomeBanner from '../components/home-banner';
import Filter from '../components/filter';
import BrandInfo from '../components/brand-info';
import Cities from '../components/cities';
import HowItWork from '../components/how-it-work';
import AboutFamily from '../components/about';
import HomeCount from '../components/home-count';
import HappyClient from '../components/happy-client';
import Footer from '../components/footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <HomeBanner></HomeBanner>
        <Filter></Filter>
        <BrandInfo></BrandInfo>
        <Cities></Cities>
        <HowItWork></HowItWork>
        <AboutFamily></AboutFamily>
        <HomeCount></HomeCount>
        <HappyClient></HappyClient>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;