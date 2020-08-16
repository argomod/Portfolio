import React from 'react';
import styled from 'styled-components';
import { Breakpoint }  from '../../../Global';
import  Breadcrumb   from '../../../components/Breadcrumb';

// Styles
const IntroContainer = styled.section`
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: var(--spacing-large);
    grid-template-areas:
        "header header ."
        "content content content"
    ;
    @media ${Breakpoint.medium} {
        grid-template-areas:
            "header content content"
        ;
    }
`
const IntroHeader = styled.h1`
    grid-area: header;
`
const IntroContent = styled.div`
    grid-area: content
`

function Intro() {
    return (
        <IntroContainer className="spacing-large-top">
            <IntroHeader>
                Hi, I'm Matt Argomaniz.
            </IntroHeader>
            <IntroContent>
                <p>A digital product designer who focuses on accessibility, design systems, front-end dev, & solving the climate crisis.</p>
            </IntroContent>
        </IntroContainer>
    );
}

export default Intro;
