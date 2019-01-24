import React, { Component } from 'react';
import Home from './components/Home/Home';
import Menu from './components/pages/Menu';
import Register from './components/Home/Register';
import About from './components/pages/About';
import Login from './components/Home/Login';
import Header from './components/headerComponent/Header';
import Footer from './components/Layout/Footer';
import Order from './components/pages/Order';
import Reservation from './components/Home/Reservation';
import Cart from './components/Cart/Cart';
import {Link} from "react-router-dom";
import Profile from './components/Home/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return ( 
     
    <Router>
      <div className="app">
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    </Router>
    
                           
    )
  }
}

export default App
  

