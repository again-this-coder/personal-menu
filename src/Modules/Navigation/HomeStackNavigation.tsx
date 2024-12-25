import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeScreen from "../Home/HomeScreen";
import ShoppingScreen from "../Shopping/ShoppingScreen";
import AddMealScreen from "../Add/AddMealScreen";
import {Tabs} from "./Screens";
export const HomeStackNavigation: FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={Tabs.HOME_SCREEN}
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
        name={Tabs.SHOPPING_SCREEN}
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
        name={Tabs.ADD_NEW_SCREEN}
        component={AddMealScreen}
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
