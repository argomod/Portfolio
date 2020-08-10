import React from 'react';
import styled from 'styled-components';
import { Breakpoint } from '../../../Global';

const ImageWrapper = styled.div`
    background: var(--container-color);
    padding: .2em;
    border-radius: 0.3em;
    img {
        border-radius: 0.2em;
    }
`

export default ImageWrapper;