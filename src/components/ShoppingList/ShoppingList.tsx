import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { images } from "src/assets/images";
import { useDispatch, useSelector } from "react-redux";
import { removeShoppingItem } from "redux/reducers/shopping/shoppingSlice";

const ShoppingList: FC = () => {
  const shoppingList = useSelector((state) => state.shopping.shopItems);
  const dispatch = useDispatch();

  const handleRemoveFromList = (id) => {
    dispatch(removeShoppingItem(id));
  };

  return (
    <View style={styles.container}>
      {!shoppingList.length ? (
        <View>
          <Image source={images.emptyCart} style={styles.image} />
          <Text style={styles.emptyTitle}>Список покупок наразі пустий</Text>
        </View>
      ) : (
        shoppingList.map((item, index) => {
          return (
            <View key={index} style={styles.listItem}>
              <View style={styles.listContent}>
                <Text style={styles.productNameText}>{item?.product}</Text>
                <Text
                  style={styles.productNameText}
                >{`x ${item?.quantity}`}</Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveFromList(item.id)}
              >
                <MaterialCommunityIcons
                  name="basket-remove-outline"
                  size={20}
                />
              </TouchableOpacity>
            </View>
          );
        })
      )}
    </View>
  );
};

export default ShoppingList;
