import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import TransactionList from "./TransactionList";

const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="mb-6">
      <h1 className="font-semibold text-lg border-b-2 border-gray-300 mb-3">
        History
      </h1>

      <ul className="space-y-3 relative">
        {transactions.map((transaction) => (
          <TransactionList key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default History;
