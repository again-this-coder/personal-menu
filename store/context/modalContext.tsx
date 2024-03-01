import { createContext, useState } from "react";

type ContextProps = {
  isOpened: boolean;
  modalType: string;
  closeModal: () => void;
  openModal: (name: string) => void;
};

export const ModalContext = createContext<ContextProps | null>(null);

function ModalContextProvider({ children }) {
  const [isOpened, setIsOpened] = useState(false);
  const [modalType, setModalType] = useState("");

  function closeModal() {
    setIsOpened(false);
  }

  function openModal(name: string) {
    setModalType(name);
    setIsOpened(true);
  }

  const value = {
    isOpened: isOpened,
    modalType: modalType,
    closeModal: closeModal,
    openModal: openModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export default ModalContextProvider;
