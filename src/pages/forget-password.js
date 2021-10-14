import React, { Component } from 'react';

import RegularHeader from '../components/regular-header';
import Footer from '../components/footer';

class ForgetPassword extends Component {
  render() {
    const Background = require("../images/bg_1.jpg").default;

    return (
      <div>
        <RegularHeader></RegularHeader>
        <section className="hero-wrap" style={{ backgroundImage: `url(${Background})` }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center">
              <div className="col-lg-7 col-md-6 d-flex align-items-end">
                <div className="text">
                  <h1>Find Perfect</h1>
                  <h1 className="mb-4">House From Your Area.</h1>
                  <p style={{ fontSize: "18px" }}>From as low as $20 A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  <p><a href="#" className="btn btn-primary py-3 px-4">View all properties</a></p>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 d-flex align-items-end">

                <form className="bg-light p-5 contact-form" style={{width : '64vh'}}>
                  <h2 className="text-center gray">Reset your passowrd</h2>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter your Email ID" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Set your New Passowrd" />
                  </div>
                  <div className="form-group">
                    <input type="button" value="Reset Password" className="btn btn-primary py-3 px-5" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

export default ForgetPassword;