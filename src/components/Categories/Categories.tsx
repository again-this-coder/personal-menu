import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { FC, useState } from "react";
import { styles } from "./styles";
import { categoriesData } from "./categoriesData";
import { useSelector } from "react-redux";
import { selectMeal } from "redux/reducers/meals/mealsSlice";
import { MealType } from "src/data/mealData";
import { useTranslation } from "react-i18next";

type Props = {
  setData: (arg: MealType[]) => void;
};

const Categories: FC<Props> = ({ setData }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(
    t("categories.options.all")
  );
  const meals = useSelector(selectMeal);
  const favoriteMeals = useSelector((state) => state.favorites.ids);
  const handleActiveCategory = (name: string) => {
    setActiveCategory(name);

    if (t(`categories.options.${name}`) === t("categories.options.favorite")) {
      const newCategory = meals.filter((meal) =>
        favoriteMeals.includes(meal.id)
      );
      setData(newCategory);
      return;
    }

    if (t(`categories.options.${name}`) === t("categories.options.all")) {
      setData(meals);
    } else {
      const newCategory = meals.filter(({ category }) => category === name);
      setData(newCategory);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{t("categories.title")}</Text>
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
                t(`categories.options.${activeCategory}`) ===
                  t(`categories.options.${category}`) && styles.activeColor,
              ]}
              key={id}
              onPress={() => handleActiveCategory(category)}
            >
              <Text style={styles.text}>
                {t(`categories.options.${category}`)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
