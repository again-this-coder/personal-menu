import { View, Text } from 'react-native';
import React, { FC, useContext } from 'react';
import { ModalContext } from 'store/context/modalContext';
import { Modals } from './constants';
import { Modal, Portal } from 'react-native-paper';
import { styles } from './styles';
import CommonModalContent from './Content/CommonModal/CommonModalContent';
import { useNavigation } from '@react-navigation/native';
import { Screens } from 'src/navigation/screens';
import { useTranslation } from 'react-i18next';
import AddedToShoppingListModal from './ModalWindows/AddedToShoppingList';

const ModalFabric: FC = () => {
  const modalContext = useContext(ModalContext);
  const navigation = useNavigation<any>();
  const { t } = useTranslation();

  const handleGoToShoppingList = () => {
    modalContext.closeModal();
    navigation?.navigate(Screens.SHOPPING_SCREEN);
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
            title={t('modal.commonModal.title')}
            okButtonText={t('modal.commonModal.okBtn')}
            onOkPress={handleGoToShoppingList}
          />
        );

      default:
        return (
          <View style={{ width: 300, height: 240 }}>
            <Text> this is modal</Text>
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
