import React, { Component } from 'react';

class HomeCount extends Component {
  render() {
    return (
      <section className="ftco-counter img" id="section-counter">
          <div className="container">
            <div className="row pt-md-5">
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                <div className="block-18 py-5 mb-4">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number="1000">1000</strong>
                    <span>Area</span>
                    <span>Population</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                <div className="block-18 py-5 mb-4">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number="2500">2500</strong>
                    <span>Total</span>
                    <span>Properties</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                <div className="block-18 py-5 mb-4">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number="500">500</strong>
                    <span>Average</span>
                    <span>House</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                <div className="block-18 py-5 mb-4">
                  <div className="text d-flex align-items-center">
                    <strong className="number" data-number="67">67</strong>
                    <span>Total</span>
                    <span>Branches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default HomeCount;