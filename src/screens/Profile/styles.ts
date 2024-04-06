import { StyleSheet } from "react-native";
import { colors } from "src/assets/colors";
import { scaleByHeight, scaleByWidth } from "src/assets/helpers";
import textStyle from "src/assets/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    paddingHorizontal: scaleByWidth(40),
    gap: 20,
  },
  image: {
    width: scaleByWidth(140),
    height: scaleByHeight(220),
  },
  greetingText: {
    ...textStyle.titleS24W600,
    marginTop: scaleByHeight(14),
  },
  contentWrapper: {
    gap: scaleByHeight(12),
  },
  about: {
    alignSelf: "flex-start",
    width: "auto",
    borderBottomWidth: 1,
  },
  left: {
    ...textStyle.titleS20W600,
  },
  logoutText: {
    ...textStyle.titleS20W600,
    color: colors.blue,
    textDecorationLine: "underline",
  },
});
