import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Screens, Stacks, Tabs} from "./Screens";
import {HomeStackNavigation} from "./HomeStackNavigation";
import MealDetailsScreen from "../MealDetails/MealDetailsScreen";
import {styles} from "./styles";

const RootNavigation = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={Tabs.HOME_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Stacks.HOME_STACK} component={HomeStackNavigation} />
      <Stack.Screen
        name={Screens.MEAL_DETAILS}
        component={MealDetailsScreen}
        options={{
          headerShown: true,
          headerTitle: "Деталі",
          headerStyle: styles.commonHeader,
          headerBackTitle: "Меню",
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
