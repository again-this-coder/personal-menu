import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stacks } from './screens';
import { HomeStackNavigation } from './HomeStackNavigation';
const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={Stacks.HOME_STACK}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Stacks.HOME_STACK} component={HomeStackNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
