import React, { Component } from 'react';
import Home from '../Home/Home';
import Register from '../Home/Register';
import About from '../pages/About';
import Login from '../Home/Login';
import {Link} from "react-router-dom"



 class Menu extends Component {
  render() {
    return (
  <div className="container">
         <div id="tickerwrap">
    <marquee id="ticker">
        Welcome to Veggie Boy Pizza. We make the best pizza 
        </marquee>
  </div>

<h1>The Menu</h1>
<h4>Pepper Pizza</h4>
<Link to ="../../components/Home/Order" className="float-right">Order Now</Link>
< img src={require( "../../images/pepper.jpg")} alt= "pepper pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The pepper topped pizza is mighty tasty. You can have it for $8.99

    </p>
    <hr/> 


<br/>
<h4>Cheese Pizza</h4>

<Link to ="../../components/Home/Order" className="float-right">Order Now</Link>
< img src= {require ("../../images/cheesepizza.jpg")} alt= "cheese pizza" width="200" height="150"/>
 
<hr/>
<div>
    <p>
        Our three cheese topped pizza is amazing. Enjoy it for $8.99
    </p>
    <hr/>
</div>


<br/>
<h4>Onion Pizza</h4>
<Link to ="../../components/Home/Order" className="float-right">Order Now</Link>
< img src= {require( "../../images/onion.jpg")} alt= "onion pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The one and only onion pizza is very delicious. Have one  for $8.99
    </p>
    <hr/>
</div>

<br/>
<h4>Mushroom Pizza</h4>
<Link to ="../../components/Home/Order" className="float-right">Order Now</Link>
<img src={require("../../images/mushroom.jpg")} alt="mushroom pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        Our mushroom topped pizza is all the rage. Enjoy it for $8.99
    </p>
    <hr/>
</div>

<br/>
      </div>
  </div>
    )
  }
}

export default Menu;