import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  const expense =
    amount
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => (acc += amount), 0) * -(1).toFixed(2);

  return (
    <div className="statement-container">
      <div className="statement-sub-container">
        <h3 className="font-semibold text-sm">INCOME</h3>
        <span className=" text-lg text-green-600 font-semibold">{income}</span>
      </div>
      <span className="border-2"></span>
      <div className="statement-sub-container">
        <h3 className=" font-semibold text-sm">EXPENSES</h3>
        <span className=" text-lg font-semibold text-red-600">{expense}</span>
      </div>
    </div>
  );
};

export default IncomeExpense;
