import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = () => {
  const [text, setText] = useState();
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div className="mb-6 ">
      <h1 className=" text-lg font-semibold border-b-2 mb-3">
        Add new transaction
      </h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3">
        <div className=" flex flex-col gap-1">
          <label htmlFor="text">Text</label>
          <input
            className=" p-2 border-gray-300 border-[1px] outline-0 rounded-sm placeholder:text-gray-400 placeholder:font-semibold"
            type="text"
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label className="" htmlFor="text">
            Amount
          </label>
          <input
            className=" p-2 border-gray-300 border-[1px] outline-0 rounded-sm placeholder:text-gray-400 placeholder:font-semibold"
            type="text"
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <button className="w-full py-2 bg-purple-700 font-semibold text-lg text-white">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default Transaction;
