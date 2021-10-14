import React, { Component } from 'react';

import RegularBanner from '../../components/regular-banner';
import Footer from '../../components/footer';

class AddLot extends Component {
  constructor(props){
    super(props);
    this.state = {
      locationCount : [0]
    }
  }

  addLocation(){
    this.state.locationCount.push(this.state.locationCount.length + 1);
    this.setState({
      locationCount : this.state.locationCount
    })
  }

  onDelelteLocation(index){
    this.state.locationCount.splice(index, 1);
    this.setState({
      locationCount : this.state.locationCount
    })
  }

  render() {
    const locationJSX = this.state.locationCount.map((value, index) => {
      return (
        <div id="location" key={index} className="lot-border">
            <div className="pf-location">
              <div className="row-heading">
                <h4>Location #{index + 1}</h4>
                <button type="button" onClick={() => this.onDelelteLocation(index)} className="site-btn" style={{backgroundColor : 'red'}}>Delete</button>

              </div>
              <div className="location-inputs">
                <input type="text" placeholder="Lot Area" name="area" onChange={this.onHandleFrom} />
                <input type="text" placeholder="Lot City" name="city" onChange={this.onHandleFrom} />
                <input type="text" placeholder="Lot State" name="state" onChange={this.onHandleFrom} />
                <input type="text" placeholder="Lot Country" name="country" onChange={this.onHandleFrom} />
                <input type="text" placeholder="Lot Postal Code / Zip" name="pincode" onChange={this.onHandleFrom} />
              </div>
            </div>
            <div className="pf-map">
              <h4>Goolge Map</h4>
              <div className="row">
                <div className="col-lg-4">
                  <div className="map-inputs">
                    <input type="text" placeholder="Lot Latitude" name="latitude" onChange={this.onHandleFrom} />
                    <input type="text" placeholder="Lot Longitude" name="longitude" onChange={this.onHandleFrom} />
                  </div>
                  <button type="button" className="site-btn">Clear Lot Marker</button>
                </div>
                <div className="col-lg-8">

                </div>
              </div>
            </div>
          </div>
      )
    })
    return (
      <div>
        <RegularBanner bannerText={"Add New Lot"}></RegularBanner>
        <section className="property-submit-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="property-submit-form">
                  <form action="#">
                    <div style={{marginBottom: '15px'}}>
                      <h4>City Name</h4>
                      <input type="text" name="title" onChange={this.onHandleFrom} placeholder="Your City Name" />
                    </div>
                    <div style={{marginBottom: '15px'}}>
                      <button type="button" onClick={() => this.addLocation()} className="site-btn">Add Location</button>
                    </div>
                    
                    {locationJSX}

                    <div className="pf-property-details">
                      <button type="button" onClick={() => this.onSubmitProperty()} className="site-btn">Submit Lot</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

export default AddLot;