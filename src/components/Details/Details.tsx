import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Meal } from "../Meal/Meal";
import { mealsData } from "src/data/mealData";

const Details = ({ id }) => {
  return (
    <ScrollView style={styles.container}>
      <Meal {...mealsData[id]} />
    </ScrollView>
  );
};

export default Details;
