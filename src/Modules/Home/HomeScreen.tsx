import { View, SafeAreaView, ScrollView } from "react-native";
import React, { FC, useState } from "react";
import { styles } from "./styles";
import { NavigationProp } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectMeal } from "../../Common/Store/Redux/Reducers/Meals/MealsSlice";
import Categories from "../../Common/Components/Categories/Categories";
import RoundMealCard from "../../Common/Components/RoundMealCard/RoundMealCard";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
const HomeScreen: FC = ({ navigation }: RouterProps) => {
  const meals = useSelector(selectMeal);

  const [mealsData, setMealsData] = useState(meals);
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
