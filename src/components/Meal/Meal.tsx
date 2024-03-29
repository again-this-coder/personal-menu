import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FC, useState } from "react"; // Import useState hook
import { MealType } from "src/data/mealData";
import { AntDesign, Feather } from "@expo/vector-icons";

export const Meal: FC<MealType> = ({
  image,
  title,
  price,
  description,
  recipe,
}) => {
  const [ingredientQuantities, setIngredientQuantities] = useState(
    recipe?.map(() => 0) // Initialize quantities to 0 for each ingredient
  );

  const incrementQuantity = (index) => {
    const newQuantities = [...ingredientQuantities];
    newQuantities[index]++;
    setIngredientQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    const newQuantities = [...ingredientQuantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
    }
    setIngredientQuantities(newQuantities);
  };

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
        {price && <Text style={styles.price}>{`${price} грн.`}</Text>}
      </View>
      {recipe?.length && (
        <View style={styles.ingredientContainer}>
          {recipe?.map((element, index) => {
            return (
              <View style={styles.ingredient} key={index}>
                <Text style={styles.ingredientText}>{element}</Text>
                <View style={styles.rightSide}>
                  <Text style={styles.quantity}>
                    {ingredientQuantities[index]}
                  </Text>
                  <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => incrementQuantity(index)}>
                      <AntDesign name="pluscircleo" size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => decrementQuantity(index)}>
                      <Feather name="minus" size={28} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      )}
      <TouchableOpacity style={styles.listButton}>
        <Text style={styles.listButtonText}>До списку покупок</Text>
      </TouchableOpacity>
    </View>
  );
};
