import { Text, ScrollView, SafeAreaView } from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";
import { Formik } from "formik";

const AddMealScreen: FC = () => {
  const handleFormSubmit = () => {
    console.log("formSubmitted");
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text>AddMealScreen</Text>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={{ name: "test", age: 2 }}
        >
        </Formik>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AddMealScreen;
