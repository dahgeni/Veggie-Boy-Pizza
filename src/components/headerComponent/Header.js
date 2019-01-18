import React, { Component } from 'react';
//components
import "../../index.css"
import {Link} from 'react-router-dom';
class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" id="navbar-bg">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" onClick={this.collapse}></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div class="navbar-nav">
            <Link to="/" class="nav-item nav-link">Home</Link>
            <Link to="/menu" class="nav-item nav-link">Menu</Link>
            <Link to="/order" class="nav-item nav-link">Order</Link>
            <Link to="/about" class="nav-item nav-link">About</Link>
            <Link to="/reservation" class="nav-item nav-link">Reservation</Link>
            <Link to="/login" class="nav-item nav-link">Existing Customer</Link>
            <Link to="/register" class="nav-item nav-link">New Customer</Link>
                     <div className="white-font" id="brick">
                  
           <h6>Brick Oven Pizza</h6>
                         <h6>1-800-My- Pizza</h6>
               </div>               
             </div>
          </div>
        </nav>
    );
  }
}

export default Header;
