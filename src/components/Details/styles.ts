import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, scaleByWidth } from "src/assets/helpers";

export const styles = StyleSheet.create({
  container: {
    minHeight: SCREEN_HEIGHT,
    padding: scaleByWidth(20),
  },
});
