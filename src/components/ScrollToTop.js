import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: 'smooth'
    });
  }
  render() {
    return null;
  }
}

export default ScrollToTop;