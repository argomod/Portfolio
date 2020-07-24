import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../../Global';

const Intro = styled.div`
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
const IntroHeader = styled.div`
  grid-area: header;
  display: grid;
  // @media ${Breakpoint.medium} {
  //   top: calc( var(--spacing-large) - (1em/2) );
  //   position: sticky;
  // }
`
const IntroContent = styled.div`
  grid-area: content
`

export { Intro, IntroHeader, IntroContent };