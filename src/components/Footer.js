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
    h3 { grid-area: header };
    .content { grid-area: content };
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

function Footer() {
    return (
      <FooterContainer className="spacing-xlarge-top spacing-xlarge-bottom">
          <h3 className="dark-text small-text spacing-medium-bottom">Thank you for visiting.</h3>
          <ul className="content">
            <li className="light-text small-text spacing-xsmall-bottom"><a href="mailto:name@rapidtables.com">Send me an email.</a></li>
            <li className="light-text small-text spacing-xsmall-bottom"><a target="_blank" href="https://margomaniz.tumblr.com/">Lurk on my Tumblr.</a></li>
            <li className="light-text small-text spacing-xsmall-bottom"><a target="_blank" href="https://github.com/argomod">View my code on GitHub.</a></li>
          </ul>
      </FooterContainer>
    );
}

export default Footer;