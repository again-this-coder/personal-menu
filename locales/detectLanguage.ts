import AsyncStorage from "@react-native-async-storage/async-storage";

// Save selected language
export const saveLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem("selectedLanguage", language);
  } catch (error) {
    console.error("Error saving language:", error);
  }
};

// Retrieve selected language
export const getSelectedLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem("selectedLanguage");
    return language !== null ? language : "en"; // 'default' can be your fallback language
  } catch (error) {
    console.error("Error retrieving language:", error);
    return "en";
  }
};
