import React, { Component } from 'react'


 class Footer extends Component {
  render() {
    return (
        
        <ul className="nav fixed-bottom footer">
            <li className="nav-item">
            <h5 className="nav-link white-font" >Veggie Boy Pizza Inc.</h5>
            </li>
            <li className="nav-item">
            <h5 className="nav-link white-font">Webmaster Powered By: Pizza International</h5>
            </li>
              <li className= "list-item" id="move">
           
               <img className="nav-link" id="credit-image" src={require("../../images/creditcardlogos.png")}alt="credit"/>
            </li>
        </ul>
       
       
    );
  }
}

export default Footer;
