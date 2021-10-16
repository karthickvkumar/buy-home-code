import React, { Component } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import RegularBanner from '../../components/regular-banner';
import Footer from '../../components/footer';

const domainName = "http://localhost:8080/api";

class AddCities extends Component {
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
      city_information: {
        city: '',
        area: '',
        state: '',
        pincode: '',
        country: '',
        cover_image : ""
      }
    }
  }

  onHandleFrom = (event) => {
    this.setState({
      city_information : {...this.state.city_information, [event.target.name ] : event.target.value}
    })
  }

  singleImageUpload(info) {
    console.log(info)
    const { status } = info.file;
    if (status !== 'uploading') {
      this.setState({
        city_information: { ...this.state.city_information, cover_image: info.file.response.url }
      })
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  onSubmitCity(){
    console.log(this.state.city_information)
  }

  render() {
    const { Dragger } = Upload;

    return (
      <div>
        <RegularBanner bannerText={"Add New City"}></RegularBanner>
        <section className="property-submit-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="property-submit-form">
                  <form>
                    <div id="location" className="lot-border">
                      <div className="pf-location">
                        <div className="row-heading">
                          <h4>Location</h4>
                        </div>
                        <div className="location-inputs">
                          <input type="text" placeholder="Area" name="area" onChange={this.onHandleFrom} />
                          <input type="text" placeholder="City" name="city" onChange={this.onHandleFrom} />
                          <input type="text" placeholder="State" name="state" onChange={this.onHandleFrom} />
                          <input type="text" placeholder="Country" name="country" onChange={this.onHandleFrom} />
                          <input type="text" placeholder="Postal Code / Zip" name="pincode" onChange={this.onHandleFrom} />
                        </div>
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
                    <button type="button" onClick={() => this.onSubmitCity()} className="site-btn">Submit City Information</button>
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

export default AddCities;