import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { Provider } from "react-redux";
import RootNavigation from "./src/navigation/RootNavigation";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { store } from "./redux/store";

const prefix = Linking.createURL("/");

export default function App() {
  const linking = {
    prefixes: [prefix],
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer
          linking={linking}
          fallback={<Text>Loading...</Text>}
        >
          <RootNavigation />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}
