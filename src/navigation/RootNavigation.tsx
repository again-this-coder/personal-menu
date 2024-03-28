import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens, Stacks } from "./screens";
import { HomeStackNavigation } from "./HomeStackNavigation";
import Login from "src/screens/Login/Login";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "FirebaseConfig";
import MealDetailsScreen from "src/screens/MealDetails/MealDetailsScreen";
import { styles } from "./styles";
import ProfileScreen from "src/screens/Profile/ProfileScreen";

const RootNavigation = () => {
  const [user, setUser] = useState<User | null>(null);

  const Stack = createNativeStackNavigator();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });
  // }, []);

  return (
    <Stack.Navigator
      initialRouteName={Screens.HOME_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name={Screens.PROFILE_SCREEN} component={ProfileScreen} /> */}
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
