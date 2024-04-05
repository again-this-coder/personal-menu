import { View, Text } from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";

type Props = {
  label: string;
  value: string;
  underline?: boolean;
};

const RowItem: FC<Props> = ({ label, value, underline }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.left}>{label}:</Text>
      <Text style={[styles.right, underline && styles.underline]}>{value}</Text>
    </View>
  );
};

export default RowItem;
