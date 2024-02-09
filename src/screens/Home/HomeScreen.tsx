import { View, SafeAreaView, Button } from "react-native";
import React, { FC, useState } from "react";
import { styles } from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Screens } from "../../navigation/screens";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import {
  decrement,
  increment,
} from "../../../redux/reducers/counter/counterSlice";
import { Meal } from "../../components/Meal/Meal";
import Carousel from "react-native-reanimated-carousel";
import { SCREEN_WIDTH, scaleByWidth } from "src/assets/helpers";
import { MealType, mealsData } from "src/data/mealData";
import Categories from "src/components/Categories/Categories";
import { useSelector } from "react-redux";
import { selectMeal } from "redux/reducers/meals/mealsSlice";
import { auth } from "FirebaseConfig";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
const HomeScreen: FC = ({ navigation }: RouterProps) => {
  const { navigate } = useNavigation();
  const meals = useSelector(selectMeal);

  const [mealsData, setMealsData] = useState(meals);

  const navigateToMenuScreen = () => {
    navigate(Screens.MENU_SCREEN);
  };

  const renderItem = ({ item }: { item: MealType }) => <Meal {...item} />;

  const logout = () => {
    auth.signOut();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Log out" onPress={logout} />
      <View style={styles.contentContainer}>
        <View style={styles.categories}>
          <Categories setData={setMealsData} />
        </View>

        <Carousel
          width={SCREEN_WIDTH - scaleByWidth(40)}
          data={mealsData}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
