import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { FC, useState } from "react";
import { styles } from "./styles";
import { categoriesData } from "./categoriesData";
import { useSelector } from "react-redux";
import { selectMeal } from "redux/reducers/meals/mealsSlice";
import { MealType } from "src/data/mealData";

type Props = {
  setData: (arg: MealType[]) => void;
};

const Categories: FC<Props> = ({ setData }) => {
  const [activeCategory, setActiveCategory] = useState("Всі");

  const meals = useSelector(selectMeal);
  const favoriteMeals = useSelector((state) => state.favorites.ids);

  const handleActiveCategory = (name: string) => {
    setActiveCategory(name);

    if (name === "Улюблене") {
      const newCategory = meals.filter((meal) =>
        favoriteMeals.includes(meal.id)
      );
      setData(newCategory);
      return;
    }

    if (name === "Всі") {
      setData(meals);
    } else {
      const newCategory = meals.filter(({ category }) => category === name);
      setData(newCategory);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Популярні категорії</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.categoryContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map(({ id, category }) => {
          return (
            <TouchableOpacity
              style={[
                styles.category,
                activeCategory === category && styles.activeColor,
              ]}
              key={id}
              onPress={() => handleActiveCategory(category)}
            >
              <Text style={styles.text}>{category}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
