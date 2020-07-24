import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Breakpoint }  from '../../../Global';

// Styles
const SelectedWorkContainer = styled.div`
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
const SelectedWorkHeader = styled.h2`
    grid-area: header;
    @media ${Breakpoint.medium} {
        top: calc( var(--spacing-large) - (1em/2) );
        position: sticky;
    }
`
const SelectedWorkContent = styled.div`
    grid-area: content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--spacing-xsmall);
    row-gap: var(--spacing-small);
`
const SelectedWorkCard = styled.div`
    grid-column: span 1
`

function SelectedWork() {
    return (
        <SelectedWorkContainer className="spacing-medium-top spacing-medium-bottom">
            <SelectedWorkHeader className="spacing-small-bottom">Selected work</SelectedWorkHeader>
            <SelectedWorkContent>
                <SelectedWorkCard>
                    <Link aria-hidden="true" to="/work"><div className="dummy-image-4-by-3"></div></Link>
                    <h3 className="small-text spacing-xsmall-top">Hackster</h3>
                    <Link className="small-text no-link-underline" to="/project"><p>A website & identity for the quirkiest florist in Long Beach, CA.</p></Link>
                </SelectedWorkCard>
                <SelectedWorkCard>
                    <Link aria-hidden="true" to="/work"><div className="dummy-image-4-by-3"></div></Link>
                    <h3 className="small-text spacing-xsmall-top">Hackster</h3>
                    <Link className="small-text no-link-underline" to="/project"><p>A website & identity for the quirkiest florist in Long Beach, CA.</p></Link>
                </SelectedWorkCard>
                <SelectedWorkCard>
                    <Link aria-hidden="true" to="/work"><div className="dummy-image-4-by-3"></div></Link>
                    <h3 className="small-text spacing-xsmall-top">Hackster</h3>
                    <Link className="small-text no-link-underline" to="/project"><p>A website & identity for the quirkiest florist in Long Beach, CA.</p></Link>
                </SelectedWorkCard>
                <SelectedWorkCard>
                    <Link aria-hidden="true" to="/work"><div className="dummy-image-4-by-3"></div></Link>
                    <h3 className="small-text spacing-xsmall-top">Hackster</h3>
                    <Link className="small-text no-link-underline" to="/project"><p>A website & identity for the quirkiest florist in Long Beach, CA.</p></Link>
                </SelectedWorkCard>
            </SelectedWorkContent>
        </SelectedWorkContainer>
    );
}

export default SelectedWork;