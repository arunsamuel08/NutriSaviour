import "./modal.css";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loginform from "./loginform/loginform";
import Registerform from "./registerform/registerform";
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

  const [signup, setsignUp] = useState(false);

  const switchSignup = () => {
    setsignUp(!signup);
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
            <h2>Sign In/Sign Up</h2>
            <button onClick={props.onClose}>
              <img src="./images/close.png" alt="close" />
            </button>
          </div>

          {signup ? <Registerform /> : <Loginform />}

          <div className="registerUser">
            <p>
              {signup ? (
                <span>Existing user? Login by clicking </span>
              ) : (
                <span>Not an already existing user? Sign Up </span>
              )}
              <button onClick={switchSignup}>Here</button>
            </p>
          </div>

          <div className="or-div">
            <h2>
              <span>OR</span>
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Modal;
