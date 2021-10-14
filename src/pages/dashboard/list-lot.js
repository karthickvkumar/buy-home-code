import React, { Component } from 'react';

import RegularBanner from '../../components/regular-banner';
import Footer from '../../components/footer';

class ListLot extends Component {
  render() {
    return (
      <div>
        <RegularBanner bannerText={"List All Lots"}></RegularBanner>
      </div>
    );
  }
}

export default ListLot;