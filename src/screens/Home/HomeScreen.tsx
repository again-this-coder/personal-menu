import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
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

const HomeScreen: FC = () => {
  const { navigate } = useNavigation();
  const dishID = 1;

  const navigateToMenuScreen = () => {
    navigate(Screens.MENU_SCREEN);
  };

  const renderItem = ({ item }: { item: MealType }) => <Meal {...item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.categories}>
          <Categories />
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
