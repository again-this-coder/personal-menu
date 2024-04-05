import { StyleSheet } from "react-native";
import { scaleByWidth } from "src/assets/helpers";
import textStyle from "src/assets/typography";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: scaleByWidth(8),
    alignItems: "center",
  },
  left: {
    ...textStyle.titleS20W600,
  },
  right: {
    ...textStyle.titleS18W500,
  },
  underline: {
    textDecorationLine: "underline",
  },
});
