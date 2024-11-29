import { StyleSheet } from "react-native";
import {colors} from "../../Common/Assets/Colors";
import {scaleByHeight, scaleByWidth} from "../../Common/Assets/Helpers";
import textStyle from "../../Common/Assets/Typography";

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
