import { StyleSheet } from "react-native";
import { colors } from "src/assets/colors";
import textStyle from "src/assets/typography";
import { scaleByHeight, scaleByWidth } from "src/assets/helpers";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueFaded,
  },
  title: {
    ...textStyle.titleS20W600,
    textAlign: "center",
    marginBottom: scaleByHeight(20),
  },
  contentContainer: {
    padding: scaleByWidth(20),
  },
  scrollContainer: {
    paddingBottom: scaleByHeight(40),
    justifyContent: "space-between",
  },
  footer: {
    gap: scaleByHeight(10),
    paddingHorizontal: scaleByWidth(20),
    marginBottom: scaleByHeight(20),
  },
  addButton: {
    marginTop: scaleByHeight(10),
    padding: scaleByWidth(14),
    backgroundColor: colors.blue,
    borderRadius: 14,
  },
  addButtonText: {
    textAlign: "center",
    ...textStyle.titleS16W500,
  },
  hideKeyboardButton: {
    padding: scaleByWidth(10),
    backgroundColor: colors.white,
    borderRadius: 50,
    position: "absolute",
    top: -scaleByHeight(10),
    right: 0,
    zIndex: 10,
  },
});
