import { createStitches } from '@stitches/react';
import { reset, utilityClass, commonStyle } from './stitches.global';
import typography, { globalTypo } from './stitches.typography';
import sizes from './stitches.sizes';
import color from './stitches.color';
import utils from './stitches.utils';
import {
  mintA,
  violet
} from "@radix-ui/colors"

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...mintA,
      ...violet
    },
    ...sizes,
    ...typography,
  },
  media: {
    mobile: '(max-width: 550px)',
    tablet: '(max-width: 1100px)',
    laptop: '(max-width: 1450px)',
  },
  utils: {
    ...utils,
  },
});

export const darkTheme = createTheme({
  colors: {},
});

export const globalStyle = globalCss({
  ...reset,
  ...commonStyle,
  ...utilityClass,
  ...globalTypo,
});
