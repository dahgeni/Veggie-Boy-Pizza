import React, { Component } from 'react'
import Footer from '../Layout/Footer'
import "../../index.css"



class Home extends Component {
  render() {
    return (
        
      <div className="background">
        <h1 className="font-white">Welcome To
        <em> Veggie Boy</em> Pizza!</h1>
        <div className="container-fluid">
        <div className="circle order">
          <button className="customColor center btn big-font ">Place Order Here!</button>
        </div>
      </div>

      <Footer />
      </div>
    )
  }
  
}



export default Home;



