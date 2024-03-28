import React, { FC, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import ShoppingList from "src/components/ShoppingList/ShoppingList";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const ShoppingScreen: FC = () => {
  const [isVisibleFooter, setIsVisibleFooter] = useState(true);

  const handleAddItem = () => {
    // Logic to handle adding item
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
          <TextInput mode="outlined" label={"Продукт"} />
          <TextInput
            mode="outlined"
            label={"Кількість"}
            keyboardType="number-pad"
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
            <Text style={styles.addButtonText}>Додати</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

export default ShoppingScreen;
