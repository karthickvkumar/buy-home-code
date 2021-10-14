import React, { Component } from 'react';

class BrandInfo extends Component {
  render() {
    return (
      <section className="ftco-section ftco-no-pb ftco-no-pt bg-primary mb-4">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="media block-6 services services-bg d-block text-center px-4 py-5">
                <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-business"></span></div>
                <div className="media-body py-md-4">
                  <h3>Trusted by Thousands</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="media block-6 services services-bg services-darken d-block text-center px-4 py-5">
                <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-home"></span></div>
                <div className="media-body py-md-4">
                  <h3>Wide Range of Properties</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="media block-6 services services-bg services-lighten d-block text-center px-4 py-5">
                <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-stats"></span></div>
                <div className="media-body py-md-4">
                  <h3>Financing Made Easy</h3>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="media block-6 services services-bg d-block text-center px-4 py-5">
                <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-quarantine"></span></div>
                <div className="media-body py-md-4">
                  <h3>Locked in Pricing</h3>
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

export default BrandInfo;