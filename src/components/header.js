import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled awake" id="ftco-navbar">
          <div className="container">
            <NavLink  to="/" className="navbar-brand">Buy Homes</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                <li className="nav-item"><NavLink to="/property" className="nav-link">Show Homes</NavLink></li>
                <li className="nav-item"><NavLink to="/service" className="nav-link">Services</NavLink></li>
                <li className="nav-item"><NavLink to="/lot" className="nav-link">Find Lot</NavLink></li>
                <li className="nav-item"><NavLink to="/admin" className="nav-link">Admin</NavLink></li>
                <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;