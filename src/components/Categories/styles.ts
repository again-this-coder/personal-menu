import { StyleSheet } from "react-native";
import { colors } from "src/assets/colors";
import { scaleByHeight, scaleByWidth } from "src/assets/helpers";

export const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  category: {
    borderWidth: scaleByWidth(1),
    paddingHorizontal: scaleByWidth(12),
    paddingVertical: scaleByHeight(10),
    borderRadius: scaleByWidth(6),
    alignItems: "center",
    backgroundColor: '#e9eff2',
  },
  activeColor: {
    backgroundColor: colors.blue,
  },
});
