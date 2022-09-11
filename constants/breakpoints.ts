const BREAKPOINTS = {
  mobileStart: 500,
  tabletStart: 1000,
  laptopStart: 1300,
  desktopStart: 1600,
};

export const MAX_WIDTH = 1530;

export const QUERIES = {
  mobileAndUp: `(min-width: ${BREAKPOINTS.mobileStart / 16}rem)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletStart / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopStart / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopStart / 16}rem)`,
};

export default BREAKPOINTS;
