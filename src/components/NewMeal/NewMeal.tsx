import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { useFormikContext } from "formik";
import { TextInput } from "react-native-paper";

const NewMeal = () => {
  const { initialValues, submitForm } = useFormikContext();
  const [mealName, setMealName] = useState("");

  console.log(initialValues);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Meal name"
        onChangeText={(text) => setMealName(text)}
        value={mealName}
        multiline
        autoCapitalize="none"
      />
      <TextInput />
    </View>
  );
};

export default NewMeal;
