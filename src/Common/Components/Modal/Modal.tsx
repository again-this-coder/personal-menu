import { View, Text } from 'react-native';
import React, { FC, useContext } from 'react';
import { ModalContext } from '../../Store/Context/ModalContext';
import { Modals } from './constants';
import { Modal, Portal } from 'react-native-paper';
import { styles } from './styles';
import CommonModalContent from './Content/CommonModal/CommonModalContent';
import { useNavigation } from '@react-navigation/native';
import { Tabs} from '../../../Modules/Navigation/Screens';
import AddedToShoppingListModal from './ModalWindows/AddedToShoppingList';

const ModalFabric: FC = () => {
  const modalContext = useContext(ModalContext);
  const navigation = useNavigation<any>();

  const handleGoToShoppingList = () => {
    modalContext.closeModal();
    navigation?.navigate(Tabs.SHOPPING_SCREEN);
  };

  const selectModal = () => {
    switch (modalContext?.modalType) {
      case Modals.ADEED_TO_SHOPPING_LIST:
        return (
          <AddedToShoppingListModal navigation={modalContext.navigation} modalContext={modalContext} />
        );
      case Modals.COMMON_MODAL:
        return (
          <CommonModalContent
            title={'Готово!'}
            okButtonText={'До списку'}
            onOkPress={handleGoToShoppingList}
          />
        );

      default:
        return (
          <View style={{ width: 300, height: 240 }}>
            <Text> this is test modal</Text>
          </View>
        );
    }
  };

  return (
    <Portal>
      <Modal
        visible={Boolean(modalContext?.isOpened)}
        onDismiss={modalContext?.closeModal}
        dismissable
        contentContainerStyle={styles.commonStyleModal}
      >
        {selectModal()}
      </Modal>
    </Portal>
  );
};

export default ModalFabric;
