import React, { useRef, useState } from "react";
import Modal from "./Modal";

const SecretForm = () => {
  const [isValid, setIsValid] = useState(true);
  const [isModalShown, setIsModalShown] = useState(false);

  const secretInputRef = useRef();
  const expirationRef = useRef();

  const handleSubmitClick = () => {
    if (!secretInputRef.current.value || !expirationRef.current.value) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setIsModalShown(true);
    }
  };

  return (
    <>
      <div className="mt-32 flex flex-col items-center">
        <h1 className="text-2xl font-semibold">Add Secret</h1>
        {!isValid && (
          <p className="text-sm text-red-600 font-bold">
            Please fill both fields!
          </p>
        )}
        <div className="mt-6 flex flex-col w-[40%]">
          <label className="text-lg" htmlFor="secret">
            Secret:
          </label>
          <input
            ref={secretInputRef}
            id="secret"
            type="text"
            placeholder="Enter your secret"
            className=" mt-2  border-[1px] outline-0 rounded-sm border-black pl-1"
          />
        </div>
        <div className="mt-8 flex flex-col w-[40%]">
          <label className="text-lg" htmlFor="expiration">
            Expiration time:
          </label>
          <input
            ref={expirationRef}
            className=" mt-2 rounded-sm outline-0 border-[1px] border-black"
            type="datetime-local"
            id="expiration"
          />
        </div>
        <button
          onClick={handleSubmitClick}
          className="mt-8 px-3 py-2 rounded-sm bg-green-500 hover:bg-green-600"
        >
          Submit
        </button>
      </div>
      {isModalShown && <Modal onClose={() => setIsModalShown(false)}></Modal>}
    </>
  );
};

export default SecretForm;
