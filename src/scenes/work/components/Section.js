import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../../Global';

const Section = styled.section`
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 1fr 1fr;
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
const SectionHeader = styled.h2`
  grid-area: header;
  @media ${Breakpoint.medium} {
    top: calc( var(--spacing-large) - (1em/2) );
    position: sticky;
  }
`
const SectionContent = styled.div`
  grid-area: content
`

export { Section, SectionHeader, SectionContent };