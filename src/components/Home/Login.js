import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import InputGroup from "../layout/InputGroup";

export default class Login extends Component {


  constructor(props){
        super(props);
        this.state= {
            username: "",
            password:"",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({
        [e.target.name]: e.target.value
    });
 }

 onSubmit= e => {

    const {username, password} = this.state


    e.preventDefault();
    if(this.state.username === "") {
        this.setState({
        errors: {username: "Username is required"}
       });

       return;
    }

    if(this.state.password ===""){
        this.setSate({
            errors: {password: "Password is required"}
        });

        return;
    }
   this.login(username, password);
}
   login =async(username, password) => {
        const user = {
            username,
            password
        };
        try {
            await axios.post("/api/login", user);
            this.props.history.push("/profile");
        } catch {
            this.setState({
                errors: {
                    match: "Username and Password are not matched"
                }
            })
        }
    };
 
     
  render() {
      const{username, password, errors} = this.state

    return (
    <div className="container font-white login">
        <h1>Existing Customer</h1>
        <br />
        <form onSubmit={this.onSubmit}>
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
            {errors.username && (
            <div className= "alert alert-warning">
                {errors.username}
            </div>
            )}


            <InputGroup
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.onChange}
            
            />

            {errors.password && (
            <div className= "alert alert-warning">
            {errors.password}
            </div>
            )}
            
            <button type= "submit" className="btn btn-primary btn-block">
                Login
            </button>

            <button className="btn btn-danger btn-block">
                <Link style={{color: 'white'}} to='/register'>Register</Link>
            </button>

            {/* <Link to="/register"
            className="btn btn-success btn-block">Register
            </Link> */}
        </form>
    </div>
    
    );
  }
};
