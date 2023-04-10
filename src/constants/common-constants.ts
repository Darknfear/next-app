const PageRoutes = {
  SIGN_UP: '/accounts/sign-up',
  SIGN_IN: '/accounts/sign-in',
  HOME: '/home',
  MAIN: '/',
  PRODUCTS: '/products',
  PRODUCTS_DETAILS: '/products/[productId]',
};

const PrivatePaths = [
  PageRoutes.HOME,
  PageRoutes.MAIN,
  PageRoutes.PRODUCTS,
  PageRoutes.PRODUCTS_DETAILS,
];

const RestrictedPaths = [PageRoutes.SIGN_IN, PageRoutes.SIGN_UP];

const HttpStatusCodes = {
  OK: 200,
  NOT_FOUND: 400,
  UNAUTHORIZED: 401,
};

const Languages = {
  VI: 'vi',
  EN: 'en',
};

export { PrivatePaths, RestrictedPaths, HttpStatusCodes, PageRoutes, Languages };
