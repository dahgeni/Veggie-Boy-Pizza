import React, { Component } from 'react'
import "../../index.css"
import {Link} from 'react-router'




class Home extends Component {
  render() {
    return (
     
      <div className="background">
                         
          <div className="white-font pt-4">
          <h1>Welcome To <i>Veggie Boy Pizza!</i></h1>

          <div className="rectangle font-white center in-front">
            <h1 align="center"><i>HOME OF  <br /> THE WORLD'S  <br /> FINEST <br /> VEGETARIAN   GOURMET <br /> PIZZA!</i></h1>
            </div>
            </div>
       
           <div className="container-fluid">
          <div className="circle order">
              <button className="customColor center btn big-font "> Place Order Here!</button>
          </div>
          </div> 
          </div>
            
          

          )

        }
        
      }



export default Home;



