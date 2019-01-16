import React, { Component } from 'react'

 class ProfileEdit extends Component {
  render() {
    return (
       
        <div className="container">
            <form  id="myForm">
                <div className="alert alert-danger">
                  
                </div>
                <div class="alert alert-success">
                   
                </div>
           
                <div className="form-group">
                    <label><b>Username</b></label>
                    <input required class="form-control"        name="username"
                    placeholder="Update Username..."  /> 
                </div>
                <div class="alert alert-warning"> </div>
           
                <div className="form-group">
                    <label><b>Email</b></label>
                    <input class="form-control" name="email" placeholder="Update Email..." />
                </div>
           
                <div className="form-group">
                    <label><b>First Name</b></label>
                    <input className="form-control" name="firstName"  placeholder="Update First Name..." />
                </div>
           
                <div className="form-group">
                    <label><b>Last Name</b></label>
                    <input class="form-control" name="lastName"  placeholder="Update Last Name..." />
                </div>
           
                < a className="btn btn-primary btn-block">Update</a>
                <button class="btn btn-danger btn-block">Logout</button>
                <br />
                <a  className="btn btn-outline-dark" routerLink="/user-list">User List</a>
            </form>
        </div>
   
            
    )
   }
}
  






export default ProfileEdit;