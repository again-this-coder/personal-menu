import React, { FC, useContext, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MealType } from "src/data/mealData";
import { AntDesign, Feather } from "@expo/vector-icons";
import {
  addShoppingItem,
  updateShoppingItem,
} from "redux/reducers/shopping/shoppingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ModalContext } from "store/context/modalContext";
import { Modals } from "../Modal/constants";

export const Meal: FC<MealType> = ({
  image,
  title,
  price,
  description,
  recipe,
}) => {
  const [ingredientQuantities, setIngredientQuantities] = useState(
    recipe?.map((element) => ({ product: element, quantity: 0 }))
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.shopping.shopItems);
  const modalContext = useContext(ModalContext);

  const incrementQuantity = (index) => {
    const newQuantities = [...ingredientQuantities];
    newQuantities[index].quantity++;
    setIngredientQuantities(newQuantities);
  };
  const isButtonDisabled = ingredientQuantities?.every(
    (item) => item.quantity === 0
  );

  const decrementQuantity = (index) => {
    const newQuantities = [...ingredientQuantities];
    if (newQuantities[index].quantity > 0) {
      newQuantities[index].quantity--;
    }
    setIngredientQuantities(newQuantities);
  };

  const handleAddItem = () => {
    const shopItems = ingredientQuantities.filter((item) => item.quantity > 0);
    shopItems.forEach((item) => {
      // Check if the item already exists in the shopping list
      const existingItem = shoppingList.find(
        (shopItem) => shopItem.product === item.product
      );
      if (existingItem) {
        // If the item exists, update its quantity
        dispatch(
          updateShoppingItem({
            id: existingItem.id,
            quantity: existingItem.quantity + item.quantity,
          })
        );
      } else {
        // If the item doesn't exist, add it to the shopping list
        const shopItem = {
          product: item.product,
          quantity: item.quantity,
          id: Math.random(),
        };
        dispatch(addShoppingItem(shopItem));
      }
      setIngredientQuantities(
        ingredientQuantities.map((ingredient) => ({
          ...ingredient,
          quantity: 0,
        }))
      );
      handleOpenModal();
    });
  };

  const handleOpenModal = () => {
    modalContext.openModal(Modals.COMMON_MODAL);
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
          {ingredientQuantities.map((ingredient, index) => {
            return (
              <View style={styles.ingredient} key={index}>
                <Text style={styles.ingredientText}>{ingredient.product}</Text>
                <View style={styles.rightSide}>
                  <Text style={styles.quantity}>{ingredient.quantity}</Text>
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
      {ingredientQuantities?.length && (
        <TouchableOpacity
          style={[styles.listButton, isButtonDisabled && styles.buttonDisabled]}
          onPress={handleAddItem}
          disabled={isButtonDisabled}
        >
          <Text style={styles.listButtonText}>{t("meal.add")}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
