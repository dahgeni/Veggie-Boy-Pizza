import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import InputGroup from "../Layout/InputGroup";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            verifyPassword: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({
        [e.target.name]: e.target.value
    });
}

    onSubmit = e=> {
        const {
            username,
             password,
              verifyPassword}= this.state;

        e.preventDefault();
            if(username === "") {
            this.setState({
                errors: {
                     username: "Username is required"}
    });
            return;
        }
        if(password === "") {
            this.setState({
                errors: {
                     password: "Password is required"}
    });
            return;
        }
        if(verifyPassword === "") {
            this.setState({
                errors: { 
                    verifyPassword:
                     "You need to verify the password"}
    });
            return;
        }
        if(password !== verifyPassword){
            this.setState({
                errors: {
                    match:
                     "Two passwords are not matched, please try again"                
                }
            });
        }
           
        this.register(username, password);
    };

    async register(username, password) {
        // check if username is taken
        const res = await axios.get(`/api/user?username=${username}`)
       if(res.data) {
           this.setState({
               errors: {
                   taken: "This username is taken, please try another one"}
           });
       } else {
           const user = {username, password};
           await axios.post("/api/register", user);
           this.props.history.push(`/profile`);
       }
    }

  render() {
      const {errors, username,password, verifyPassword} =
      this.state

    return (
    <div className="container font-white">
        <h1>New Customer</h1>
        <form onSubmit= {this.onSubmit}>
            {errors.taken && (
            <div  className= "alert alert-danger">
            {errors.taken}
    </div>
        )}

            {errors.match && (
            <div className= "alert alert-danger">
            {errors.match}
    </div>
        )}

        
        <InputGroup 
            name="username"
            placeholder="Username"
            value= {username} 
            onChange={this.onChange}
          
        /> 
        <div/>
            {errors.username && (
        <div className= "alert alert-warning">
            {errors.username}
        </div>
        )} 

        <InputGroup
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.onChange}
            
        /> 
        <div/>
            {errors.password && (
        <div className= "alert alert-warning">
               {errors.password}
        </div>
        )}

        <InputGroup
            name="verifyPassword"
            placeholder="Verify Password"
            type="password"
            value={verifyPassword}
            onChange={this.onChange}
            
        />
        <div/>
            {errors.verifyPassword && (
        <div className= "alert alert-warning">
            {errors.verifyPassword}
        </div>
        )}

        <button type = "submit" className=
            "btn btn-primary btn-block">
            Register       
       </button>
       <br />
       <br />
            <Link to= "/login" className=
                "btn btn-dark btn-block">
                Cancel
            </Link>
        </form> 
    </div>
    )
  }
}
