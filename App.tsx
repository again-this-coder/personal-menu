import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import RootNavigation from './src/navigation/RootNavigation';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

const prefix = Linking.createURL('/');

export default function App() {
  const linking = {
    prefixes: [prefix],
  };
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
