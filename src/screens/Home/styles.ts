import { StyleSheet } from "react-native";
import { colors } from "src/assets/colors";
import { scaleByHeight, scaleByWidth } from "src/assets/helpers";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    paddingLeft: scaleByWidth(30),
  },
  contentContainer: {},
  categories: {
    marginVertical: scaleByHeight(24),
  },
});
