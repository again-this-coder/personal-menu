import { View } from "react-native";
import React, { FC } from "react";
import RowItem from "../ProfileRowItem/RowItem";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const UserInfo: FC = () => {
  const { t } = useTranslation();
  const genderFromBackend = "female";
  return (
    <View style={styles.container}>
      <RowItem underline label="Email" value="again.this.coder@gmail.com" />
      <RowItem label="Gender" value={t(`gender.${genderFromBackend}`)} />
      <RowItem label="Meals Created" value={"8"} />
      <RowItem label="Rated meals" value={"44"} />
      <RowItem label="My average grade" value={"4.2"} />
    </View>
  );
};

export default UserInfo;
