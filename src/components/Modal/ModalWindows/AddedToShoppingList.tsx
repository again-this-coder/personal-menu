import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../assets/colors';
import textStyle from '../../../assets/typography';
import { useTranslation } from 'react-i18next';

const AddedToShoppingListModal = ({ navigation, modalContext }) => {
  const { t } = useTranslation();

  function handleGoToShoppingList() {
    modalContext?.closeModal();
    navigation.navigate(t('navigation.shopping'));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your products have been added to the shopping list</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.closeButton]} onPress={() => modalContext?.closeModal()}>
          <Text>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.navButton]} onPress={handleGoToShoppingList}>
          <Text>Shopping list</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default AddedToShoppingListModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
    gap: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  title: {
    ...textStyle.titleS20W600,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: colors.blue,
  },
  navButton: {
    backgroundColor: colors.pink,
  },
});