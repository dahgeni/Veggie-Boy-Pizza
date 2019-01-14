import React, { Component } from 'react'

    class Reservation extends Component {
  render() {
    return (
      <div className="background " id="reservationbg">
      <div className= "container"> 
      <div className="font-white">
      <h1> Reserve A Table </h1> 
      <br/>     
     <div className="form-group">
         <label>First and Last Name</label>
         <input required class="form-control"        name="name"
         placeholder="Enter First and Last Name..."  /> 
     </div>
                   
     <div className="form-group">
         <label>Email</label>
         <input class="form-control" name="email" placeholder="Enter Email..." />
     </div>
     <div className="form-group">
         <label> Number of People</label>
         <input className="form-control" name="How Many People"  placeholder="How Many Guest ..." />
     </div>
     <div className="form-group">
         <label>Desired Date</label>
         <input className="form-control" name="date"  placeholder="Enter Date ..." />
     </div>

     <div className="form-group">
         <label>Desired Time</label>
         <input class="form-control" name="lastName"  placeholder="Enter Time..." />
     </div>
                   
     <button className="btn btn-danger btn-dark">Submit</button>
     <br />
     </div>
     </div>
     </div>
    )
  }
}


export default Reservation;