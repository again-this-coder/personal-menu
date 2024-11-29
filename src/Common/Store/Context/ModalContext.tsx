import React, { createContext, useState } from 'react';

type ContextProps = {
  isOpened: boolean;
  modalType: string;
  navigation: any | null;
  openModal: (name: string, navigation?: any) => void;
  closeModal: () => void;
};

// Create context
export const ModalContext = createContext<ContextProps | null>(null);

// Modal Context Provider
function ModalContextProvider({ children }) {
  const [isOpened, setIsOpened] = useState(false);
  const [modalType, setModalType] = useState<string>('');
  const [navigation, setNavigation] = useState<any | null>(null);

  function closeModal() {
    setIsOpened(false);
    setNavigation(null);
  }

  function openModal(name: string, navigation?: any) {
    setModalType(name);
    setIsOpened(true);
    if (navigation) setNavigation(navigation);
  }

  const value = {
    isOpened,
    modalType,
    navigation,
    openModal,
    closeModal,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export default ModalContextProvider;
