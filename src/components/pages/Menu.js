import React, { Component } from 'react';
import Home from '../Home/Home';
import Register from '../Home/Register';
import About from '../pages/About';
import Login from '../Home/Login';



 class Menu extends Component {
  render() {
    return (
  <div className="container-fluid font-white">
         <div id="tickerwrap">
    <marquee id="ticker">
        Welcome to Veggie Boy Pizza. We make the best pizza 
        </marquee>
  </div>

<h1>The Menu</h1>
<h4>Pepper Pizza</h4>
< img src={require( "../../images/pepper.jpg")} alt= "pepper pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The pepper topped pizza is mighty tasty. You can have it for $8.99

    </p>
    <hr/> 
    <button className="onClick"> Order Now</button>
  
<br/>
<h4>Cheese Pizza</h4>

< img src= {require ("../../images/cheesepizza.jpg")} alt= "cheese pizza" width="200" height="150"/>
 
<hr/>
<div>
    <p>
        Our three cheese topped pizza is amazing. Enjoy it for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>

<br/>
<h4>Onion Pizza</h4>
< img src= {require( "../../images/onion.jpg")} alt= "onion pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The one and only onion pizza is very delicious. Have one  for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>
<br/>
<h4>Mushroom Pizza</h4>
<img src={require("../../images/mushroom.jpg")} alt="mushroom pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        Our mushroom topped pizza is all the rage. Enjoy it for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>
<br/>
<h4>Barbecue Pizza</h4>
< img src= {require( "../../images/barbecued.jpeg")} alt= "barbecue pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The one and only barbecue pizza is very delicious. Have one  for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>
<br/>
<h4>Brickoven Pizza</h4>
< img src= {require( "../../images/brickoven.jpg")} alt= "brickoven pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The one and only brickoven pizza is very delicious. Have one  for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>
<br/>
<h4>Heart Shaped Pizza</h4>
< img src= {require( "../../images/heart-shaped-pizza.jpg")} alt= "heartshaped pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The one and only heart shaped pizza is very delicious. Have one  for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>
<br/>
<h4>Flat Bread Delight Pizza</h4>
< img src= {require( "../../images/flatbreaddelight.jpg")} alt= "flat bread pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The one and only flat bread pizza is very delicious. Have one  for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>
<br/>
<h4>Pesto Pizza</h4>
< img src= {require( "../../images/pesto.jpg")} alt= "pesto pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The one and only pesto pizza is very delicious. Have one  for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>
<br/>
<h4>Pizza Board Pizza</h4>
< img src= {require( "../../images/pizzaboard.jpg")} alt= "pizza board pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The one and only pizza board pizza is very delicious. Have one  for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>
<br/>
<h4>Simply Veggie Pizza</h4>
< img src= {require( "../../images/simplyveggie.jpeg")} alt= "simply veggie pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The one and only simply veggie pizza is very delicious. Have one  for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>
<br/>
<h4>Spinach Pizza</h4>
< img src= {require( "../../images/spinach.jpg")} alt= "spinach pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The one and only spinach pizza is very delicious. Have one  for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>
<br/>
<h4>Zucchini Goat Cheese Pizza</h4>
< img src= {require( "../../images/zucchinigoatcheese.jpg")} alt= "zucchini goat cheese pizza" width="200" height="150"/>
<hr/>
<div>
    <p>
        The one and only zucchini Goat Cheese pizza is very delicious. Have one  for $8.99
    </p>
    <hr/>
</div>
<button className="onClick"> Order Now</button>
      </div>
  </div>
    )
  }
}

export default Menu;