import React, { Component } from 'react'
import "../../index.css"
import {Link} from 'react-router-dom';
class About extends Component {
  render() {
    return (
  <div>
      <div className="background1">                         
          <h1><b>Veggie Boy Pizza</b></h1>
          <h3><b>The Best Pizza In Town</b></h3> 
           <img src={require ("../../images/pizza-2776236_340.jpg")} alt="pizza pizza" width="400" height="150"/>
            <hr/> 
            <div className="form-group">
              <br></br>
              <h2><b>Veggie Boy Pizza    est. in 1963</b></h2>
               <br></br>
              <p>
                 One day John Miller was talking to his brother, about how they could eat healthier, and still consume the things they liked to eat. 
                  They both loved pizza and a lot of research about eating healthy, they read articles into making vegetarian meals. Couple weeks later Veggie Boy Pizza was born, and we been making fantastic vegetarian meals ever since.  
              </p>              
            </div>
            <div>
              <ul className="list-group">
                <li className="list-group">
                 <Link to="/menu">Place Your Online Order Here</Link>                             
                </li> 
                <br></br>                          
                <li className="list-group">
                 <Link to="/">Home</Link>                     
               </li>             
               <li className="list-group">
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