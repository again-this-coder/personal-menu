import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';
import {
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';
import HomeScreen from '../Home/HomeScreen';
import AddMealScreen from '../Add/AddMealScreen';
import { Tabs } from './Screens';
import SavedRecipesScreen from '../SavedRecipes/SavedRecipesScreen';
import SavedIcon from '../../Common/Assets/Images/saved.svg';
import RecipeBookIcon from '../../Common/Assets/Images/recipeBook.svg';
import RationsScreen from '../Rations/RationsScreen';

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
              color={focused ? color : 'black'}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Tabs.SAVED_RECIPES_SCREEN}
        component={SavedRecipesScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <SavedIcon
              color={focused ? color : 'black'}
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
              color={focused ? color : 'black'}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Tabs.RATIONS_SCREEN}
        component={RationsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <RecipeBookIcon
              color={focused ? color : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
