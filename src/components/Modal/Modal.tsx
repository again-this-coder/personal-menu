import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ModalContext } from "store/context/modalContext";
import { Modals } from "./contants";
import { Modal, Portal } from "react-native-paper";
import { styles } from "./styles";

const ModalFabric = () => {
  const modalContext = useContext(ModalContext);

  const selectModal = () => {
    switch (modalContext?.modalType) {
      case Modals.TEST:
        return (
          <View style={{width: 300, height: 240}}>
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
