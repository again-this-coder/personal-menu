import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import MenuScreen from '../screens/Menu/MenuScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { Screens } from './screens';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
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
              color={focused ? color : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.CALENDAR_SCREEN}
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AntDesign
              name="calendar"
              size={24}
              color={focused ? color : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.STATISCTICS_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="stats-chart-outline"
              size={24}
              color={focused ? color : 'black'}
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
              color={focused ? color : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
