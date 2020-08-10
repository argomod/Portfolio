import React from 'react';
import styled from 'styled-components';
import { Breakpoint }  from '../../../Global';

// Styles
const AboutContainer = styled.section`
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: var(--spacing-large);;
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
const AboutHeader = styled.h2`
    grid-area: header;
    @media ${Breakpoint.medium} {
        top: calc( var(--spacing-large) - (1em/2) );
        position: sticky;
    }
`
const AboutContent = styled.div`
    grid-area: content
`

function About() {
    return (
        <AboutContainer className="spacing-large-top">
            <AboutHeader>More about me</AboutHeader>
            <AboutContent>
                <p>I like working with passionate folks & companies whose purpose extends beyond what they sell.</p>
                <p>I specialize in user experience and user interface design. Or in other words, I design nice applications for screens. My process involves posing questions to users and stakeholders, gathering data, collaborating, pitching, iterating, prototyping, and building.</p>
                <p>I am especially passionate about inclusive design, accessibility, and the intersection of design + development. I am also an evironmentalist and believe good design can help mitigate our climate crisis.</p>
                <p>I am currently looking for a new role. I’ve worked for Airbnb and Hackster.</p>
            </AboutContent>
        </AboutContainer>
    );
}

export default About;
