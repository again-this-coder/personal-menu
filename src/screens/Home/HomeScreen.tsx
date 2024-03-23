import { View, SafeAreaView, Button, ScrollView } from "react-native";
import React, { FC, useState } from "react";
import { styles } from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Screens } from "../../navigation/screens";
import Categories from "src/components/Categories/Categories";
import { useSelector } from "react-redux";
import { selectMeal } from "redux/reducers/meals/mealsSlice";
import { auth } from "FirebaseConfig";
import RoundMealCard from "src/components/RoundMealCard/RoundMealCard";

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

  const logout = () => {
    auth.signOut();
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.categories}>
          <Categories setData={setMealsData} />
        </View>
        <View style={styles.mealsContainer}>
          {mealsData.map((meal) => (
            <RoundMealCard key={meal.id} {...meal} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
