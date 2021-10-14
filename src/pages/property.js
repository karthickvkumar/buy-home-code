import React, { Component } from 'react';

import RegularHeader from '../components/regular-header';
import RegularBanner from '../components/regular-banner';
import Filter from '../components/filter';
import Footer from '../components/footer';

class Property extends Component {
  render() {
    const Property = require("../images/work-1.jpg").default;

    return (
      <div>
        <RegularHeader></RegularHeader>
        <RegularBanner bannerText={"Properties"}></RegularBanner>
        <Filter></Filter>
        <section className="ftco-section goto-here">
    	<div className="container">
    		<div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center mb-5">
          	<span className="subheading">What we offer</span>
            <h2 className="mb-2">Properties</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-4">
        		<div className="property-wrap">
        			<a href="properties-single.html" className="img"  style={{ backgroundImage: `url(${Property})` }}>
        				<div className="rent-sale">
        					<span className="sale">Sale</span>
        				</div>
        				<p className="price"><span className="orig-price">$300,000</span></p>
        			</a>  
        			<div className="text">
        				<ul className="property_list">
        					<li><span className="fa fa-bed"></span>3</li>
        					<li><span className="fa fa-bath"></span>2</li>
        					<li><span className="fa fa-home"></span>1,878 sqft</li>
        				</ul>
        				<h3><a href="#">The Blue Sky Home</a></h3>
        				<span className="location">Oakland</span>
        				<a href="#" className="d-flex align-items-center justify-content-center btn-custom">
        					<span className="fa fa-link"></span>
        				</a>
        				<div className="list-team d-flex align-items-center mt-2 pt-2 border-top">
        					<div className="d-flex align-items-center">
	        					<div className="img" style={{ backgroundImage: `url(${Property})` }}></div>
	        					<h3 className="ml-2">John Dorf</h3>
	        				</div>
	        				<span className="text-right">2 weeks ago</span>
        				</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4">
        		<div className="property-wrap">
        			<a href="properties-single.html" className="img" style={{ backgroundImage: `url(${Property})` }}>
        				<div className="rent-sale">
        					<span className="rent">Rent</span>
        				</div>
        				<p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small> / mo</small></span></p>
        			</a>
        			<div className="text">
        				<ul className="property_list">
        					<li><span className="fa fa-bed"></span>3</li>
        					<li><span className="fa fa-bath"></span>2</li>
        					<li><span className="fa fa-home"></span>1,878 sqft</li>
        				</ul>
        				<h3><a href="#">The Blue Sky Home</a></h3>
        				<span className="location">Oakland</span>
        				<a href="#" className="d-flex align-items-center justify-content-center btn-custom">
        					<span className="fa fa-link"></span>
        				</a>
        				<div className="list-team d-flex align-items-center mt-2 pt-2 border-top">
        					<div className="d-flex align-items-center">
	        					<div className="img" style={{ backgroundImage: `url(${Property})` }}></div>
	        					<h3 className="ml-2">John Dorf</h3>
	        				</div>
	        				<span className="text-right">2 weeks ago</span>
        				</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4">
        		<div className="property-wrap">
        			<a href="properties-single.html" className="img" style={{ backgroundImage: `url(${Property})` }}>
        				<div className="rent-sale">
        					<span className="rent">Rent</span>
        				</div>
        				<p className="price"><span className="orig-price">$300<small> / mo</small></span></p>
        			</a>
        			<div className="text">
        				<ul className="property_list">
        					<li><span className="fa fa-bed"></span>3</li>
        					<li><span className="fa fa-bath"></span>2</li>
        					<li><span className="fa fa-home"></span>1,878 sqft</li>
        				</ul>
        				<h3><a href="#">The Blue Sky Home</a></h3>
        				<span className="location">Oakland</span>
        				<a href="#" className="d-flex align-items-center justify-content-center btn-custom">
        					<span className="fa fa-link"></span>
        				</a>
        				<div className="list-team d-flex align-items-center mt-2 pt-2 border-top">
        					<div className="d-flex align-items-center">
	        					<div className="img" style={{ backgroundImage: `url(${Property})` }}></div>
	        					<h3 className="ml-2">John Dorf</h3>
	        				</div>
	        				<span className="text-right">2 weeks ago</span>
        				</div>
        			</div>
        		</div>
        	</div>

        	<div className="col-md-4">
        		<div className="property-wrap">
        			<a href="properties-single.html" className="img" style={{ backgroundImage: `url(${Property})` }}>
        				<div className="rent-sale">
        					<span className="sale">Sale</span>
        				</div>
        				<p className="price"><span className="orig-price">$300,000</span></p>
        			</a>
        			<div className="text">
        				<ul className="property_list">
        					<li><span className="fa fa-bed"></span>3</li>
        					<li><span className="fa fa-bath"></span>2</li>
        					<li><span className="fa fa-home"></span>1,878 sqft</li>
        				</ul>
        				<h3><a href="#">The Blue Sky Home</a></h3>
        				<span className="location">Oakland</span>
        				<a href="#" className="d-flex align-items-center justify-content-center btn-custom">
        					<span className="fa fa-link"></span>
        				</a>
        				<div className="list-team d-flex align-items-center mt-2 pt-2 border-top">
        					<div className="d-flex align-items-center">
	        					<div className="img" style={{ backgroundImage: `url(${Property})` }}></div>
	        					<h3 className="ml-2">John Dorf</h3>
	        				</div>
	        				<span className="text-right">2 weeks ago</span>
        				</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4">
        		<div className="property-wrap">
        			<a href="properties-single.html" className="img" style={{ backgroundImage: `url(${Property})` }}>
        				<div className="rent-sale">
        					<span className="rent">Rent</span>
        				</div>
        				<p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small> / mo</small></span></p>
        			</a>
        			<div className="text">
        				<ul className="property_list">
        					<li><span className="fa fa-bed"></span>3</li>
        					<li><span className="fa fa-bath"></span>2</li>
        					<li><span className="fa fa-home"></span>1,878 sqft</li>
        				</ul>
        				<h3><a href="#">The Blue Sky Home</a></h3>
        				<span className="location">Oakland</span>
        				<a href="#" className="d-flex align-items-center justify-content-center btn-custom">
        					<span className="fa fa-link"></span>
        				</a>
        				<div className="list-team d-flex align-items-center mt-2 pt-2 border-top">
        					<div className="d-flex align-items-center">
	        					<div className="img" style={{ backgroundImage: `url(${Property})` }}></div>
	        					<h3 className="ml-2">John Dorf</h3>
	        				</div>
	        				<span className="text-right">2 weeks ago</span>
        				</div>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4">
        		<div className="property-wrap">
        			<a href="properties-single.html" className="img" style={{ backgroundImage: `url(${Property})` }}>
        				<div className="rent-sale">
        					<span className="rent">Rent</span>
        				</div>
        				<p className="price"><span className="orig-price">$300<small> / mo</small></span></p>
        			</a>
        			<div className="text">
        				<ul className="property_list">
        					<li><span className="fa fa-bed"></span>3</li>
        					<li><span className="fa fa-bath"></span>2</li>
        					<li><span className="fa fa-home"></span>1,878 sqft</li>
        				</ul>
        				<h3><a href="#">The Blue Sky Home</a></h3>
        				<span className="location">Oakland</span>
        				<a href="#" className="d-flex align-items-center justify-content-center btn-custom">
        					<span className="fa fa-link"></span>
        				</a>
        				<div className="list-team d-flex align-items-center mt-2 pt-2 border-top">
        					<div className="d-flex align-items-center">
	        					<div className="img" style={{ backgroundImage: `url(${Property})` }}></div>
	        					<h3 className="ml-2">John Dorf</h3>
	        				</div>
	        				<span className="text-right">2 weeks ago</span>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li><a href="#">&lt;</a></li>
                <li className="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;</a></li>
              </ul>
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

export default Property;