import React, { useState, useRef } from "react";
import Modal from "./Modal";

const SecretSearch = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const handleGetSecretClick = () => {
    setIsModalShown(true);
  };

  return (
    <>
      <div className="flex justify-center mt-14">
        <h1 className="text-3xl font-semibold">Secret Server</h1>
      </div>
      <div className="flex justify-center mt-16">
        <button
          onClick={handleGetSecretClick}
          className="rounded-sm bg-green-500 hover:bg-green-600 px-3 py-2 mr-2"
        >
          Get Secret
        </button>
        <input
          placeholder="Your hash"
          type="text"
          className="w-[50%] border-[1px] rounded-sm py-1 pl-1 border-black outline-0"
        />
      </div>
      {isModalShown && <Modal onClose={() => setIsModalShown(false)}></Modal>}
    </>
  );
};

export default SecretSearch;
