import React from 'react'
import "../../index.css"
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Register from '../Home/Register';
import About from './About';
import Login from '../Home/Login';

const ThankYou = () => {
  return (
    <div>
      <img src="https://rlv.zcache.co.uk/a_stylish_thank_you_heart_stickers-rb9688721e9304d09b74ad9d14b2eeda8_v9w0n_8byvr_307.jpg?rvtype=content"
        height="400" width="1100"></img>
      <br/>
      <br/>
      < a className="btn btn-secondary btn-block">Thank You</a>
      <button className="btn btn-success btn-block">Logout</button>
      <br />
    </div>
  )
}



export default ThankYou
