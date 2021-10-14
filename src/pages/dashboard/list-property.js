import React, { Component } from 'react';

import RegularBanner from '../../components/regular-banner';
import Footer from '../../components/footer';

class ListProperty extends Component {
  render() {
    return (
      <div>
        <RegularBanner bannerText={"List All Property"}></RegularBanner>
      </div>
    );
  }
}

export default ListProperty;