import React, { Component } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import RegularBanner from '../../components/regular-banner';
import Footer from '../../components/footer';

const domainName = "http://localhost:8080/api";

class AddLot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationCount: [0],
      singleImage: {
        name: 'image',
        multiple: false,
        action: `${domainName}/upload/image/single`,
        onChange: (info) => { this.singleImageUpload(info) }
      },
      lot : {
        city : '',
        area : '',
        state : '',
        nested_list : [
          {
            area : '',
            city : '',
            state : '',
            country : '',
            pincode : 0,
            lotPlan : '',
            cover_image: ''
          }
        ],
        preview_image : '',
        pincode : ''
      }
    }
  }

  singleImageUpload(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      // this.setState({
      //   property: { ...this.state.property, preview_image: info.file.response.url }
      // })
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  addLocation() {
    this.state.locationCount.push(this.state.locationCount.length + 1);
    this.state.lot.nested_list.push({
      area : '',
      city : '',
      state : '',
      country : '',
      pincode : 0,
      lotPlan : '',
      cover_image: ''
    });
    this.setState({
      locationCount: this.state.locationCount,
      lot : {...this.state.lot, nested_list :  this.state.lot.nested_list}
    })
  }

  onDelelteLocation(index) {
    this.state.locationCount.splice(index, 1);
    this.state.lot.nested_list.splice(index, 1);
    this.setState({
      locationCount: this.state.locationCount,
      lot : {...this.state.lot, nested_list :  this.state.lot.nested_list}
    })
  }

  onHandleFrom = (event) => {
    if(event.target.name === "city"){
      this.setState({
        lot : {...this.state.lot, city : event.target.value }
      })
    }
    else{
      console.log(event.target.value, event.target.alt)
      const lotArea = this.state.lot.nested_list[event.target.alt];
      lotArea[event.target.name] = event.target.value;
      this.setState({
        lot : {...this.state.lot, nested_list :  this.state.lot.nested_list}
      })
    }

  }

  render() {
    console.log(this.state.lot)
    const { Dragger } = Upload;
    const locationJSX = this.state.locationCount.map((value, index) => {
      return (
        <div id="location" key={index} className="lot-border">
          <div className="pf-location">
            <div className="row-heading">
              <h4>Location #{index + 1}</h4>
            </div>
            <div className="location-inputs">
              <input type="text" placeholder="Lot Area" alt={index} id={`area_${index + 1}`} name="area" onChange={this.onHandleFrom} />
              <input type="text" placeholder="Lot City" alt={index} id={`city_${index + 1}`} name="city" onChange={this.onHandleFrom} />
              <input type="text" placeholder="Lot State" alt={index} id={`state_${index + 1}`} name="state" onChange={this.onHandleFrom} />
              <input type="text" placeholder="Lot Country" alt={index} id={`country_${index + 1}`} name="country" onChange={this.onHandleFrom} />
              <input type="text" placeholder="Lot Postal Code / Zip" alt={index} id={`pincode_${index + 1}`} name="pincode" onChange={this.onHandleFrom} />
              <button type="button" onClick={() => this.onDelelteLocation(index)} className="site-btn" style={{ backgroundColor: 'red', paddingTop: '10px', paddingBottom: '10px' }}>Delete Location</button>
            </div>
            <div className="row-heading">
              <h4>Lot Plan</h4>
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
            <div className="row-heading">
              <h4>Location Cover Page</h4>
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
                    <div style={{ marginBottom: '15px' }}>
                      <h4>City Name</h4>
                      <input type="text" name="city" onChange={this.onHandleFrom} placeholder="Your City Name" />
                    </div>
                    
                    {locationJSX}

                    <div style={{ marginBottom: '15px' }}>
                      <button type="button" onClick={() => this.addLocation()} className="site-btn">Add More Location</button>
                    </div>

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