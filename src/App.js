import React, { Component } from 'react';
import styled from 'styled-components';
import { Breakpoint } from "./Global";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';
import Home from './scenes/home/Home';
import Login from './scenes/Login';
import HacksterNews from './scenes/work/HacksterNews';
import AirbnbTransfers from './scenes/work/AirbnbTransfers';

const Variables = {
  pageWidth: '1340px',
  pageMargin: 'calc(var(--line-height)*var(--body-font-size)* 4)',
  gap: 'calc(var(--line-height)*var(--body-font-size)* 2)',
}

const WebsiteLayout = styled.div`
  display: grid;
  margin: auto;
  justify-content: stretch; 
  padding: 0 var(--spacing-small);
  padding-bottom: env(safe-area-inset-bottom);
  grid-template-areas:
    "cta"
    "content"
    "footer"
  ;
  @media ${Breakpoint.medium} {
    max-width: ${Variables.pageWidth};
    min-height: 100vh;
    padding: 0 ${Variables.pageMargin};
    column-gap: ${Variables.gap};
    grid-template-areas:
      "content content cta"
      "content content footer"
    ;
  }
`
const WebsiteContent = styled.div`
  grid-area: content;
  margin: var(--spacing-large) 0;
  @media ${Breakpoint.medium} {
    margin: var(--spacing-xlarge) 0;
    max-width: calc( (${Variables.pageWidth} - ${Variables.gap} - ${Variables.pageMargin} - ${Variables.pageMargin} ) * (1/2) )
  }
`
const CTA = styled.div`
  grid-area: cta;
  align-self: start;
  margin-top: var(--spacing-medium);
  padding: 1.5em;
  border-radius: .8rem;
  background: var(--cta-background);
  color: var(--background-color);
  @media ${Breakpoint.medium} {
    max-width: calc( (${Variables.pageWidth} - ${Variables.gap} - ${Variables.gap} - ${Variables.gap} - ${Variables.pageMargin} - ${Variables.pageMargin} ) * (1/4) );
    position: sticky;
    top: var(--spacing-xlarge);
  }
`
const Footer = styled.footer`
  grid-area: footer;
  margin: var(--spacing-large) 0;
  @media ${Breakpoint.medium} {
    align-self: end;
    max-width: calc( (${Variables.pageWidth} - ${Variables.gap} - ${Variables.gap} - ${Variables.gap} - ${Variables.pageMargin} - ${Variables.pageMargin} ) * (1/4) );
    position: sticky;
    bottom: var(--spacing-xlarge);
  }
`

class App extends Component {
  render() {
    return (
      <WebsiteLayout>
        <CTA as="a" href="https://www.climatechangemakers.org/"  target="_blank" className="no-link-undelrine small-text">
          Join Climate Changemakers & help elect climate candidates <span aria-hidden="true">→</span>
        </CTA>
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
        <Footer>
          <h3 className="spacing-small-bottom">Thank you for visiting.</h3>
          <ul>
              <li><a className="light-text" href="mailto:name@rapidtables.com">Send me an email.</a></li>
              <li><a className="light-text" target="_blank" href="https://margomaniz.tumblr.com/">Lurk on my Tumblr.</a></li>
              <li><a className="light-text" target="_blank" href="https://github.com/argomod">View my code on GitHub.</a></li>
          </ul>    
          <p className="small-text light-text spacing-medium-top">Site built by yours truly in 2020.</p>
      </Footer>
      </WebsiteLayout>
    )
  }
}

export default App;
