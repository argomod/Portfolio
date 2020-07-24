import React from 'react';
import styled from 'styled-components';

const Breakpoint = {
    medium: '(min-width: 769px)',
}

const WebsiteLayout = styled.div`
  display: grid;
  margin: auto;
  max-width: 1440px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-bottom: env(safe-area-inset-bottom);
  column-gap: var(--spacing-medium);
  padding: 0 var(--spacing-small);
  grid-template-areas:
    "cta cta cta cta"
    "content content content content"
    "footer footer footer footer"
  ;
  @media ${Breakpoint.medium} {
    padding: 0 var(--spacing-medium);
    grid-template-areas:
      "content content content cta"
      "footer footer footer cta"
    ;
  }
`
const WebsiteContent = styled.div`
    grid-area: content;
`

export { WebsiteLayout, WebsiteContent, Breakpoint };