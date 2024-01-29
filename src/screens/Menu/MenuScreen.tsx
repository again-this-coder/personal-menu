import { View, Text, Button } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const MenuScreen: FC = () => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Text>MenuScreen</Text>
      <Button title="Go Back" onPress={goBack} />
      
    </View>
  );
};

export default MenuScreen;
