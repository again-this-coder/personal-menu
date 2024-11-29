import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";


const ProfileScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <TouchableOpacity style={styles.about}>
          <Text style={styles.left}>Про додаток</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.about}>
          <Text style={styles.left}>Повідомити про проблему</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
