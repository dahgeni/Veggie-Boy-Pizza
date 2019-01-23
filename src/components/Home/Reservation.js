import React, { Component } from "react";
import axios from "axios"

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      people: 1,
      date: '',
      time: "",
      error: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      this.setState({
        error: "Name can't be empty"
      })
      return;
    }

    if(this.state.email == "") {
      this.setState({
        error: "Please provide a valid email address"
      })
      return;
    }

    if(this.state.people < 1) {
      this.setState({
        error: "Please provide a valid numebr of people"
      })
      return;
    }

    if(this.state.date == "") {
      this.setState({
        error: "Please provide the date"
      })
      return;
    }

    if(this.state.time == "") {
      this.setState({
        error: "Please provide the time"
      })
      return;
    }
    window.$('#pizzaModal').modal('show')
    
    const reservation = {
      name: this.state.name,
      email: this.state.email,
      people: this.state.people,
      date: this.state.date,
      time: this.state.time
    }

    this.addReservation(reservation);

    this.setState({
      name: "",
      email: "",
      people: 1,
      date: '',
      time: "",
      error: ""
    })
  }

  addReservation = (reservation) => {
    axios.post("/api/reservation", reservation);
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <div className="background " id="reservationbg">
        <div className="container">
        {
          this.state.error && 
          <div className="alert alert-danger">{this.state.error}</div>
        }
          <form id="myForm" onSubmit={this.handleSubmit}>
            <div className="font-white">
              <h1> Reserve A Table </h1>
              <br />
              <div className="form-group2">
                <label>First and Last Name</label>
                <input
                  required
                  className="form-control"
                  name="name"
                  placeholder="Enter First and Last Name..."
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group2">
                <label>Email</label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Enter Email..."
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group2">
                <label> Number of People</label>
                <input
                  className="form-control"
                  name="people"
                  type="number"
                  placeholder="How Many Guest ..."
                  value={this.state.people}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group2">
                <label>Desired Date</label>
                <input
                  className="form-control"
                  name="date"
                  type="date"
                  placeholder="Enter Date ..."
                  value={this.state.date}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group2">
                <label>Desired Time</label>
                <input
                  className="form-control"
                  name="time"
                  type="time"
                  placeholder="Enter Time..."
                  value={this.state.time}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              data-toggle="modal"
            >
              Submit
            </button>
            <br />
          </form>
        </div>

        <div
          className="modal fade"
          id="pizzaModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4
                  className="modal-title customColor "
                  id="exampleModalCenterTitle "
                >
                  Veggie Boy Pizza "Reservation" Confirmation
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <h3 className="modal-body">
                Your Table Has Been Reserved. We Appreciate Your Business!
              </h3>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
