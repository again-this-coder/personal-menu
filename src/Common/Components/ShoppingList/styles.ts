import { StyleSheet } from "react-native";
import {colors} from "../../Assets/Colors";
import {scaleByHeight, scaleByWidth} from "../../Assets/Helpers";
import textStyle from "../../Assets/Typography";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: scaleByWidth(16),
    gap: scaleByHeight(18),
    padding: scaleByWidth(20),
  },

  productNameText: {
    ...textStyle.titleS16W500,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContent: {
    flexDirection: "row",
    gap: scaleByHeight(10),
  },
  image: {
    width: scaleByWidth(300),
    height: scaleByHeight(300),
  },
  emptyTitle: {
    ...textStyle.titleS16W500,
    textAlign: "center",
  },
  removeButton: {
    padding: scaleByWidth(6),
  },
});
