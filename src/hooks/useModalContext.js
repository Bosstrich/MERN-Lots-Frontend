import { ModalContext } from "../context/ModalContext";
import React from 'react';

export const useModalContext = () => {

  const context = React.useContext(ModalContext);

  if(!context) {

    throw Error("useModalContext must be inside a ModalContextProvider");

  }

  return context;
}