import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from "../Global";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Container = styled.div`
    position: sticky;
    top: var(--spacing-medium);
    @media ${Breakpoint.medium} {
        top: var(--spacing-large);
    }
`
const Button = styled.div`
    display: inline-block;
    line-height: 0px;
    background: var(--font-color);
    border-radius: 100em;
    padding: .6rem;
    margin-bottom: var(--spacing-medium);
    svg {
        fill: var(--background-color);
        stroke: var(--background-color);
        height: .9rem;
    }
`

function BackHome() {
    return (
        <Container>
            <Link className="no-link-undelrine" to="/">
                <Button>
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4263 9.98771L17.7193 3.69471C17.9014 3.50611 18.0022 3.25351 18 2.99131C17.9977 2.72911 17.8925 2.4783 17.7071 2.29289C17.5217 2.10749 17.2709 2.00232 17.0087 2.00004C16.7465 1.99776 16.4939 2.09855 16.3053 2.28071L10.0123 8.57371L3.71929 2.28071C3.53069 2.09855 3.27808 1.99776 3.01589 2.00004C2.75369 2.00232 2.50288 2.10749 2.31747 2.29289C2.13206 2.4783 2.02689 2.72911 2.02461 2.99131C2.02234 3.25351 2.12313 3.50611 2.30529 3.69471L8.59829 9.98771L2.30529 16.2807C2.20978 16.373 2.1336 16.4833 2.08119 16.6053C2.02878 16.7273 2.00119 16.8585 2.00004 16.9913C1.99888 17.1241 2.02419 17.2558 2.07447 17.3787C2.12475 17.5016 2.199 17.6132 2.29289 17.7071C2.38679 17.801 2.49844 17.8753 2.62133 17.9255C2.74423 17.9758 2.87591 18.0011 3.00869 18C3.14147 17.9988 3.27269 17.9712 3.39469 17.9188C3.5167 17.8664 3.62704 17.7902 3.71929 17.6947L10.0123 11.4017L16.3053 17.6947C16.4939 17.8769 16.7465 17.9777 17.0087 17.9754C17.2709 17.9731 17.5217 17.8679 17.7071 17.6825C17.8925 17.4971 17.9977 17.2463 18 16.9841C18.0022 16.7219 17.9014 16.4693 17.7193 16.2807L11.4263 9.98771Z" />
                    </svg>
                </Button>
            </Link>
        </Container>
    );
}

export default BackHome;