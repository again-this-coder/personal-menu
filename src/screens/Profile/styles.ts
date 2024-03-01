import { StyleSheet } from "react-native";
import { scaleByWidth } from "src/assets/helpers";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scaleByWidth(40),
  },
});
