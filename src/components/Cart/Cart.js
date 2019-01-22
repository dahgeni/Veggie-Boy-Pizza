import React, { Component } from 'react'
import '../Cart/cart.css'

 class Cart extends Component {
  render() {
    return (
      <div>
          <div className="container">
        <h1>Pizza Checkout </h1>
        <br />
        <div className="shoppingCart">
        <div className="container">
        <button
          type=" button">Cart:  
          <span cart= "true"></span><span id="itemCount">0</span>
          </button>
          </div>
         </div>
         </div> 
        </div>

        <div className="container">
        <div className="row">
        <div className="col">
        Item
        </div>
        <div className="container">
        <div className="row">
        <div className="col">
        Price
        </div>

        <div className="container">
        <div className="row">
        <div className="col">
        Total
        </div>
        </div>
        </div>
        </div>
       
                  
        
        </div>
             
        </div>
        </div>
       
        
        
       

      
   
   
    )
  }
  
}
export default Cart;