import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from "framer-motion";
import { WebsiteLayout, WebsiteContent } from "./Global";
import CTA  from "./components/CTA";
import Footer from './components/Footer';
import Work from './scenes/work/Work';
import Home from './scenes/home/Home';

class App extends Component {
  render() {
    return (
      <WebsiteLayout>
        <CTA/>
        <Router>
          <WebsiteContent>
            <AnimatePresence>
              <Switch>
                <Route path="/work"> <ScrollToTop /> <Work />  </Route>
                <Route exact path="/"> <Home /> <ScrollToTop /> </Route>
              </Switch>
            </AnimatePresence>
          </WebsiteContent>
        </Router>
        <Footer/>
      </WebsiteLayout>
    )
  }
}

export default App;
