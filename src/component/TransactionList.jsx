import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li
      className={` ${
        transaction.amount < 0 ? "border-red-500" : " border-green-500"
      } flex justify-between items-center bg-white shadow-lg p-2 border-r-[6px]`}
    >
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
        className=" absolute right-[-30px] bg-red-500 text-white font-semibold px-2 py-3 text-xs"
      >
        X
      </button>
    </li>
  );
};

export default TransactionList;
