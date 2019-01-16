import React, { Component } from 'react'
import "../../index.css"
import {Link} from 'react-router-dom'




class Home extends Component {
  render() {
    return (
      <div className="background">
        <div className="container-fluid">
          <br/>
          <h1 className="title mb-5 white-font">Welcome To Veggie Boy Pizza!</h1>
          <br/>
          <br/>
          <div className="row mt-5">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
              <div className="rectangle" align="center">
                <h1 className="font-white no-padding" align="center">
                  HOME OF  <br /> THE WORLD'S  <br /> FINEST <br /> VEGETARIAN   GOURMET <br /> PIZZA!
                </h1>
              </div>
            </div>
            <div className="col-md-3">
              <div className="circle">
                <Link to="menu" className="customColor btn big-font"> Place Order Here!</Link>
              </div>
            </div>
          </div>
          
          
          
        </div>
      </div> 
    )        
  }
}



export default Home;



