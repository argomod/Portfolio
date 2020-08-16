import React from 'react';
import '../App.css';
import styled from 'styled-components';
import { Breakpoint } from '../Global';

// Styles
const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: var(--spacing-medium);
    grid-area: footer;
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
const FooterHeader = styled.div `
    grid-area: header
`
const FooterContent = styled.div `
    grid-area: content
`

function Footer() {
    return (
      <FooterContainer className="spacing-xlarge-top spacing-xlarge-bottom">
        <FooterHeader className="spacing-medium-bottom">
            <h3 className="dark-text small-text">Thank you for visiting.</h3>
        </FooterHeader>
        <FooterContent>
            <ul>
                <li className="light-text small-text spacing-xsmall-bottom"><a href="mailto:name@rapidtables.com">Send me an email.</a></li>
                <li className="light-text small-text spacing-xsmall-bottom"><a target="_blank" href="https://margomaniz.tumblr.com/">Lurk on my Tumblr.</a></li>
                <li className="light-text small-text spacing-xsmall-bottom"><a target="_blank" href="https://github.com/argomod">View my code on GitHub.</a></li>
            </ul>    
            <p className="micro-text light-text spacing-medium-top">Site built by yours truly in 2020.</p>
        </FooterContent>
      </FooterContainer>
    );
}

export default Footer;