import { StyleSheet } from "react-native";
import { colors } from "src/assets/colors";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  scaleByHeight,
  scaleByWidth,
} from "src/assets/helpers";
import textStyle from "src/assets/typography";

export const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    padding: scaleByWidth(24),
    height: SCREEN_HEIGHT * 0.45,
    width: "100%",
  },
  backgroundBox1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "45%",
    width: SCREEN_WIDTH * 0.66,
    backgroundColor: colors.pink,
    borderTopRightRadius: 20,
  },
  backgroundBox2: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: "45%",
    width: SCREEN_WIDTH * 0.66,
    backgroundColor: colors.pink,
    borderTopRightRadius: 20,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
    zIndex: 5,
  },
  mealName: {
    ...textStyle.titleS30W800,
    textAlign: "center",
  },
  mealDescription: {
    ...textStyle.titleS16W500,
    textAlign: "center",
    width: "90%",
  },
  textContainer: {
    marginTop: scaleByHeight(30),
    alignItems: "center",
    gap: scaleByHeight(14),
  },
  price: {
    ...textStyle.titleS30W800,
    color: "red",
  },
});
