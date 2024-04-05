import { View } from "react-native";
import React, { FC } from "react";
import RowItem from "../ProfileRowItem/RowItem";
import { styles } from "./styles";

const UserInfo: FC = () => {
  return (
    <View style={styles.container}>
      <RowItem underline label="Email" value="again.this.coder@gmail.com" />
      <RowItem label="Gender" value="Козак" />
    </View>
  );
};

export default UserInfo;
