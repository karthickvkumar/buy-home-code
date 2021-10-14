import React, { Component } from 'react';

class HappyClient extends Component {
  render() {
    const Person_1 = require("../images/person_1.jpg").default;
    const Person_2 = require("../images/person_2.jpg").default;
    const Person_3 = require("../images/person_3.jpg").default;
    
    return (
      <section className="ftco-section testimony-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center heading-section ">
                <span className="subheading">Testimonial</span>
                <h2 className="mb-3">Happy Clients</h2>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12">
                <div className="carousel-testimony owl-carousel" style={{ display: 'flex' }}>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <span className="fa fa-quote-left"></span>
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{ backgroundImage: `url(${Person_1})` }}></div>
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <span className="fa fa-quote-left"></span>
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{ backgroundImage: `url(${Person_2})` }}></div>
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <span className="fa fa-quote-left"></span>
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{ backgroundImage: `url(${Person_3})` }}></div>
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default HappyClient;