import React, { Component } from 'react';
import styled from 'styled-components';
import { Breakpoint } from "./Global";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';
import CTA  from "./components/CTA";
import Footer from './components/Footer';
import Home from './scenes/home/Home';
import Login from './scenes/Login';
import HacksterNews from './scenes/work/HacksterNews';
import AirbnbTransfers from './scenes/work/AirbnbTransfers';


const WebsiteLayout = styled.div`
  display: grid;
  margin: auto;
  max-width: 1400px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-bottom: env(safe-area-inset-bottom);
  column-gap: var(--spacing-large);
  padding: 0 var(--spacing-small);
  grid-template-areas:
    "cta cta cta cta"
    "content content content content"
    "footer footer footer footer"
  ;
  @media ${Breakpoint.medium} {
    padding: 0 var(--spacing-medium);
    grid-template-areas:
      "content content content cta"
      "footer footer footer cta"
    ;
  }
`
const WebsiteContent = styled.div`
    grid-area: content;
`


class App extends Component {
  render() {
    return (
      // Container for whole site
      <WebsiteLayout>

        {/* Call to action */}
        <CTA/>

        {/* Main content of the site */}
        <Router><WebsiteContent><AnimatePresence><Switch>
          {/* Page for Airbnb Transfers */}
          <PrivateRoute path="/airbnb-transfers">
            <ScrollToTop />
            <AirbnbTransfers />
          </PrivateRoute>
          {/* Page for Hackster News */}
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
