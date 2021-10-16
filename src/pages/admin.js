import React, { Component } from 'react';
import AddProperty from './dashboard/add-property';
import Header from '../components/header';
import { Switch, Route, NavLink } from 'react-router-dom';
import AddLot from './dashboard/add-lot';
import ListProperty from './dashboard/list-property';
import ListLot from './dashboard/list-lot';
import ListUser from './dashboard/list-user';
import AddCities from './dashboard/add-cities';

import 'antd/dist/antd.css';

class Admin extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="admin-pannel">
          <div className="admin-sidebar">
            <div className="form-group form-padding">
              <NavLink to="/admin">
                <input type="button" value="Add New Property" className="btn btn-primary py-3 px-5 full-width" />
              </NavLink>
            </div>
            <div className="form-group form-padding">
              <NavLink to="/admin/add-city" activeClassName="active-side-btn">
                <input type="button" value="Add New City" className="btn btn-primary py-3 px-5 full-width" />
              </NavLink>
            </div>
            <div className="form-group form-padding">
              <NavLink to="/admin/add-lot" activeClassName="active-side-btn">
                <input type="button" value="Add New Lot" className="btn btn-primary py-3 px-5 full-width" />
              </NavLink>
            </div>
            <div className="form-group form-padding">
              <NavLink to="/admin/property" activeClassName="active-side-btn">
                <input type="button" value="List All Property" className="btn btn-primary py-3 px-5 full-width" />
              </NavLink>
            </div>
            <div className="form-group form-padding">
              <NavLink to="/admin/lot" activeClassName="active-side-btn">
                <input type="button" value="List All Lot" className="btn btn-primary py-3 px-5 full-width" />
              </NavLink>
            </div>
            <div className="form-group form-padding">
              <NavLink to="/admin/users" activeClassName="active-side-btn">
                <input type="button" value="List All Users" className="btn btn-primary py-3 px-5 full-width" />
              </NavLink>
            </div>

          </div>
          <div className="admin-content">
            <Switch>
              <Route path="/admin" exact component={AddProperty}></Route>
              <Route path="/admin/add-city" exact component={AddCities}></Route>
              <Route path="/admin/add-lot" component={AddLot}></Route>
              <Route path="/admin/property" component={ListProperty}></Route>
              <Route path="/admin/lot" component={ListLot}></Route>
              <Route path="/admin/users" component={ListUser}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;