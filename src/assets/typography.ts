import { StyleSheet } from "react-native";
import { normalize } from "./helpers";

export const textStyle = StyleSheet.create({
  titleS30W800: {
    fontSize: normalize(30),
    fontWeight: "800",
  },
  titleS16W500: {
    fontSize: normalize(16),
    fontWeight: "500",
  },
});
