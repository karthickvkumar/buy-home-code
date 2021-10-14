import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import RegularHeader from '../components/regular-header';
import RegularBanner from '../components/regular-banner';
import Footer from '../components/footer';

class PropertyDetail extends Component {
    render() {
        const images = [
            {
              original: 'https://picsum.photos/id/1018/1000/600/',
              thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
              original: 'https://picsum.photos/id/1015/1000/600/',
              thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
              original: 'https://picsum.photos/id/1019/1000/600/',
              thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
          ];

        return (
            <div className="mb-4">
                <RegularHeader></RegularHeader>
                <RegularBanner bannerText={"Property Details"}></RegularBanner>
                <section class="property-details-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="pd-text" style={{marginTop : '20px'}}>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="pd-title">
                                                <div class="label">For rent</div>
                                                <div class="pt-price">$ 289.0<span>/month</span></div>
                                                <h3>Home in Merrick Way</h3>
                                                <p><span class="icon_pin_alt"></span> 3 Middle Winchendon Rd, Rindge, NH 03463</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="pd-social">
                                                <a href="#"><i class="fa fa-mail-forward"></i></a>
                                                <a href="#"><i class="fa fa-send"></i></a>
                                                <a href="#"><i class="fa fa-heart"></i></a>
                                                <a href="#"><i class="fa fa-mail-forward"></i></a>
                                                <a href="#"><i class="fa fa-cloud-download"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pd-board">
                                        <div class="tab-board">
                                            <ul class="nav nav-tabs" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Amenities</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                                    <div class="tab-details">
                                                        <ul class="left-table">
                                                            <li>
                                                                <span class="type-name">Property Type</span>
                                                                <span class="type-value">House</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Property ID</span>
                                                                <span class="type-value">#219</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Price</span>
                                                                <span class="type-value">$ 289.0/mounth</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Year Built</span>
                                                                <span class="type-value">2019</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Contract type</span>
                                                                <span class="type-value">Rent</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Agent</span>
                                                                <span class="type-value">Ashton Kutcher</span>
                                                            </li>
                                                        </ul>
                                                        <ul class="right-table">
                                                            <li>
                                                                <span class="type-name">Home Area</span>
                                                                <span class="type-value">1200 sqft</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Rooms</span>
                                                                <span class="type-value">9</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Bedrooms</span>
                                                                <span class="type-value">4</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Bathrooms</span>
                                                                <span class="type-value">3</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Garages</span>
                                                                <span class="type-value">2</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Parking lots</span>
                                                                <span class="type-value">2</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>


                                            </div>
                                            <ul class="nav nav-tabs" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" data-toggle="tab" href="#tabs-2" role="tab">Description</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="tabs-2" role="tabpanel">
                                                    <div class="tab-desc">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor itaque facere consequatur, dignissimos minus adipisci ipsam repudiandae nisi illum provident, natus quidem vero? Quaerat ducimus sequi praesentium commodi, consectetur corporis eos sit perspiciatis, quae sed officia error, iure quasi.</p>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor itaque facere consequatur, dignissimos minus adipisci ipsam repudiandae nisi illum provident, natus quidem vero? Quaerat ducimus sequi praesentium commodi, consectetur corporis eos sit perspiciatis, quae sed officia error, iure quasi.</p>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="tabs-3" role="tabpanel">
                                                    <div class="tab-details">
                                                        <ul class="left-table">
                                                            <li>
                                                                <span class="type-name">Property Type</span>
                                                                <span class="type-value">House</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Property ID</span>
                                                                <span class="type-value">#219</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Price</span>
                                                                <span class="type-value">$ 289.0/mounth</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Year Built</span>
                                                                <span class="type-value">2019</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Contract type</span>
                                                                <span class="type-value">Rent</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Agent</span>
                                                                <span class="type-value">Ashton Kutcher</span>
                                                            </li>
                                                        </ul>
                                                        <ul class="right-table">
                                                            <li>
                                                                <span class="type-name">Home Area</span>
                                                                <span class="type-value">1200 sqft</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Rooms</span>
                                                                <span class="type-value">9</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Bedrooms</span>
                                                                <span class="type-value">4</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Bathrooms</span>
                                                                <span class="type-value">3</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Garages</span>
                                                                <span class="type-value">2</span>
                                                            </li>
                                                            <li>
                                                                <span class="type-name">Parking lots</span>
                                                                <span class="type-value">2</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pd-widget">
                                        <h4>Floor plans</h4>
                                        <img src="img/property/details/floor-plan.jpg" alt="" />
                                    </div>
                                    <div class="pd-widget">
                                        <h4>Gallery</h4>
                                        <ImageGallery items={images} />
                                    </div>
                                    <div class="pd-widget">
                                        <h4>Lot Location</h4>
                                        <div class="map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735515.5813275519!2d-80.41163541934742!3d43.93644386501528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882a55bbf3de23d7%3A0x3ada5af229b47375!2sMono%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1583262687289!5m2!1sen!2sbd" height="350" allowfullscreen=""></iframe>
                                        </div>
                                        <div class="map-location">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="ml-item">
                                                        <div class="ml-single-item">
                                                            <h6>Hospital <span>( <i class="fa fa-location-arrow"></i> 5 km )</span></h6>
                                                            <p>Portland Ave Rochester, NY 14621</p>
                                                        </div>
                                                        <div class="ml-single-item">
                                                            <h6>Schools <span>( <i class="fa fa-location-arrow"></i> 8 km )</span></h6>
                                                            <p>Cragin Elementary School</p>
                                                        </div>
                                                        <div class="ml-single-item">
                                                            <h6>Store <span>( <i class="fa fa-location-arrow"></i> 2 km )</span></h6>
                                                            <p>Exceptional Shoes & Clothing</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="ml-item">
                                                        <div class="ml-single-item">
                                                            <h6>Laundry <span>( <i class="fa fa-location-arrow"></i> 3 km )</span></h6>
                                                            <p>Besst at laundry</p>
                                                        </div>
                                                        <div class="ml-single-item">
                                                            <h6>Health <span>( <i class="fa fa-location-arrow"></i> 5 km )</span></h6>
                                                            <p>Boomerang Barber & Beauty</p>
                                                        </div>
                                                        <div class="ml-single-item">
                                                            <h6>Health <span>( <i class="fa fa-location-arrow"></i> 5 km )</span></h6>
                                                            <p>Boomerang Barber & Beauty</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="contact-info">
                                                    <div class="ci-item">
                                                        <div class="ci-icon">
                                                            <i class="fa fa-map-marker"></i>
                                                        </div>
                                                        <div class="ci-text">
                                                            <h5>Address</h5>
                                                            <p>160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161</p>
                                                        </div>
                                                    </div>
                                                    <div class="ci-item">
                                                        <div class="ci-icon">
                                                            <i class="fa fa-mobile"></i>
                                                        </div>
                                                        <div class="ci-text">
                                                            <h5>Phone</h5>
                                                            <ul>
                                                                <li>125-711-811</li>
                                                                <li>125-668-886</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="ci-item">
                                                        <div class="ci-icon">
                                                            <i class="fa fa-headphones"></i>
                                                        </div>
                                                        <div class="ci-text">
                                                            <h5>Support</h5>
                                                            <p>Support.aler@gmail.com</p>
                                                        </div>
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
                <Footer></Footer>
            </div>
        );
    }
}

export default PropertyDetail;