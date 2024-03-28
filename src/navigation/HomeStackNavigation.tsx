import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import HomeScreen from "../screens/Home/HomeScreen";
import MenuScreen from "../screens/Menu/MenuScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { Screens } from "./screens";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import ShoppingScreen from "src/screens/Shopping/ShoppingScreen";
export const HomeStackNavigation: FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={Screens.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="home-outline"
              size={24}
              color={focused ? color : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.SHOPPING_SCREEN}
        component={ShoppingScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={24}
              color={focused ? color : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="person-outline"
              size={24}
              color={focused ? color : "black"}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Screens.ADD_NEW_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AntDesign
              name="plus"
              size={24}
              color={focused ? color : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
