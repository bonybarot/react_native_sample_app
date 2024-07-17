// tab screens
import HomeTab from '../pages/tabbar/HomeTab';
import ProfileTab from '../pages/tabbar/ProfileTab';

import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Splash from '../pages/auth/Splash';
import OnBoarding from '../pages/auth/OnBoarding';
import ResetPassword from '../pages/auth/ResetPassword';
import Drawer from './Type/DrawerNavigation';

//home tab screens
import ListOfDataPage from './Type/homeTab/ListOfDataPage';

export const TabRoute = {
  HomeTab,
  ProfileTab,
};
export const ScreenRoute = {
  Login,
  SignUp,
  ForgotPassword,
  Splash,
  OnBoarding,
  ResetPassword,
  Drawer,

  //Home Screens
  ListOfDataPage,
};
