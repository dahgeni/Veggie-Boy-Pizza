import React, { Component } from 'react';
//components
import "../../index.css"
import {Link} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" id="navbar-bg">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
         data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
         aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/menu" className="nav-item nav-link">Menu</Link>
            <Link to="/order" className="nav-item nav-link">Order</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/login" className="nav-item nav-link">Existing Customer</Link>
            <Link to="/register" className="nav-item nav-link">New Customer</Link>
                     <div className="white-font" id="brick">
                  
           <h4>Brick Oven Pizza</h4>
                         <h4>1-800-My- Pizza</h4>
               </div>               
             </div>
          </div>
        </nav>
    );
  }
}

export default Header;