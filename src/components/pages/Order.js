import React from 'react'
import "../../index.css"
import {Link} from 'react-router-dom'; 
import Home from '../Home/Home';
import Register from '../Home/Register';
import About from './About';
import Login from '../Home/Login';

const Order = () => {
  return (
    <div className="container1">
      <h1 color="heavy">ThankYou</h1>
      <p>Your order will be ready and delivered</p>
      <h3 className="container3">HOT</h3>
      <p className="container3">in 30 minutes</p>
      <h3>Please enjoy</h3>
      <h4>Order again soon !</h4>


    </div>
  )
}

export default Order
