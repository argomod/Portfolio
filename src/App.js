import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { WebsiteLayout, WebsiteContent } from "./Global";
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';
import CTA  from "./components/CTA";
import Footer from './components/Footer';
import Home from './scenes/home/Home';
import Login from './scenes/Login';
import HacksterNews from './scenes/work/HacksterNews';

class App extends Component {
  render() {
    return (
      // Container for whole site
      <WebsiteLayout>

        {/* Call to action */}
        <CTA/>

        {/* Main content of the site */}
        <Router><WebsiteContent><AnimatePresence><Switch>
        
          {/* Page for Airbnb - Transfers */}
          {/* <PrivateRoute path="/hackster-news">
            <ScrollToTop />
            <HacksterNews />
          </PrivateRoute> */}

          <Route path="/hackster-news">
            <ScrollToTop />
            <HacksterNews />
          </Route>

          {/* Page for Login */}
          <Route path="/login">
            <ScrollToTop />
            <Login />
          </Route>

          {/* Home page */}
          <Route exact path="/">
            <Home />
            <ScrollToTop />
          </Route>

        </Switch></AnimatePresence></WebsiteContent></Router>

        {/* Footer */}
        <Footer/>

      </WebsiteLayout>
    )
  }
}

export default App;
