import React, { FC } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "redux/reducers/favorites/favorites";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "src/navigation/screens";

export type RoundMealTypes = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  time: number;
};

const RoundMealCard: FC<RoundMealTypes> = ({ title, image, time, id }) => {
  const isFavorite = useSelector((state) => state.favorites.ids.includes(id));
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const handleAddToFavourite = (id: number) => {
    dispatch(addFavorite({ id: id }));
  };

  const handleRemoveFromFavourite = (id: number) => {
    dispatch(removeFavorite({ id: id }));
  };

  const handleNavigateToDetails = () => {
    navigation.navigate(Screens.MEAL_DETAILS, {
      id: id,
    });
  };

  return (
    <TouchableOpacity
      onPress={handleNavigateToDetails}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.footer}>
            <View style={styles.footerLeft}>
              <Text style={styles.time}>Time</Text>
              <Text>{time}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                !isFavorite
                  ? handleAddToFavourite(id)
                  : handleRemoveFromFavourite(id)
              }
            >
              {isFavorite ? (
                <MaterialIcons name="favorite" size={24} color="black" />
              ) : (
                <MaterialIcons name="favorite-border" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RoundMealCard;
