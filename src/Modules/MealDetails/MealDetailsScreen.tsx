import { View } from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import Details from "../../Common/Components/Details/Details";

const MealDetailsScreen: FC = () => {
  const route = useRoute<any>();
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Details id={id} />
    </View>
  );
};

export default MealDetailsScreen;
