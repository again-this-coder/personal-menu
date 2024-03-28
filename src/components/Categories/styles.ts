import { StyleSheet } from "react-native";
import { colors } from "src/assets/colors";
import { SCREEN_WIDTH, scaleByHeight, scaleByWidth } from "src/assets/helpers";
import textStyle from "src/assets/typography";

export const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    gap: scaleByWidth(20),
  },
  categoryContainer: {
    gap: scaleByWidth(10),
    flexDirection: "row",
    paddingRight: scaleByWidth(40),
  },
  category: {
    borderWidth: scaleByWidth(1),
    paddingHorizontal: scaleByWidth(12),
    paddingVertical: scaleByHeight(10),
    borderRadius: scaleByWidth(6),
    alignItems: "center",
    backgroundColor: "#e9eff2",
  },
  activeColor: {
    backgroundColor: colors.blue,
  },
  title: {
    ...textStyle.titleS20W600,
  },
});
