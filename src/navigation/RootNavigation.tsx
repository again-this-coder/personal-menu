import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens, Stacks } from "./screens";
import { HomeStackNavigation } from "./HomeStackNavigation";
import Login from "src/screens/Login/Login";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "FirebaseConfig";
const RootNavigation = () => {
  const [user, setUser] = useState<User | null>(null);

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={Screens.LOGIN_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      {!user ? (
        <Stack.Screen
          name={Stacks.HOME_STACK}
          component={HomeStackNavigation}
        />
      ) : (
        <Stack.Screen name={Screens.LOGIN_SCREEN} component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
