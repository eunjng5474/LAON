import React from "react";
import './styles/Modal.css'

export default function Modal(props) {
  
  function closeModal(){
    props.closeModal();
  }

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
        <h2 className="font">모달임당</h2>
      </div>
    </div>
  );
}