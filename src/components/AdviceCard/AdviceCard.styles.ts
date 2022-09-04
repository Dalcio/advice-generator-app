import { styled } from 'theme';

export const AdviceCardContainer = styled('div', {
  position: 'relative',

  display: 'flex',
  rowGap: '$3',
  flexDirection: 'column',
  alignItems: 'center',

  minHeight: '180px',
  maxWidth: '470px',
  backgroundColor: '$darkGrayishBlue',
  borderRadius: '10px',
  padding: '$3',
  textAlign: 'center',

  '.advice-number': {
    textTransform: 'uppercase',
    color: '$neonGreen',
  },

  '.advice': {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    fontSize: '$4',
    color: '$lightCyan',
  },

  picture: {
    marginBottom: '36px',
  },

  boxShadow: '0 0 1px 0px $colors$grayishBlue',

  button: {
    $$neonGreen: '$colors$neonGreen',
    position: 'absolute',
    left: 'calc(50% - 25px)',
    bottom: '-25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    border: 'unset',
    cursor: 'pointer',
    background: '$$neonGreen url("/images/icon-dice.svg") no-repeat center',
    transition: 'box-shadow 200ms linear',

    '&:hover': {
      boxShadow: '0 0 16px 10px $$neonGreen',
    },
  },
});
