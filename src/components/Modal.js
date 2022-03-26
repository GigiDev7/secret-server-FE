import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-[rgba(0,0,0,0.7)]"></div>
      <div className=" flex flex-col w-[500px] h-[300px] bg-[#fff] fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <p className="mx-2 mt-2 break-words">{children}</p>
        <button
          onClick={onClose}
          className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-sm absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          Close
        </button>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
