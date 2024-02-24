import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { Provider } from "react-redux";
import RootNavigation from "./src/navigation/RootNavigation";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { store } from "./redux/store";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "./FirebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import MenuScreen from "src/screens/Menu/MenuScreen";

const prefix = Linking.createURL("/");

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = useState({});
  const [requests, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "522292206159-3vm2nulnq3iuhi49e6jall2u7g8jdgkf.apps.googleusercontent.com",
    androidClientId:
      "522292206159-fg8acdulakkpdvgnkihkedm8h719023t.apps.googleusercontent.com",
  });

  const linking = {
    prefixes: [prefix],
  };

  useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
      } else {
        console.log("else");
      }
    });
    return () => unsub();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer
          linking={linking}
          fallback={<Text>Loading...</Text>}
        >
          {userInfo ? (
            <RootNavigation />
          ) : (
            <MenuScreen promptAsync={promptAsync} />
          )}
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}
