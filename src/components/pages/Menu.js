import React, { Component } from 'react';
import "../../index.css";
import axios from 'axios';
import {Link} from "react-router-dom";




class Menu extends Component {
   
    pizzaCollection = [
    {
    "id": "0",
    "title": "Peppers",
    "image": "../../images/pepper.jpg",
    "price": "15.99",

    },
    {
    "id": "1",
    "title": "cheese",
    "image": "../../images/cheesepizza.jpg", 
    "price": "15.99",
    
     },
     {
    "id": "2",
    "title": "onion",
    "image": "../../images/onion.jpg", 
    "price": "15.99",
        
         },
         
     {
    "id": "3",
    "title": "mushroom",
    "image": "../../images/mushroom.jpg",
    "price": "15.99",  
     },
     {
    "id": "4",
    "title": "barbecue",
    "image": "../../images/barbecued.jpeg",
    "price": "15.99",  
         },
    ]

      
     
       
        
    



      
    render() {
        return (
            <div className="font-white-menu">
                <div className="container-fluid">
                    <div id="tickerwrap">
                        <marquee id="ticker">
                            Welcome to Veggie Boy Pizza. We make the best pizza
                    </marquee>
                    </div>
                    <h1>The Menu</h1>

                </div>
              
                <div className="container">

                <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>
                    <h4>Pepper Pizza</h4>
                    < img src={require("../../images/pepper.jpg")} alt="pepper pizza" width="200" height="150" />
                    <hr />
                    <div>
                        <p>
                            Contrary to popular belief, pizza can be a healthy dish.
                             Adding vegetables like bell peppers, which are the best source of vitamin C,
                             boosts your veggie intake. Additionally, if you choose reduced-fat or fat-free
                             cheese you cut back on fat and still get a boost of calcium.
                                The pepper topped pizza is mighty tasty. You can have it for $15.99
                    </p>
                        <hr />
                       
                        <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>
                        <br />                       
                        <h4>Cheese Pizza</h4>
                        < img src={require("../../images/cheesepizza.jpg")} alt="cheese pizza" width="200" height="150" />

                        <hr />
                        <div>
                            <p>
                                Easy homemade dough, stretched into a perfect crust and topped off
                                 with not one or even two but three varieties of cheese. More cheese is always a good thing.
                                    Our three cheese topped pizza is amazing. Enjoy it for $15.99
                    </p>
                            <hr />
                        </div>
                        
                        <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>
                        <br />
                        <h4>Onion Pizza</h4>
                        < img src={require("../../images/onion.jpg")} alt="onion pizza" width="200" height="150" />
                        <hr />
                        <div>
                            <p>
                                Be bold and add extra layers of savory flavor with our onion Flavored Crust®
                                to your favorite pizza
                                    The one and only onion pizza is very delicious. Have one  for $15.99
                        </p>
                            <hr />
                        </div>                      
                        <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>
                        <br />
                        <h4>Mushroom Pizza</h4>
                        <img src={require("../../images/mushroom.jpg")} alt="mushroom pizza" width="200" height="150" />
                        <hr />
                        <div>
                            <p>
                                Doubling the mushroom with a cooked duxelles and
                                sliced mushrooms means more mushroom flavor in every bite.
                                    Our mushroom topped pizza is all the rage. Enjoy it for $15.99
                        </p>
                            <hr />
                        </div>
                        <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>
                        <br />
                        <h4>Barbecue Pizza</h4>
                        < img src={require("../../images/barbecued.jpeg")} alt="barbecue pizza" width="200" height="150" />
                        <hr />
                        <div>
                            <p>
                                Fresh out of the oven, this pizza takes you away, always consistent,
                                always the perfect pie!!! You can truly taste the difference in this pie,
                                 from the crust to the sauce,
                                    The one and only barbecue pizza is very delicious. Have one  for $15.99
                        </p>
                            <hr />
                        </div>
                        <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>
                        <br />
                        <h4>Olive Pizza</h4>
                        < img src={require("../../images/olive pizza.jpg")} alt="olive pizza" width="200" height="150" />
                        <hr />
                        <div>
                            <p>
                                Pizza is a favorite for everyone around the world and with so many topping combinations,
                                it can also be enjoyed by vegetarians. The variations of vegetarian pizza are endless,
                                 especially if combined with any of our signature Flavored Crust®.
                                The one and only olive pizza is very delicious. Have one  for $15.99
                        </p>
                            <hr />
                        </div>
                       
                    }
                        <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>   
                        <br />
                        <h4>Heart Shaped Pizza</h4>
                        < img src={require("../../images/heart-shaped-pizza.jpg")} alt="heartshaped pizza" width="200" height="150" />
                        <hr />
                        <div>
                            <p>
                                With Valentines Day around the corner,
                                These Heart Shaped Pizzas with Heart Shaped Pepperoni are perfect for Valentine’s Day!
                                    The one and only heart shaped pizza is very delicious. Have one  for $15.99
                        </p>
                            <hr />
                        </div>
                        <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>
                        <br />
                        <h4>Flat Bread Delight Pizza</h4>
                        < img src={require("../../images/flatbreaddelight.jpg")} alt="flat bread pizza" width="200" height="150" />
                        <hr />
                        <div>
                            <p>
                                My favorite thin crust pizza dough ever is thin but still perfectly foldable with
                                a tasty and slightly crispy crust! An easy weeknight pizza with minimal ingredients
                                and no waiting for the dough to rise!  This favorite recipe of mine makes not one,
                                 but two pizza crusts so you can have one now and another easy weeknight meal later.
                                    The one and only flat bread pizza is very delicious. Have one  for $15.99
                       </p>
                            <hr />
                        </div>
                        <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>
                        <br />
                        <h4>Pesto Pizza</h4>
                        < img src={require("../../images/pesto.jpg")} alt="pesto pizza" width="200" height="150" />
                        <hr />
                        <div>
                            <p>
                                The healthier, whole-wheat base in this pizza will keep your belly feeling fuller
                                longer than typical pie. And in lieu of traditional marinara sauce,
                                 pesto is full of heart-healthy fats from olive oil and pine nuts.
                                    The one and only pesto pizza is very delicious. Have one  for $15.99
                       </p>
                            <hr />
                       </div>                                                  
                    <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>
                    </div>
                    <br />
                    <h4>Simply Veggie Pizza</h4>
                    < img src={require("../../images/simplyveggie.jpeg")} alt="simply veggie pizza" width="200" height="150" />
                    <hr />
                    <div>
                        <p>
                            Fresh out of the oven, this pizza takes you away, always consistent,
                             always the perfect pie!!! You can truly taste the difference in this pie,
                             from the crust to the sauce,
                                The one and only simply veggie pizza is very delicious. Have one  for $15.99
                   </p>
                        <hr />
                    </div>
                    <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>
                    <br />
                    <h4>Spinach Pizza</h4>
                    < img src={require("../../images/spinach.jpg")} alt="spinach pizza" width="200" height="150" />
                    <hr />
                    <div>
                        <p>
                            Easy White Spinach Pizza. This Spinach Pizza has a tender crust ,
                             topped with garlic infused olive oil, a mix of creamy ricotta, spinach, and herbs.
                              And then finished with sharp Parmesan cheese and mozzarella.
                              It is a bite of Florentine meets America.
                                The one and only spinach pizza is very delicious. Have one for $15.99
                   </p>
                        <hr />
                    </div>
                    <Link to="/Cart" className="onClick btn float-right btn-light"> Order Now</Link>
                    <br />
                    <h4>Zucchini Goat Cheese Pizza</h4>
                    < img src={require("../../images/zucchinigoatcheese.jpg")} alt="zucchini goat cheese pizza" width="200" height="150" />
                    <hr />
                    <div>
                        <p>
                            Zucchini Pizza fully loaded with sausage, mushrooms, peppers and olives,
                            it’s a lower-carb, lower-calorie way to enjoy pizza and sneak some extra veggies into your diet.
                                The one and only zucchini Goat Cheese pizza is very delicious. Have one  for $15.99
                    </p>
                   
                        <hr />
                       
                    </div>
                    
                </div>
               
                </div>

                              
        );
      }          
    }

export default Menu;