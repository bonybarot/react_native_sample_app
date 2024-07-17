import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from '../NavigationKeys';
import { ScreenRoute } from '../NavigationRoutes';
import AuthStack from './AuthStack';

export default function StackNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.Splash}>
      <Stack.Screen name={SCREENS.Splash} component={ScreenRoute.Splash} />
      <Stack.Screen
        name={SCREENS.onBoarding}
        component={ScreenRoute.OnBoarding}
      />
      <Stack.Screen name={SCREENS.Auth} component={AuthStack} />
      <Stack.Screen
        name={SCREENS.ForgotPassword}
        component={ScreenRoute.ForgotPassword}
      />
      <Stack.Screen name={SCREENS.Login} component={ScreenRoute.Login} />
      <Stack.Screen
        name={SCREENS.ResetPassword}
        component={ScreenRoute.ResetPassword}
      />
      <Stack.Screen name={SCREENS.Drawer} component={ScreenRoute.Drawer} />

      {/* home screens */}
      <Stack.Screen
        name={SCREENS.ListOfDataPage}
        component={ScreenRoute.ListOfDataPage}
      />
      {/* profile screens */}
      {/* <Stack.Screen name={TabNav.ProfileTab} component={TabRoute.ProfileTab} /> */}
    </Stack.Navigator>
  );
}
