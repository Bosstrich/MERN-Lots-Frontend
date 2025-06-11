import {useState, createContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {

  const [modal, setModal] = useState({ isVisible: false, type: null });
  const openModal = (type) => setModal({ isVisible: true, type });
  const closeModal = () => setModal({ isVisible: false, type: null });

  return (

    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

