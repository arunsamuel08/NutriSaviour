import "./modal.css";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { auth } from "../../firebase/firebase-config";
const Modal = props => {
  const moveUp = {
    hidden: {
      y: "-100px",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: "1",
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
    exit: {
      y: "100px",
      opacity: "0",
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="modal-bg" onClick={props.onClose}>
      <AnimatePresence mode="wait">
        <motion.div
          className="modal-cont"
          onClick={e => e.stopPropagation()}
          variants={moveUp}
          initial="hidden"
          exit="exit"
          animate="visible"
        >
          <div className="modal-title">
            <h2>Login</h2>
            <button onClick={props.onClose}>
              <img src="./images/close.png" alt="close" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Modal;
