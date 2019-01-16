import React, { Component } from 'react'

    class Reservation extends Component {
  render() {
    return (
      
      <div className="background " id="reservationbg">
        <div className= "container"> 
          <div className="font-white">
            <h1> Reserve A Table </h1> 
            <br/>     
            <div className="form-group2">
              <label>First and Last Name</label>
              <input required class="form-control" name="name" placeholder="Enter First and Last Name..."  /> 
            </div>
            <div className="form-group2">
              <label>Email</label>
              <input class="form-control" name="email" placeholder="Enter Email..." />
            </div>
            <div className="form-group2">             
              <label> Number of People</label>
              <input className="form-control" name="How Many People"  placeholder="How Many Guest ..." />
            </div>
            <div className="form-group2">
              <label>Desired Date</label>
              <input className="form-control" name="date"  placeholder="Enter Date ..." />
            </div>
            <div className="form-group2">
              <label>Desired Time</label>
              <input className="form-control" name="time" placeholder="Enter Time..." />
            </div>
             <br />
             <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#pizzaModal">
              Submit
            </button>
            <br />
         </div>
        </div>
        <div class="modal fade" id="pizzaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title customColor " id="exampleModalCenterTitle ">Veggie Boy Pizza "Reservation" Confirmation</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h3 className="modal-body" >
                Your Table Has Been Reserved. We Appreciate Your Business!
              </h3>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Reservation;