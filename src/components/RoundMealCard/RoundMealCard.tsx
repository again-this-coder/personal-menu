import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { images } from "src/assets/images";
import { FavoriteContext } from "store/context/favouritecontext";
import { useQuery } from "@apollo/client";
import { SWAPI_TEST } from "src/apollo/swapiQuery";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "redux/reducers/favorites/favorites";

const RoundMealCard = () => {
  const [isFavoutrite, setIsFavourite] = useState(false);
  const { loading, error, data } = useQuery(SWAPI_TEST);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  console.log(favoriteMealIds);
  // console.log(data);
  const testID = 1;

  const favoriteContext = useContext(FavoriteContext);
  const handleAddToFavourite = (id: number) => {
    dispatch(addFavorite({ id: id }));
    // favoriteContext.addFavorite(id);
    setIsFavourite(!isFavoutrite);
  };

  const handleRemoveFromFavourite = (id: number) => {
    dispatch(removeFavorite({ id: id }));
    // favoriteContext.removeFavorite(id);
    setIsFavourite(!isFavoutrite);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.potatoShrooms} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Піца салямі</Text>
          <View style={styles.footer}>
            <View style={styles.footerLeft}>
              <Text style={styles.time}>Time</Text>
              <Text>10 min</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                !isFavoutrite
                  ? handleAddToFavourite(testID)
                  : handleRemoveFromFavourite(testID)
              }
            >
              {isFavoutrite ? (
                <MaterialIcons name="favorite" size={24} color="black" />
              ) : (
                <MaterialIcons name="favorite-border" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RoundMealCard;
