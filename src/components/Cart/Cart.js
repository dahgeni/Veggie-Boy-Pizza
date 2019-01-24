import React, { Component } from 'react';


import './cart.css';



  class Cart extends Component {
  render() {
    return (
      <div className="container">
      <div className="purchase-card">
      <div className="white-font">
      <h1>Checkout</h1>
    

      <br/>
        <div className="white-font">
        <div className="row-4 p-row">
         
        <h3>Items(s)</h3>
      
        </div>  
      <div className="row my-row"> 
      <div className="col-6 my-col">
              <h4>Price:</h4>
           
        </div>
        </div>
       <div className="row my-row">     
      <div className="col-6 my-col">                  <h4>Subtotal:</h4> 
          </div>
      </div>
       
   
     </div>
      </div>
      </div>
      <br />
     
     
      
      <button type="button"className="btn btn-warning big-font"> Delete</button>
      <button type="button"className="btn btn-dark big-font float-left"> Buy Now</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
   
      <button type="button" className="btn btn-light" ><h4>Logout</h4></button>

      </div>
    
     
    



       
     
     
      
      
    
      
    )
    
  }
}



export default Cart;
