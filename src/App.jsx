import "./App.css";
import React from "react";
import Balance from "./component/Balance";
import History from "./component/History";
import Transaction from "./component/Transaction";
import GlobalStateProvider from "./context/GlobalState";
import IncomeExpense from "./component/IncomeExpense";
import Header from "./component/Header";

function App() {
  return (
    <GlobalStateProvider>
      <div className=" bg-[#FBF6EE] w-screen h-screen ">
        <div className=" flex justify-start flex-col pt-20 max-w-sm mx-auto max-sm:p-10">
          <Header />
          <Balance />
          <IncomeExpense />
          <History />
          <Transaction />
        </div>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
