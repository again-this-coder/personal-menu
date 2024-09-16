import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, scaleByHeight, scaleByWidth } from "src/assets/helpers";
import textStyle from "src/assets/typography";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: SCREEN_WIDTH * 0.8,
    borderRadius: 10,
    padding: scaleByWidth(24),
    paddingBottom: scaleByHeight(18),
  },
  closeIcon: {
    position: "absolute",
    right: -scaleByWidth(10),
    top: -scaleByHeight(18),
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingHorizontal: scaleByWidth(20),
    paddingVertical: scaleByHeight(8),
    backgroundColor: "green",
    borderRadius: 18,
    minWidth: "40%",
  },
  btnText: {
    ...textStyle.titleS18W500,
    textAlign: "center",
  },
  titleText: {
    ...textStyle.titleS28W600,
    textAlign: "center",
  },
});
