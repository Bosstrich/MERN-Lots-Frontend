import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import AnimationWrapper from "./AnimationWrapper";

const Modal = ({ showModal, children, type }) => {

  return ReactDOM.createPortal(
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0}}
          transition={{duration: 0.3}}
          key={type}
          className="fixed inset-0 bg-black bg-opacity-60 z-50"
        >
          <div className="fixed inset-0 flex justify-center items-center">
            <div className="mx-auto flex flex-col gap-7">{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
};

export default Modal;
