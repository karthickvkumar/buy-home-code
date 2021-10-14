import React, { Component } from 'react';

class Cities extends Component {
  render() {
    const Cities_1 = require("../images/place-1.jpg").default;
    const Cities_2 = require("../images/place-2.jpg").default;
    const Cities_3 = require("../images/place-3.jpg").default;
    
    return (
      <section className="ftco-section ftco-no-pt">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 heading-section text-center mb-5">
                <span className="subheading">Properties</span>
                <h2 className="mb-2">Properties for this Cities</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <a href="#" className="search-place img" style={{ backgroundImage: `url(${Cities_1})` }}>
                  <div className="desc">
                    <h3><span>Miami</span></h3>
                    <span>24 Properties</span>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="#" className="search-place img" style={{ backgroundImage: `url(${Cities_2})` }}>
                  <div className="desc">
                    <h3><span>Chicago</span></h3>
                    <span>20 Properties</span>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="#" className="search-place img" style={{ backgroundImage: `url(${Cities_3})` }}>
                  <div className="desc">
                    <h3><span>Illinoi</span></h3>
                    <span>15 Properties</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Cities;