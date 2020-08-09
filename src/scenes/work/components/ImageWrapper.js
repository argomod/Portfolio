import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../../Global';

const ImageWrapper = styled.div`
    background: var(--container-color);
    padding: .3em;
    border-radius: 0.3em;
    img {
        border-radius: 0.2em;
    }
    // margin: 0 calc(-1*var(--spacing-small)) 0 calc(-1*var(--spacing-small));
    // @media ${Breakpoint.medium} {
    //     border-radius: 0.4em;
    // }
`

export default ImageWrapper;