import { StyleSheet } from "react-native";
import {scaleByHeight, scaleByWidth} from "../../Assets/Helpers";
import {colors} from "../../Assets/Colors";
import textStyle from "../../Assets/Typography";

export const styles = StyleSheet.create({
  container: {
    minHeight: scaleByHeight(220),
    width: scaleByWidth(150),
    justifyContent: "flex-end",
  },
  contentContainer: {
    height: scaleByHeight(160),
    width: "100%",
    backgroundColor: colors.grey,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  content: {
    flex: 0.55,
    justifyContent: "space-between",
    padding: scaleByWidth(10),
    borderRadius: 20,
  },
  footer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerLeft: {
    flexDirection: "row",
    gap: scaleByHeight(10),
    alignItems: "center",
  },
  title: {
    ...textStyle.titleS16W500,
    textAlign: "center",
  },
  time: {
    color: colors.fadedGrey,
  },
  image: {
    width: scaleByWidth(92),
    height: scaleByHeight(92),
    borderRadius: 100,
  },
  imageContainer: {
    top: scaleByHeight(8),
    left: scaleByHeight(23),
    position: "absolute",
    width: scaleByWidth(104),
    height: scaleByHeight(104),
    backgroundColor: colors.grey,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
