const BREAKPOINTS = {
  mobileStart: 500,
  tabletStart: 1300,
};

export const QUERIES = {
  mobileAndUp: `(min-width: ${BREAKPOINTS.mobileStart / 16}rem)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletStart / 16}rem)`,
};

export default BREAKPOINTS;
