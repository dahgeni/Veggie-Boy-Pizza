import React, { Component } from 'react'
import Axios from 'axios';
import {Link}  from "react-router-dom";
import Footer from "../Layout/Footer";
import InputGroup from "../Layout/InputGroup";

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      errors: {},
      success: false,
      password: ""
    };
  }
    
  onChange = e => {
    this.setState({
    [e.target.name]: e.target.value
  });
}

componentDidMount(){
  this.loggedIn();
}

loggedIn = async ()  => {
  const res = await Axios.post("/api/loggedIn");
   if(res.data === 0) {
    this.props.history.push("/home");
  } else{
      const {username,
         email,
         firstName,
         lastName, 
         password, _id} =
         res.data;

      this.setState({
       username,
       email,
       firstName,
       lastName,
       password,
       _id
    }); 
  }
}


logout = async () => {
    await Axios.post("/api/logout");
    this.props.history.push(`/register`);
}

onSubmit = e => {
  e.preventDefault();
  const {
    username,
     email,
      firstName,
    lastName,
     password,
    _id 
  } = this.state;
    const newUser = {
     _id,
     username, 
     password,
     email,
     firstName,
     lastName
   };
   console.log(newUser)
   this.updateUser(newUser);
}

updateUser = async newUser => {
    await Axios.put("/api/user", newUser)
    this.setState({
      success: true
    });
};

  render() {
    const {
      _id,
      username, 
      email,
       firstName,
        lastName, 
        errors,
         success
    }= this.state;
        
    return (
    <div>
        {/* <nav className="navbar navbar-dark bg-primary fixed-top">
          <Link to="/profile"
          className="navbar-brand">
          <b>Profile</b>
          </Link>         
           {/* <button */}
            {/* className= "btn color-white bg-transparent"
            type="submit"
             form="myForm">
             <i className="fas fa-check"></i>
             </button> */}
      {/* </nav> */}  
       <br/>                   
       <br />
       <br />
        <div style={{paddingTop:'5px'}} className="container">
          <form id="myForm" onSubmit={this.onSubmit}>
              {errors.taken && (
                <div className= "alert alert-danger">
                  {errors.taken}
                </div> 
              )}

               {success && (      
              <div className= "alert alert-success">
              Update Successfully
             </div>
            )}

          
        <InputGroup 
            name="username"
            placeholder="Username"
            value= {username} 
            onChange={this.onChange}
          
        /> 

          {errors.username && (
          <div className= "alert alert-warning">
            {errors.username}
          </div>
          )}
         
        <InputGroup 
            name="email"
            placeholder="Email"
            value= {email} 
            onChange={this.onChange}
          
        /> 

         <InputGroup 
            name="firstName"
            placeholder="firstName"
            value= {firstName} 
            onChange={this.onChange}
          
        /> 
        <InputGroup 
            name="lastName"
            placeholder="lastName"
            value= {lastName} 
            onChange={this.onChange}
          
        /> 

           <Link to={`/`}
           className="btn btn-primary btn-block">Home</Link>
          <Link to=
          "login"
           className="btn btn-dark btn-block"
           onClick = {this.logout}
          >
          Logout
          </Link>
           <br />
           <button
            className= "btn color-white bg-dark"
            type="submit"
             form="myForm">
             <i className="fas fa-check"></i> Update
             </button>
          </form>
        </div> 
         
        <Footer />   
      </div>
       
    );
  }
}
