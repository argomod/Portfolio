import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Breakpoint } from '../../../Global';

const Intro = styled.section`
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
const IntroContent = styled.div`
  grid-area: content;
`
const IntroHeader = styled.div`
  grid-area: header;
`
const IntroDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: var(--spacing-small);
  row-gap: var(--spacing-small);
  p {
    grid-column: span 2
  }
`

export { Intro, IntroContent, IntroHeader, IntroDetails };