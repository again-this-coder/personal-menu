import { StyleSheet } from "react-native";
import {colors} from "../../Common/Assets/Colors";
import {scaleByHeight, scaleByWidth} from "../../Common/Assets/Helpers";

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
