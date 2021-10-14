import React, { Component } from 'react';

import RegularBanner from '../../components/regular-banner';
import Footer from '../../components/footer';

class ListUser extends Component {
  render() {
    return (
      <div>
        <RegularBanner bannerText={"List All Users"}></RegularBanner>
      </div>
    );
  }
}

export default ListUser;