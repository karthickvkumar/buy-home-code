import React, { Component } from 'react';
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

class AddLot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleImage: {
        name: 'image',
        multiple: false,
        action: `${domainName}/upload/image/single`,
        onChange: (info) => { this.singleImageUpload(info) }
      },
      multipleImageUpload: {
        name: 'image',
        multiple: true,
        action: `${domainName}/upload/image/multiple`,
        onChange: (info) => { this.gallaryImage(info) }
      },
      lot: {
        area: '',
        name: '',
        lot_count: '',
        price: '',
        cover_image: '',
        lot_plan: [],
        latitude : '',
        longitude : ''
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
        lot: { ...this.state.lot,  latitude: e.lngLat.lat, longitude: e.lngLat.lng }
      })
      message.success(`Property location co-ordinate was updated`);
    });
  }

  singleImageUpload(info) {
    console.log(info)
    const { status } = info.file;
    if (status !== 'uploading') {
      this.setState({
        lot: { ...this.state.lot, cover_image: info.file.response.url }
      })
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  gallaryImage(info) {
    const { status } = info.file;
    const { lot_plan } = this.state.lot;

    if (status !== 'uploading') {

      if (lot_plan.length == 0) {
        this.setState({
          lot: { ...this.state.lot, lot_plan: info.file.response }
        })
      }
      else {
        const gallaryList = lot_plan.concat(info.file.response);
        this.setState({
          lot: { ...this.state.lot, lot_plan: gallaryList }
        })
      }
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  onHandleFrom = (event) => {
    this.setState({
      lot: { ...this.state.lot, [event.target.name]: event.target.value }
    })
  }

  onSubmitLot(){
    console.log(this.state.lot)
  }

  render() {
    const { Dragger } = Upload;
    const {longitude, latitude} = this.state.lot;

    return (
      <div>
        <RegularBanner bannerText={"Add New Lot"}></RegularBanner>
        <section className="property-submit-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="property-submit-form">
                  <form action="#">
                    <div style={{ marginBottom: '15px' }}>
                      <h4>Select Area</h4>
                      <input type="text" name="area" onChange={this.onHandleFrom} placeholder="Your City Name" />
                    </div>

                    <div id="location" className="lot-border">
                      <div className="pf-location">
                        <div className="row-heading">
                          <h4>Lot Information</h4>
                        </div>
                        <div className="location-inputs">
                          <input type="text" placeholder="Lot Name" name="name" onChange={this.onHandleFrom} />
                          <input type="text" placeholder="Lot Count" name="lot_count" onChange={this.onHandleFrom} />
                          <input type="text" placeholder="Lot Price" name="price" onChange={this.onHandleFrom} />
                        </div>

                        <div className="row-heading">
                          <h4>Lot Gallery or Blue Print</h4>
                        </div>
                        <Dragger {...this.state.multipleImageUpload}>
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">Click or drag file to this area to upload</p>
                          <p className="ant-upload-hint">
                            Support for a single only.
                          </p>
                        </Dragger>
                        <div className="row-heading" style={{marginTop : "25px"}}>
                          <h4>Lot Cover Page</h4>
                        </div>
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
                    </div>
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

                    <div className="pf-property-details">
                      <button type="button" onClick={() => this.onSubmitLot()} className="site-btn">Submit Lot</button>
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

export default AddLot