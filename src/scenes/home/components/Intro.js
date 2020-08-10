import React from 'react';
import styled from 'styled-components';
import { Breakpoint }  from '../../../Global';

// Styles
const IntroContainer = styled.section`
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: var(--spacing-large);
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
const IntroHeader = styled.h1`
    grid-area: header;
`
const IntroContent = styled.p`
    grid-area: content
`

function Intro() {
    return (
        <IntroContainer className="spacing-large-top">
            <IntroHeader>
                Hello, I'm Matt Argomaniz.
            </IntroHeader>
            <IntroContent>
                I'm a digital product designer who especially focuses on accessibility, design systems, front-end dev, & solving the climate crisis.
            </IntroContent>
        </IntroContainer>
    );
}

export default Intro;
