import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";
import NewMeal from "src/components/NewMeal/NewMeal";
import { Formik } from "formik";

const AddMealScreen: FC = () => {
  const handleFormSubmit = () => {
    console.log("formSubmitted");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>AddMealScreen</Text>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{ name: "test", age: 2 }}
      >
        <NewMeal />
      </Formik>
    </ScrollView>
  );
};

export default AddMealScreen;
