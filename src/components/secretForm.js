import React from "react";

const SecretForm = () => {
  return (
    <div className="mt-32 flex flex-col items-center">
      <h1 className="text-2xl font-semibold">Add Secret</h1>
      <div className="mt-10 flex flex-col w-[40%]">
        <label className="text-lg" htmlFor="secret">
          Secret:
        </label>
        <input
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
          className=" mt-2 rounded-sm outline-0 border-[1px] border-black"
          type="datetime-local"
          id="expiration"
        />
      </div>
      <button className="mt-8 px-3 py-2 rounded-sm bg-green-500 hover:bg-green-600">
        Submit
      </button>
    </div>
  );
};

export default SecretForm;
