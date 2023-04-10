import { PageRoutes } from '@/constants/common-constants';

const checkClientSide = () => {
  return typeof window !== 'undefined';
};

const checkShowNavBar = (route: string) => {
  switch (route) {
    case PageRoutes.MAIN:
    case PageRoutes.PRODUCTS:
      return true;
    default:
      return false;
  }
};

const getRoute = (route: string) => {
  if (route === PageRoutes.PRODUCTS_DETAILS) {
    return PageRoutes.PRODUCTS;
  }

  return route;
};

export { checkClientSide, checkShowNavBar, getRoute };
