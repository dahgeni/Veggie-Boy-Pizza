import React, { Component } from 'react'
import "../../index.css"
import {Link} from 'react-router-dom';
class About extends Component {
  render() {
    return (
  <div>
      <div className="background1">                         
      <h4><b>Veggie Boy Pizza</b></h4>
      <h4><b>The Best Pizza in Town</b></h4> 
      <img src={require ("../../images/pizza-2776236_340.jpg")} alt="pizza pizza" width="400" height="150"/>
        <hr/>      
        <ul className="list-group">
            <li className="list-group">
             <Link to="/menu">Place Your Online Order Here</Link>                             
            </li> 
             <br></br>                            
           <div className="form-group">
              <br></br>
              <h5><b>Give Us Some Feedback About Our Service</b></h5>
               <br></br>
               <textarea id="discription" row="5" type= "text" className="form-control"
                  placeholder="Put Information Here"></textarea>                 
            </div>
        </ul>                          
         <div className="form-group">
            <ul className="list-group">                    
              <li className="list-group-item">
                <Link to="/">Home</Link>                     
              </li>             
              <li className="list-group-item">
                <Link to="/">Contact Us</Link>                    
              </li>
            </ul>
          </div>
    </div> 
    </div> 
    )
    }
  }

export default About;