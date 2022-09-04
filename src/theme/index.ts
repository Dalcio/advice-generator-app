import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      lightCyan: 'hsl(193, 38%, 86%)',
      neonGreen: 'hsl(150, 100%, 66%)',
      grayishBlue: 'hsl(217, 19%, 38%)',
      darkGrayishBlue: 'hsl(217, 19%, 24%)',
      darkBlue: 'hsl(218, 23%, 16%)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '16px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '28px',
    },
    fonts: {
      default: "'Manrope', 'sans-serif'",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
