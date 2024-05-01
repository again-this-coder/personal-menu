import { View, Text, TouchableOpacity } from "react-native";
import React, { FC, useContext } from "react";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import { ModalContext } from "store/context/modalContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
type Props = {
  title: string;
  okButtonText: string;
  declineButtonText?: string;
  hideOkButton?: boolean;
  onOkPress: () => void;
  onDeclinePress?: () => void;
};

const CommonModalContent: FC<Props> = ({
  title,
  okButtonText,
  declineButtonText,
  hideOkButton,
  onDeclinePress,
  onOkPress,
}) => {
  const { t } = useTranslation();
  const modalContext = useContext(ModalContext);

  const handleCloseModal = () => {
    modalContext?.closeModal();
  };

  console.log(modalContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeIcon} onPress={handleCloseModal}>
        <MaterialCommunityIcons name="window-close" size={30} color="black" />
      </TouchableOpacity>

      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.btnContainer}>
        {!hideOkButton && (
          <TouchableOpacity onPress={onOkPress} style={styles.button}>
            <Text style={styles.btnText}>{okButtonText}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={onDeclinePress ?? handleCloseModal}
          style={styles.button}
        >
          <Text style={styles.btnText}>
            {declineButtonText ?? t("modal.commonModal.closeButton")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommonModalContent;
