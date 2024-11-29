import { StyleSheet } from "react-native";
import {scaleByWidth} from "../../Assets/Helpers";
import textStyle from "../../Assets/Typography";

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
