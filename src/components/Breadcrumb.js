import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import imageFoot from '../assets/foot.svg';

const footStyles = {
    width: "4em",
    fill: "white"
}

{/* <span aria-hidden="true">← </span> */}


function Breadcrumb() {
    return (
        <Link className="no-link-underline small-text light-text" to="/">
            <span aria-hidden="true">← </span>Go back home
        </Link>
    );
}



export default Breadcrumb;