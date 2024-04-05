import { View, Text } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "./styles";

const Language = () => {
  const testData = [{ title: "Українська" }, { title: "English" }];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Мова :</Text>
      <SelectDropdown
        data={testData}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || "Select"}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    </View>
  );
};

export default Language;
