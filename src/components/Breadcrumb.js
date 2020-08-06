import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Breadcrumb() {
    return (
        <Link className="link-underline-hover small-text light-text spacing-medium-bottom" to="/">
            <span aria-hidden="true">← </span>Go back home
        </Link>
    );
}

export default Breadcrumb;