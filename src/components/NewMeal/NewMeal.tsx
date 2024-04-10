import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useFormikContext } from "formik";

const NewMeal = () => {
  const { initialValues, submitForm } = useFormikContext();

  console.log(initialValues);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={submitForm}>
        <Text>NewMeal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewMeal;
