import React, { Component } from 'react';

class AboutFamily extends Component {
  render() {
    const About_1 = require("../images/about.jpg").default;
    const About_2 = require("../images/about-2.jpg").default;
    return (
      <section className="ftco-section ftco-no-pb ftco-no-pt">
          <div className="container">
            <div className="row">
              <div className="col-md-7 order-md-last d-flex align-items-stretch">
                <div className="img w-100 img-2 mr-md-2" style={{ backgroundImage: `url(${About_1})` }}></div>
                <div className="img w-100 img-2 ml-md-2" style={{ backgroundImage: `url(${About_2})` }}></div>
              </div>
              <div className="col-md-5 wrap-about py-md-5 ">
                <div className="heading-section pr-md-5">
                  <h2 className="mb-4">Ecoverde Real Estate</h2>

                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default AboutFamily;