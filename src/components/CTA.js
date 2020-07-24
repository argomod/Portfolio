import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../Global';

const CoolCTA = styled.div`
  grid-area: cta;
  margin-top: var(--spacing-small);
  padding: 1.5em;
  border-radius: .8rem;
  background: var(--cta-background);
  color: var(--background-color);
  @media ${Breakpoint.medium} {
    top: calc( var(--spacing-large) - (1em/2) );
    position: sticky;
    align-self: start
  }
`
function CTA() {
    return (
        <CoolCTA className="micro-text">Black lives matter. Please donate $10 to Campaign Zero →</CoolCTA>
    );
}

export default CTA;