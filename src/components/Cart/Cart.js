import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./cart.css";

class Cart extends Component {
constructor(props) {
  super(props);
  this.state = {

 

  }
}



  render() {
    return (
     
      <div className="container">
        <div className="purchase-card">
          <div className="white-font">
            <h1>Checkout</h1>

            <br />
            <div className="container-fluid">
              <div className="white-font">
                <div className="row-8 p-row">
                  <h3>Items(s)</h3>
                </div>
                <div className="row my-row">
                  <div className="col-6 my-col">
                    <h4>Price:</h4>
                  </div>
                </div>
                <div className="row my-row">
                  <div className="col-6 my-col">
                    {" "}
                    <h4>Subtotal:</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <button type="button" className="btn btn-warning big-font">
            {" "}
            Delete
          </button>
          <Link to="thankyou" className="btn btn-dark big-font float-left">
            {" "}
            Buy Now
          </Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Link to="login" className="btn btn-light float-left">
            {" "}
            <h4>logout</h4>
          </Link>
        </div>
      </div>
     
    );
  }
}

export default Cart;
