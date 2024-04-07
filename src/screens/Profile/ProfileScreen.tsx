import {
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";
import UserInfo from "src/components/UserInfo/UserInfo";
import { images } from "src/assets/images";
import Language from "src/components/Language/Language";
import { useTranslation } from "react-i18next";

const ProfileScreen: FC = () => {
  const { t } = useTranslation();
  const gender = "male";

  //дістати юзернейм, імя, стать => впіхнути це в масив, передати по індексу в ряди
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={gender === "male" ? images.chefMale : images.chefFemale}
      />
      <Text style={styles.greetingText}>{t("profile.greeting")} Сергій!</Text>
      <View style={styles.contentWrapper}>
        <UserInfo />
        <Language />

        <TouchableOpacity style={styles.about}>
          <Text style={styles.left}>{t("profile.about")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.about}>
          <Text style={styles.left}>{t("profile.issue")}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.logoutText}>{t("profile.logout")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
