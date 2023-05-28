import "./modal.css";
import React from "react";

const Modal = props => {
  return (
    <div className="modal-bg" onClick={props.onClose}>
      <div className="modal-cont" onClick={e => e.stopPropagation()}>
        <div className="modal-title">
          <h2>Login</h2>
          <button onClick={props.onClose}>
            <img src="./images/close.png" alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
