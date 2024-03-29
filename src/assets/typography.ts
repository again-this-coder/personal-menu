import { StyleSheet } from "react-native";
import { normalize } from "./helpers";

const textStyle = StyleSheet.create({
  titleS30W800: {
    fontSize: normalize(30),
    fontWeight: "800",
  },
  titleS24W600: {
    fontSize: normalize(24),
    fontWeight: "600",
  },
  titleS20W600: {
    fontSize: normalize(20),
    fontWeight: "600",
  },
  titleS16W500: {
    fontSize: normalize(16),
    fontWeight: "500",
  },
  titleS18W500: {
    fontSize: normalize(18),
    fontWeight: "500",
  },
});
export default textStyle;
