import { StyleSheet } from "react-native";
import {scaleByHeight, scaleByWidth, SCREEN_HEIGHT, SCREEN_WIDTH} from "../../Assets/Helpers";
import {colors} from "../../Assets/Colors";


export const styles = StyleSheet.create({
  commonStyleModal: {
    margin: scaleByWidth(36),
    shadowOpacity: 0,
  },
  flexContainer: {
    flex: 1,
  },
  canvas: {
    position: "absolute",
    top: -scaleByHeight(60),
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 1.2,
    backgroundColor: colors.grey,
    opacity: 0.25,
  },
});
