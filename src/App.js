import React, { Component } from 'react';
import Home from './components/Home/Home';
import Menu from './components/pages/Menu';
import Register from './components/Home/Register';
import About from './components/pages/About';
import Login from './components/Home/Login';
import Header from './components/headerComponent/Header';
import Footer from './components/Layout/Footer';
import Order from './components/pages/Order';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import {Link} from "react-router-dom"


class App extends Component {
  render() {
    return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
      
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/order" component={Order}/>
        </Switch>
        <Footer />
      </div>
    </Router>
    
                           
    )
  }
}

export default App
  

