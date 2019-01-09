import React, { Component } from 'react';
//components
import "../../index.css"
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
          <ul className="menu-ul pt-3">
          <li><Link to= "/"><h4>Home</h4></Link></li>
           <li><Link to= "/menu"><h4>Menu</h4></Link></li>
           <li><Link to= "/about"><h4 >Order</h4></Link></li>
            <li><Link to= "/about"><h4>About</h4></Link></li>
        </ul>
          <ul className="menu-ul2 pt-3">
          <li><Link to="/login"><h4>Existing Customer</h4></Link></li>
          <li><Link to="/login"><h4>New Customer</h4></Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
