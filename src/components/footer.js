import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Ecoverde</h2>
                <p>Far far away, behind the word mountains, far from the countries.</p>
                <ul className="ftco-footer-social list-unstyled mt-5">
                  <li className="ftco-animate"><a href="#"><span className="fa fa-twitter"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="fa fa-facebook"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="fa fa-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Community</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Search Properties</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>For Agents</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Reviews</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>FAQs</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">About Us</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Our Story</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Meet the team</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Careers</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Company</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>About Us</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Press</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Careers</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon fa fa-map"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span className="icon fa fa-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span className="icon fa fa-envelope pr-4"></span><span className="text">info@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;