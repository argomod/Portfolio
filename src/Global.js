import React from 'react';
import styled from 'styled-components';

const Breakpoint = {
    medium: '(min-width: 769px)',
}

const Animation = {
  variants: {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  },
  transition: {
    type: "tween",
    ease: "easeOut",
    duration: .35
  }
}

export { Breakpoint, Animation };