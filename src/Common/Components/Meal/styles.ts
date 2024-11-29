import { StyleSheet } from "react-native";
import {scaleByHeight, scaleByWidth, SCREEN_HEIGHT, SCREEN_WIDTH} from "../../Assets/Helpers";
import {colors} from "../../Assets/Colors";
import textStyle from "../../Assets/Typography";


export const styles = StyleSheet.create({
  container: {
    marginBottom: scaleByHeight(60),
  },
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
    color: colors.red,
  },
  ingredientContainer: {
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: colors.blueLight,
    padding: scaleByWidth(24),
    marginTop: scaleByHeight(14),
    gap: scaleByHeight(10),
    justifyContent: "center",
  },
  ingredientText: {
    ...textStyle.titleS20W600,
  },
  addIngredient: {
    ...textStyle.titleS16W500,
  },
  ingredient: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listButton: {
    marginTop: scaleByHeight(24),
    paddingVertical: scaleByHeight(12),
    alignSelf: "center",
    backgroundColor: colors.blue,
    paddingHorizontal: scaleByWidth(36),
    borderRadius: 14,
  },
  buttonDisabled: {
    backgroundColor: colors.fadedGrey,
  },
  listButtonText: {
    ...textStyle.titleS16W500,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: scaleByWidth(10),
  },
  quantity: {
    ...textStyle.titleS18W500,
  },
  rightSide: {
    flexDirection: "row",
    gap: scaleByWidth(20),
    alignItems: "center",
    justifyContent: "center",
  },
});
