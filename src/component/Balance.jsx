import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h2 className="text-lg font-medium">Your balance</h2>
      <span
        className={` ${
          total > 0 ? " text-green-500" : " text-red-500"
        } text-3xl font-semibold`}
      >
        {total}
      </span>
    </div>
  );
};

export default Balance;
