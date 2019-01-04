import React, { Component } from 'react';
//components
import "../../index.css"
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <ul className="menu-ul">
          <li><Link to= "/home"><h3>Home</h3></Link></li>
          <li><Link to= "/menu"><h3>Menu</h3></Link></li>
          <li><Link to= "/login"><h3>Existing Customer</h3></Link></li>
          <li><Link to= "/register"><h3>New Customer</h3></Link></li>
          <li><Link to= "/about"><h3>About Us</h3></Link></li>
          <li><Link to= "/about"><h3>Order</h3></Link></li>


         </ul>

      </div>
    );
  }
}

export default Header;
