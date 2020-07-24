import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from "framer-motion";
import { WebsiteLayout, WebsiteContent } from "./Global";
import CTA  from "./components/CTA";
import Footer from './components/Footer';
import Project1 from './scenes/work/Project1';
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
                <Route path="/project-1"> <ScrollToTop /> <Project1 />  </Route>
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
