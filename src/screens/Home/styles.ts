import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "src/assets/colors";
import { scaleByHeight, scaleByWidth } from "src/assets/helpers";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    paddingHorizontal: scaleByWidth(20),
    marginBottom: scaleByHeight(20),
  },
  categories: {
    marginVertical: scaleByHeight(24),
  },
  mealsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    columnGap: scaleByWidth(30),
    rowGap: scaleByHeight(12),
  },
});
