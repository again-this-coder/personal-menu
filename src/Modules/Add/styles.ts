import { StyleSheet } from "react-native";
import {SCREEN_HEIGHT} from "../../Common/Assets/Helpers";
import {colors} from "../../Common/Assets/Colors";

export const styles = StyleSheet.create({
  container: {
    minHeight: SCREEN_HEIGHT,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
