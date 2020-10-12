// px to rem
const calcRem = (px) => `${px / 16}rem`;

const colors = {
  black: "#000000",
  white: "#FFFFFF",
  grayOne: "#F7F9FF",
  grayTwo: "#C3C3C3",
  pointColor: "#3062B9",
  dangerColor: "#FF4D4F",
};

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  header: calcRem(16 * 4),
};

const deviceSizes = {
  tablet: `@media all and (min-width: 767px) and (max-width: 1023px)`,
  desktop: `@media all and (min-width: 1023px)`,
};

const theme = {
  colors,
  fontSizes,
  paddings,
  margins,
  deviceSizes,
};

export default theme;
