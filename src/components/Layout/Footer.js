import React, { Component } from 'react'


 class Footer extends Component {
  render() {
    return (
        <ul className="nav fixed-bottom footer">
            <li className="nav-item">
            <h5 className="nav-link" >Veggie Boy Pizza Inc.</h5>
            </li>
            <li className="nav-item">
            <h5 className="nav-link">Webmaster Powered By Pizza Junkies International</h5>
            </li>
            <li className="nav-item">
                <img className="nav-link" id="credit-image" src={require("../../images/creditcardlogos.png")}alt="credit"/>
            </li>
        </ul>
    );
  }
}

export default Footer;
