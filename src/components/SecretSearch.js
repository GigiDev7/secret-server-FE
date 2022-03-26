import React, { useState, useRef } from "react";
import Modal from "./Modal";
import { getSecret } from "../api/index";

const SecretSearch = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [secretText, setSecretText] = useState("");
  const [invalidHash, setInvalidHash] = useState(false);

  const hashInputRef = useRef();

  const handleGetSecretClick = async () => {
    try {
      const { data } = await getSecret(hashInputRef.current.value);
      setSecretText(data.secretText);
      setIsModalShown(true);
      setInvalidHash(false);
      hashInputRef.current.value = "";
    } catch (err) {
      setInvalidHash(true);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-14 relative">
        <h1 className="text-3xl font-semibold ">Secret Server</h1>
        {invalidHash && (
          <p className="text-[15px] font-semibold absolute -bottom-8 text-red-600">
            Invalid hash!
          </p>
        )}
      </div>
      <div className="flex justify-center mt-16">
        <button
          onClick={handleGetSecretClick}
          className="rounded-sm bg-green-500 hover:bg-green-600 px-3 py-2 mr-2"
        >
          Get Secret
        </button>
        <input
          ref={hashInputRef}
          placeholder="Your hash"
          type="text"
          className="w-[50%] border-[1px] rounded-sm py-1 pl-1 border-black outline-0"
        />
      </div>
      {isModalShown && (
        <Modal onClose={() => setIsModalShown(false)}>
          Your secret text is: {secretText}
        </Modal>
      )}
    </>
  );
};

export default SecretSearch;
