import React from "react";
import ReactDOM from 'react-dom';

import AnimationWrapper from "./AnimationWrapper";

const Modal = ({ showModal, children }) => {

  if(!showModal) return null;

  return ReactDOM.createPortal(
    <AnimationWrapper className='fixed inset-0 bg-black bg-opacity-60 z-50'>
      <div className='fixed inset-0 flex justify-center items-center'>
        <div className="mx-auto flex flex-col gap-7">{children}</div>
      </div>
    </AnimationWrapper>,
    document.getElementById('modal-root')
  );
};

export default Modal;
