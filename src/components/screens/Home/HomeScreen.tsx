import { View, Text, Button } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../../navigation/screens';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

const HomeScreen: FC = () => {
  const { navigate } = useNavigation();
  const dishID = 1;

  const navigateToMenuScreen = () => {
    navigate(Screens.MENU_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: '700', textAlign: 'center' }}>
        {'це домашня сторінка'}
      </Text>

      <Button
        title="open with link"
        onPress={() => Linking.openURL('https://docs.expo.io')}
      />

      <Button
        title="open with web browser"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <Button title="go to Menu" onPress={navigateToMenuScreen} />
    </View>
  );
};

export default HomeScreen;
