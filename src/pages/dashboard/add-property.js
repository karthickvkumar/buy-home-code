import React, { Component } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import RegularBanner from '../../components/regular-banner';
import Footer from '../../components/footer';

import mapboxgl from 'mapbox-gl';
import mapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const domainName = "http://localhost:8080/api";
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FydGhpY2t2a3VtYXIiLCJhIjoiY2t0OHh2M2RmMTZ1bTJvbGFoYnJrZnMwNyJ9.aS-v0gNKcSZu3UePnkFp6w';

class AddProperty extends Component {

  constructor(props) {
    super(props);
    this.state = {
      property: {
        title: '',
        description: '',
        type: '',
        price: 0,
        optional_price: 0,
        door_no: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: 0,
        home_feature: '',
        home_area: 0,
        rooms: 0,
        bed_rooms: 0,
        year_built: 0,
        bathroom: 0,
        garage: 0,
        parking_lot: 0,
        contract_type: '',
        owner_name: '',
        floor_plans: [],
        gallery: [],
        latitude: 0,
        longitude: 0,
        nearby_location: '',
        phone: 0,
        posted_at: '',
        preview_image: '',
      },
      multipleImageUpload: {
        name: 'image',
        multiple: true,
        action: `${domainName}/upload/image/multiple`,
        onChange: (info) => { this.gallaryImage(info) }
      },
      floorPlan: {
        name: 'image',
        multiple: true,
        action: `${domainName}/upload/image/multiple`,
        onChange: (info) => { this.floorPlan(info) }
      },
      singleImage: {
        name: 'image',
        multiple: false,
        action: `${domainName}/upload/image/single`,
        onChange: (info) => { this.singleImageUpload(info) }
      },
      map: {},
      markers: []
    }
  }

