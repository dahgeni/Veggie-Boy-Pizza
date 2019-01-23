import React, { Component } from 'react'



 class Footer extends Component {
  render() {
    return (
      
      <div classname="container-fluid">
        <ul className="nav fixed-bottom footer">
            <li className="nav-item">
            <h5 className="nav-link white-font" >Veggie Boy Pizza Inc.</h5>
            </li>
            <li className="nav-item center-word">
            <h5 className="nav-link white-font ">Webmaster Powered By: Pizza International</h5>
            </li>
            <li className="nav-item center">
            <h5 className="nav-link white-font ">1-800-697-4992</h5>
            </li>
              <li className= "list-item">
           
               <img className="nav-link" id="credit-image" src={require("../../images/creditcardlogos.png")}alt="credit"/>
            </li>
        </ul>
       </div>
       
    );
  }
}

export default Footer;
