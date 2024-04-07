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
      <RowItem underline label={t('profile.email')} value="again.this.coder@gmail.com" />
      <RowItem label={t('profile.gender2')} value={t(`profile.gender.${genderFromBackend}`)} />
      <RowItem label={t('profile.mealsCreated')} value={"8"} />
      <RowItem label={t('profile.ratedMeals')} value={"44"} />
      <RowItem label={t("profile.avGrade")} value={"4.2"} />
    </View>
  );
};

export default UserInfo;
