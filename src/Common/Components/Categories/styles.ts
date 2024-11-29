import { StyleSheet } from "react-native";
import {scaleByHeight, scaleByWidth, SCREEN_WIDTH} from "../../Assets/Helpers";
import {colors} from "../../Assets/Colors";
import textStyle from "../../Assets/Typography";

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
