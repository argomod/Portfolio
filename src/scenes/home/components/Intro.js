import React from 'react';
import styled from 'styled-components';
import { Breakpoint }  from '../../../Global';

// Styles
const IntroContainer = styled.div`
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: var(--spacing-medium);
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
const IntroContent = styled.div`
    grid-area: content
`

function Intro() {
    return (
        <IntroContainer className="spacing-large-top spacing-medium-bottom">
            <IntroHeader>
                Hi, I’m Matt Argomaniz.
            </IntroHeader>
            <IntroContent>
                <p>I am a digital product designer in Portland, OR. I’m especially interested in accessibility, design systems, front-end development, & solving the climate crisis.</p>
            </IntroContent>
        </IntroContainer>
    );
}

export default Intro;
