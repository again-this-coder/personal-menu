import { StyleSheet } from "react-native";
import { colors } from "src/assets/colors";
import { SCREEN_HEIGHT } from "src/assets/helpers";

export const styles = StyleSheet.create({
  container: {
    minHeight: SCREEN_HEIGHT,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
