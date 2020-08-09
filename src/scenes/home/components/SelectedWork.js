import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Breakpoint }  from '../../../Global';

// Styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
    column-gap: var(--spacing-medium);
    grid-template-areas:
        "header header header"
        "content content content"
    ;
    @media ${Breakpoint.medium} {
        grid-template-areas:
            "header content content"
        ;
    }
`
const Header = styled.h2`
    grid-area: header;
    @media ${Breakpoint.medium} {
        top: calc( var(--spacing-large) - (1em/2) );
        position: sticky;
    }
`
const Content = styled.ol`
    grid-area: content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--spacing-small);
    row-gap: var(--spacing-small);
`
const CardStyle = {
    gridColumn: 'span 1',
};

const SelectedWorkCard = (props) => {
    return (
        <Link className="small-text no-link-underline" style={CardStyle} to={props.url}>
            <li>
                {props.number}<br />
                {props.caption}<br />
                <span aria-hidden="true"> →</span>
            </li>
        </Link>

    );
}

function SelectedWork() {
    return (
        <Container className="spacing-large-top">
            <Header className="spacing-small-bottom">
                Selected work
            </Header>
            <Content>
                <SelectedWorkCard number={"1."} title={"Hackster News"} caption={"An entirely new editorial section for Hackster.io."} url="/hackster-news" />
                <SelectedWorkCard number={"2."} title={"Airbnb Transfers"} caption={"A better way to transfer support tickets for Airbnb."} url="/airbnb-transfers" />
                <SelectedWorkCard number={"3."} title={"Screen sharing"} caption={"A tool to improve real-time customer support for Airbnb."} url="/hackster-news" />
                <SelectedWorkCard number={"4."} title={"This website"} caption={"How I designed & coded this website from scratch."} url="/hackster-news" />
            </Content>
        </Container>
    );
}

export default SelectedWork;