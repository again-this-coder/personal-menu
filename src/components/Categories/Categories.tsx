import { View, Text } from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";

const Categories: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.category}>
        <Text style={styles.text}>Categories</Text>
      </View>
    </View>
  );
};

export default Categories;
