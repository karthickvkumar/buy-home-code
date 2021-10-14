import React, { Component } from 'react';

class HowItWork extends Component {
  render() {
    return (
      <section className="ftco-section services-section bg-darken">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center heading-section heading-section-white">
              <span className="subheading">Work flow</span>
              <h2 className="mb-3">How it works</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 d-flex align-self-stretch">
              <div className="media block-6 services services-2">
                <div className="media-body py-md-4 text-center">
                  <div className="icon mb-1 d-flex align-items-center justify-content-center"><span>01</span>
                    <img src={require("../images/blob.svg").default} alt="" />
                  </div>
                  <h3>Evaluate Property</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch">
              <div className="media block-6 services services-2">
                <div className="media-body py-md-4 text-center">
                  <div className="icon mb-1 d-flex align-items-center justify-content-center"><span>02</span>
                    <img src={require("../images/blob.svg").default} alt="" /></div>
                  <h3>Meet Your Agent</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch">
              <div className="media block-6 services services-2">
                <div className="media-body py-md-4 text-center">
                  <div className="icon mb-1 d-flex align-items-center justify-content-center"><span>03</span>
                    <img src={require("../images/blob.svg").default} alt="" /></div>
                  <h3>Close the Deal</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch">
              <div className="media block-6 services services-2">
                <div className="media-body py-md-4 text-center">
                  <div className="icon mb-1 d-flex align-items-center justify-content-center"><span>04</span>
                    <img src={require("../images/blob.svg").default} alt="" /></div>
                  <h3>Have Your Property</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HowItWork;