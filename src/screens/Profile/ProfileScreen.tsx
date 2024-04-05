import { SafeAreaView, Image, Text, View } from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";
import UserInfo from "src/components/UserInfo/UserInfo";
import { images } from "src/assets/images";
import Language from "src/components/Language/Language";

const ProfileScreen: FC = () => {
  const gender = "male";

  //дістати юзернейм, імя, стать => впіхнути це в масив, передати по індексу в ряди
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={gender === "male" ? images.chefMale : images.chefFemale}
      />
      <Text style={styles.greetingText}>Привіт, Сергій!</Text>
      <View style={styles.contentWrapper}>
        <UserInfo />
        <Language />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
