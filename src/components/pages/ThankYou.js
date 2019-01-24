import React from 'react'
import "../../index.css"
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Register from '../Home/Register';
import About from './About';
import Login from '../Home/Login';

const ThankYou = () => {
  return (
    <img src="https://thumbs.dreamstime.com/z/thank-you-card-bright-colors-stylish-floral-background-text-berries-leaves-flower-46494488.jpg"
      height="500" width="800"></img>
<div>

    < a className="btn btn-primary btn-block">Websites</a>
    <button class="btn btn-danger btn-block">Logout</button>
    <br />
    <a className="btn btn-outline-dark" routerLink="/user-list">User List</a>
  
</div >
<div>
  <nav className="navbar navbar-dark bg-primary fixed-bottom">
    <div className="full-width">
      <a className="color-white float-right">
        <i className="fas fa-user" />
      </a>
    </div>
  </nav>
</div>
  )
}



export default ThankYou
