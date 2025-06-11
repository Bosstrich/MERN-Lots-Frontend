import {useModalContext} from './useModalContext';


const useModal = () => {

  const { modal, openModal, closeModal } = useModalContext();

  return {
    modalType: modal.type,
    isVisible: modal.isVisible,
    openModal,  
    closeModal,
  };
};


export default useModal;