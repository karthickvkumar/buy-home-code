import React, { Component } from 'react';

import RegularHeader from '../components/regular-header';
import RegularBanner from '../components/regular-banner';
import Footer from '../components/footer';

class Contact extends Component {
  render() {
    return (
      <div>
        <RegularHeader></RegularHeader>
        <RegularBanner bannerText={"Contact"}></RegularBanner>
        <section className="ftco-section contact-section" style={{height : '100%'}}>
          <div className="container">
            <div className="row block-9 justify-content-center">
              <div className="col-md-8 mb-md-5">
                <h2 className="text-center">If you got any questions</h2>
                <h2 className="text-center">please do not hesitate to send us a message</h2>
                <form action="#" className="bg-light p-5 contact-form">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="form-group">
                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                  </div>
                </form>
              </div>
            </div>
            <div className="row d-flex contact-info justify-content-center" style={{paddingTop: '20px'}}>
              <div className="col-md-8">
                <div className="row mb-5">
                  <div className="col-md-4 text-center py-4">
                    <div className="icon">
                      <span className="fa fa-map"></span>
                    </div>
                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                  <div className="col-md-4 text-center border-height py-4">
                    <div className="icon">
                      <span className="fa fa-phone"></span>
                    </div>
                    <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                  </div>
                  <div className="col-md-4 text-center py-4">
                    <div className="icon">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                {/* MAP */}
                <div id="map" className="bg-white"></div>
                {/* MAP */}
              </div>
            </div>
          </div>
        </section>
        {/* <Footer></Footer> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default Contact;