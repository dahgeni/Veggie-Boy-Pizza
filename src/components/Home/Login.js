import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {axios} from "axios";

export default class Login extends Component {
    constructor(props) {
    super(props);
    this.state= {
        username: "",
        password: "",
        errors: {}
     };  
    
     } 
    
    
    onChange = e => {
   
        this.setState({
            [e.target.name]: e.target.value

        });
    }

    onSubmit = e => {
        const {username, password} =this.state
        e.preventDefault();
        if(this.state.username === '') {
            this.setState({
                errors: { username: "Username is Required" }
            });
            return;
        }
        if (password === "") {
                this.setState({
                    errors: { password: "Password is Required"}
                });
                return;
    
        }
        this.login(username, password)
    };
  login = async (username, password) => {
   const user = {username, password
    }; 
    try {
        const res= await axios.post("/api/login", user);
        this.props.history.push(`/user/${res.data._id}`);
    }catch {
        this.setState({
        error: {
            match: "Username and Password are not matched"
        }
      })
    }
};

  render() {
      const { username, password, errors } = this.state;
    return (
        <div className= "container pt-4">
        <div className="font-white">
            <h1> Existing Customer </h1> 
            <br/>
            <form onSubmit={this.onSubmit}> 
                {errors.match &&(
                <div className="alert alert-danger">
                    the username and password do not match our records; please try again
                </div>
                )}
                <div className="form-group">
                    <input className="form-control" name="username" type="text" placeholder="username" value={username} 
                    onChange = {this.onchange} />
                </div>
                {errors.username && (
                <div className="alert alert-warning">
                    {errors.username}
                    {errors.match}
                </div> 
                )}
                <div className="form-group">
                    <input className="form-control"  name="password"type="password" placeholder="password" value={password} 
                    onChange={this.onChange} />
                </div>
                {errors.password && ( 
                <div className="alert alert-warning">
                    {errors.password}
                </div>
                )}
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <Link to= "/register" className="btn btn-success btn-block">Register</Link>
            </form>
        </div>
        </div>
    );
  }
}