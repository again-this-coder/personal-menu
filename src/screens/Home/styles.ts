import { StyleSheet } from "react-native";
import { colors } from "src/assets/colors";
import { scaleByHeight, scaleByWidth } from "src/assets/helpers";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    paddingHorizontal: scaleByWidth(20),
  },
  contentContainer: {
    paddingHorizontal: scaleByWidth(20),
  },
  categories: {
    marginVertical: scaleByHeight(24),
  },
});
