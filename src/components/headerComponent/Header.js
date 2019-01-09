import React, { Component } from 'react';
//components
import "../../index.css"
import {Link} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark" id="navbar-bg">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" class="nav-item nav-link">Home</Link>
            <Link to="/menu" class="nav-item nav-link">Menu</Link>
            <Link to="/order" class="nav-item nav-link">Order</Link>
            <Link to="/about" class="nav-item nav-link">About</Link>
            <Link to="/login" class="nav-item nav-link">Existing Customer</Link>
            <Link to="/register" class="nav-item nav-link">New Customer</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
