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
import AddMealScreen from "src/screens/Add/AddMealScreen";
import { useTranslation } from "react-i18next";
export const HomeStackNavigation: FC = () => {
  const Tab = createBottomTabNavigator();
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={t("navigation.home")}
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
        name={t("navigation.shopping")}
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
        name={t("navigation.profile")}
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
        name={t("navigation.add")}
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
