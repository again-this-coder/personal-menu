import { View, Text } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "./styles";
import i18next from "services/i18n";
import { useTranslation } from "react-i18next";
import languages from "locales/languages";
import { saveLanguage } from "locales/detectLanguage";

const Language = () => {
  const { t } = useTranslation();

  const handleChangeLanguage = (newLanguage: string) => {
    i18next.changeLanguage(newLanguage);
    saveLanguage(newLanguage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t("profile.language")}</Text>
      <SelectDropdown
        data={languages}
        onSelect={(selectedLanguage) =>
          handleChangeLanguage(selectedLanguage.initials)
        }
        renderButton={(selectedLanguage) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>{t("profile.langName")}</Text>
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
