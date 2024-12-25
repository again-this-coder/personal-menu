import { StyleSheet } from "react-native";
import {colors} from "../../Common/Assets/Colors";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categories: {
    marginVertical:24,
  },
  mealsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    columnGap: 30,
    rowGap: 12,
  },
});
