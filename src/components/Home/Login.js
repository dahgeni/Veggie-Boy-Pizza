import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import InputGroup from "../Layout/InputGroup";

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
    login = async (username, password) => {
        const user = {username, password}; 
        try {
            const res = await axios.post("/api/login", user);
            this.props.history.push(`/profile`);
        } catch(err) {
            console.log(err);
            this.setState({
                error: {
                    match: "Username and Password are not matched"
                }
            })
        }
    };

  render() {
      const{username, password, errors} = this.state

    return (
        <div className= "container pt-4">
        <div className="font-white">
            <h1> Existing Customer </h1> 
            <br/>
            <form onSubmit={this.onSubmit}> 
                {errors.match &&(
                <div className="alert alert-danger">
                    The username and password do not match our records; please try again
                </div>
                )}
                
                <div className="form-group">
                    <input className="form-control"
                     name="username"
                      type="text"
                       placeholder="Username" 
                       value={username} 
                    onChange = {this.onChange} />

                </div>
                {errors.username && (
                <div className="alert alert-warning">
                    {errors.username}
                    {errors.match}
                </div> 
                )}

                <div className="form-group">
                    <input 
                    className="form-control" 
                     name="password"
                     type="password" 
                     placeholder="Password"
                     value={password} 
                    onChange={this.onChange} />
                </div>
                {errors.password && ( 
                <div className="alert alert-warning">
                    {errors.password}
                </div>
                )}
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <br />
                <br />
                <Link to= "/register" className="btn btn-dark btn-block">Register</Link>
            </form>
        </div>
        </div>
    );
  }
};
