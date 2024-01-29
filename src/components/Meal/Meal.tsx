import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { images } from "src/assets/images";
import { FC } from "react";
import { MealType } from "src/data/mealData";

export const Meal: FC<MealType> = ({ image, title, price, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.backgroundBox1} />
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.backgroundBox2} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mealName}>{title}</Text>
        <Text style={styles.mealDescription}>{description}</Text>
        <Text style={styles.price}>{price && `${price} грн.`}</Text>
      </View>
    </View>
  );
};
