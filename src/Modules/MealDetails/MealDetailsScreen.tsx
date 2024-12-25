import {Text, View} from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";

const MealDetailsScreen: FC = () => {
  const route = useRoute<any>();
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text>123 details test</Text>
    </View>
  );
};

export default MealDetailsScreen;
