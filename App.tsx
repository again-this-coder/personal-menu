import {GestureHandlerRootView} from "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {Text} from "react-native";
import {PaperProvider} from "react-native-paper";
import {SafeAreaProvider} from "react-native-safe-area-context";
import ModalContextProvider from "./src/Common/Store/Context/ModalContext";
import ModalFabric from "./src/Common/Components/Modal/Modal";
import RootNavigation from "./src/Modules/Navigation/RootNavigation";



export default function App() {


    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{flex: 1}}>
                        <PaperProvider>
                            <ModalContextProvider>
                                <NavigationContainer
                                    fallback={<Text>Loading...</Text>}
                                >
                                    <ModalFabric/>
                                    <RootNavigation/>
                                </NavigationContainer>
                            </ModalContextProvider>
                        </PaperProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}
