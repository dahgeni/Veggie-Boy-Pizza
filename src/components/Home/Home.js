import React, { Component } from 'react'
import "../../index.css"



class Home extends Component {
  render() {
    return (
     
      <div className="background">
        <h1 className="font-white">Welcome To
        <em> Veggie Boy</em> Pizza!</h1>
             
          <div className="container-fluid">
          <div className="rectangle font-white center in-front">
            <h1 align="center"><em>HOME OF  <br /> THE WORLD'S  <br /> FINEST <br /> VEGETARIAN   GOURMET <br /> PIZZA!</em></h1>
           </div>
           </div>
          <div className="circle order">
              <button className="customColor center btn big-font ">Place Order Here!</button>
          </div>
        </div>
       

       

          )

        }
        
      }



export default Home;



