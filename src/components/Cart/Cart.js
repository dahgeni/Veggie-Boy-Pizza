import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './cart.css';



  class Cart extends Component {
  render() {
    return (
      <div className="container">
      <Grid className="purchase-card">
      <div className="white-font">
      <h1>Checkout</h1>

      <br/>
          <div className="row">
         <h3>Items(s)</h3> 
           
      
          Price:
               
                
        Subtoltal 
       
      </div>
      </div>
      <button type="button"className="btn btn-warning big-font"> Delete</button>
      <button type="button"className="btn btn-dark big-font float-left"> Buy Now</button>
             
      </Grid>
       
       
       
      </div>
      
    )
    
  }
}



export default Cart;
