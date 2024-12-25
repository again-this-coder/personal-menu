import {View, SafeAreaView, ScrollView, Text} from "react-native";
import React, { FC, useState } from "react";
import { styles } from "./styles";
import { NavigationProp } from "@react-navigation/native";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}
const HomeScreen: FC = ({ navigation }: RouterProps) => {

  const [mealsData, setMealsData] = useState([]);
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>

        <View style={styles.mealsContainer}>
    <Text>this is test 123</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