  componentDidMount() {
    this.state.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [80.27030735800841, 13.085358091531939], // starting position [lng, lat]
      zoom: 14, // starting zoom
      attributionControl: false
    });

    const seachLocation = new mapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      zoom: 16
    })
    this.state.map.addControl(seachLocation);

    const navigation = new mapboxgl.NavigationControl();
    //this.state.map.addControl(navigation)

    const gpsLocation = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
    });
    //this.state.map.addControl(gpsLocation);

    this.state.map.on('click', (e) => {
      this.setState({
        property: { ...this.state.property, latitude: e.lngLat.lat, longitude: e.lngLat.lng }
      });
      message.success(`Property location co-ordinate was updated`);
    });
  }

  onSubmitProperty() {
    console.log(this.state.property)
  }

  onHandleFrom = (event) => {
    this.setState({
      property: { ...this.state.property, [event.target.name]: event.target.value }
    })
  }

  onEditorStateChange = (event) => {
    console.log(event)
  }

  gallaryImage(info) {
    const { status } = info.file;
    const { gallery } = this.state.property;

    if (status !== 'uploading') {

      if (gallery.length == 0) {
        this.setState({
          property: { ...this.state.property, gallery: info.file.response }
        })
      }
      else {
        const gallaryList = gallery.concat(info.file.response);
        this.setState({
          property: { ...this.state.property, gallery: gallaryList }
        })
      }
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  floorPlan(info) {
    const { status } = info.file;
    const { floor_plans } = this.state.property;

    if (status !== 'uploading') {
      if (floor_plans.length == 0) {
        this.setState({
          property: { ...this.state.property, floor_plans: info.file.response }
        })
      }
      else {
        const floorPlanList = floor_plans.concat(info.file.response);
        this.setState({
          property: { ...this.state.property, floor_plans: floorPlanList }
        })
      }
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  singleImageUpload(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      this.setState({
        property: { ...this.state.property, preview_image: info.file.response.url }
      })
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    const { Dragger } = Upload;
    const { latitude, longitude } = this.state.property;

    return (
      <div>
        <RegularBanner bannerText={"Add New Property"}></RegularBanner>
        <section className="property-submit-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="property-submit-form">
                  <form >
                    <div className="pf-title">
                      <h4>Property Title</h4>
                      <input type="text" name="title" onChange={this.onHandleFrom} placeholder="Your Property Title*" />
                    </div>
                    <div className="pf-summernote">
                      <h4>Property Description</h4>
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                      />
                    </div>
                    <div className="pf-location">
                      <h4>Property Location</h4>
                      <div className="location-inputs">
                        <input type="text" placeholder="Door No." name="door_no" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Address" name="address" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="City" name="city" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="State" name="state" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Country" name="country" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Posta Code / Zip" name="pincode" onChange={this.onHandleFrom} />
                      </div>
                    </div>

                    <h4>Choose Property Location</h4>
                  </form>
                  <div className="row">
                    <div id="map" style={{ height: '60vh' }}></div>
                  </div>
                  <form>
                    <div className="map-format">
                      <div className="fp-inputs">
                        <div style={{ display: 'flex' }}>
                          <label style={{ width: '140px' }}>Latitude :</label>
                          <input type="text" placeholder="Latitude" value={latitude} name="latitude" onChange={this.onHandleFrom} />
                        </div>
                        <div style={{ display: 'flex' }}>
                          <label style={{ width: '140px' }}>Longitude :</label>
                          <input type="text" placeholder="Longitude" value={longitude} name="longitude" onChange={this.onHandleFrom} />
                        </div>
                      </div>
                    </div>
                  </form>
                  <form>

                    <div className="pf-type">

                      <h4>Property type</h4>
                      <div className="type-item">
                        <label htmlFor="pt-apart">Apartment
                          <input type="checkbox" id="pt-apart" value="Apartment" name="type" onChange={this.onHandleFrom} />
                          <span className="checkbox"></span>
                        </label>
                        <label htmlFor="pt-house">House
                          <input type="checkbox" id="pt-house" value="House" name="type" onChange={this.onHandleFrom} />
                          <span className="checkbox"></span>
                        </label>
                        <label htmlFor="pt-off">Office
                          <input type="checkbox" id="pt-off" value="Office" name="type" onChange={this.onHandleFrom} />
                          <span className="checkbox"></span>
                        </label>
                        <label htmlFor="pt-villa">Villa
                          <input type="checkbox" id="pt-villa" value="Villa" name="type" onChange={this.onHandleFrom} />
                          <span className="checkbox"></span>
                        </label>
                        <label htmlFor="pt-store">Store
                          <input type="checkbox" id="pt-store" value="Store" name="type" onChange={this.onHandleFrom} />
                          <span className="checkbox"></span>
                        </label>
                        <label htmlFor="pt-rest">Resturent
                          <input type="checkbox" id="pt-rest" value="Resturent" name="type" onChange={this.onHandleFrom} />
                          <span className="checkbox"></span>
                        </label>
                      </div>
                    </div>
                    <div className="pf-status">
                      <h4>Property status</h4>
                      <div className="status-item">
                        <label htmlFor="ps-rent">For rent
                          <input type="checkbox" id="ps-rent" value="Rent" name="contract_type" onChange={this.onHandleFrom} />
                          <span className="checkbox"></span>
                        </label>
                        <label htmlFor="ps-sale">For sale
                          <input type="checkbox" id="ps-sale" value="Sale" name="contract_type" onChange={this.onHandleFrom} />
                          <span className="checkbox"></span>
                        </label>
                      </div>
                    </div>
                    <div className="pf-feature-price">
                      <h4>Featured Price</h4>
                      <div className="fp-inputs">
                        <input type="text" placeholder="Price" name="price" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Second Price ( Optional )" name="optional_price" onChange={this.onHandleFrom} />
                        {/* <input type="text" placeholder="After Price Label (ex: month  ly)" /> */}
                      </div>
                    </div>
                    <div className="pf-feature">
                      <h4>Property Features</h4>
                      <div className="features-list">
                        <div className="feature-item">
                          <label htmlFor="air">Air conditioning
                            <input type="checkbox" id="air" value="Air Conditioning" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="lundry">Laundry
                            <input type="checkbox" id="lundry" value="Laundry" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="refrigerator">Refrigerator
                            <input type="checkbox" id="refrigerator" value="Refrigerator" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="washer">Washer
                            <input type="checkbox" id="washer" value="Washer" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                        </div>
                        <div className="feature-item">
                          <label htmlFor="barbeque">Barbeque
                            <input type="checkbox" id="barbeque" value="Barbeque" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="lawn">Lawn
                            <input type="checkbox" id="lawn" value="Lawn" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="sauna">Sauna
                            <input type="checkbox" id="sauna" value="Sauna" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="wifi">Wifi
                            <input type="checkbox" id="wifi" value="Wifi" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                        </div>
                        <div className="feature-item">
                          <label htmlFor="dryer">Dryer
                            <input type="checkbox" id="dryer" value="Dryer" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="microwave">Microwave
                            <input type="checkbox" id="microwave" value="Microwave" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="pool">Swimming Pool
                            <input type="checkbox" id="pool" value="Swimming Pool" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="window">Window Coverings
                            <input type="checkbox" id="window" value="Window Coverings" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                        </div>
                        <div className="feature-item">
                          <label htmlFor="gym">Gym
                            <input type="checkbox" id="gym" value="Gym" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="shower">OutdoorShower
                            <input type="checkbox" id="shower" value="OutdoorShower" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="tv">Tv Cable
                            <input type="checkbox" id="tv" value="Tv Cable" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                          <label htmlFor="villa">Villa
                            <input type="checkbox" id="villa" value="Villa" name="home_feature" onChange={this.onHandleFrom} />
                            <span className="checkbox"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="pf-feature-image">
                      <h4>Gallery Image</h4>
                      <Dragger {...this.state.multipleImageUpload}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                          Support for a single or bulk image upload.
                        </p>
                      </Dragger>
                    </div>
                    <div className="pf-feature-image">
                      <h4>Floor Plan</h4>
                      <Dragger {...this.state.floorPlan}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                          Support for a single or bulk image upload.
                        </p>
                      </Dragger>
                    </div>
                    <div className="pf-feature-image">
                      <h4>Cover Image</h4>
                      <Dragger {...this.state.singleImage}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                          Support for a single only.
                        </p>
                      </Dragger>
                    </div>
                    <div className="pf-property-details">
                      <h4>Property details</h4>
                      <div className="property-details-inputs">
                        <input type="text" placeholder="House Name" name="owner_name" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Area Size ( Only digits - Sq Feet)" name="home_area" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Rooms" name="rooms" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Bedrooms" name="bed_rooms" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Bathrooms" name="bathroom" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Garages" name="garage" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Parking Lot" name="parking_lot" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Year Built" name="year_built" onChange={this.onHandleFrom} />
                        <input type="text" placeholder="Contact Number" name="phone" onChange={this.onHandleFrom} />
                      </div>
                      <button type="button" onClick={() => this.onSubmitProperty()} className="site-btn">Submit Property</button>
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

export default AddProperty;