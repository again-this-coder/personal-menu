import { View, Text } from 'react-native';
import React, { FC, useContext } from 'react';
import { ModalContext } from '../../Store/Context/ModalContext';
import { Modal, Portal } from 'react-native-paper';
import { styles } from './styles';

const ModalFabric: FC = () => {
  const modalContext = useContext(ModalContext);

  const selectModal = () => {
    switch (modalContext?.modalType) {

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
