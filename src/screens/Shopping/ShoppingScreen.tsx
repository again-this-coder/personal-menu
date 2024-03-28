import React, { FC, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import ShoppingList from "src/components/ShoppingList/ShoppingList";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { shoppingItemValidationSchema } from "src/assets/validation"; // Import the validation schemas
import { useDispatch } from "react-redux";
import { addShoppingItem } from "redux/reducers/shopping/shoppingSlice";

const ShoppingScreen: FC = () => {
  const [isVisibleFooter, setIsVisibleFooter] = useState(true);
  const dispatch = useDispatch();

  const handleAddItem = (item, resetForm) => {
    const shopItem = {
      ...item,
      id: Math.random(),
    };
    dispatch(addShoppingItem(shopItem));
    resetForm(); // Reset the form values
  };

  const handleHideFooter = () => {
    setIsVisibleFooter(!isVisibleFooter);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={styles.title}>Список покупок</Text>
          <ShoppingList />
        </View>
        {!isVisibleFooter && (
          <TouchableOpacity style={styles.addButton} onPress={handleHideFooter}>
            <Text style={styles.addButtonText}>Показати</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      {isVisibleFooter && (
        <KeyboardAvoidingView
          style={styles.footer}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={20}
        >
          <TouchableOpacity
            style={styles.hideKeyboardButton}
            onPress={handleHideFooter}
          >
            <MaterialIcons name="keyboard-hide" size={30} />
          </TouchableOpacity>
          <Formik
            initialValues={{ product: "", quantity: "" }}
            onSubmit={(values, { resetForm }) => {
              handleAddItem(values, resetForm); // Call your logic to add the item
            }}
            validationSchema={shoppingItemValidationSchema} // Use both schemas for validation
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View>
                <TextInput
                  mode="outlined"
                  label={"Продукт"}
                  value={values.product}
                  onChangeText={handleChange("product")}
                  onBlur={handleBlur("product")}
                />
                <Text style={styles.errorText}>{errors.product}</Text>
                <TextInput
                  mode="outlined"
                  label={"Кількість"}
                  value={values.quantity}
                  onChangeText={handleChange("quantity")}
                  onBlur={handleBlur("quantity")}
                  keyboardType="numeric"
                />
                <Text style={styles.errorText}>{errors.quantity}</Text>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={handleSubmit}
                >
                  <Text style={styles.addButtonText}>Додати</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

export default ShoppingScreen;
