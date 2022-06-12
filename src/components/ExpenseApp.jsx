import React, { useState } from "react";
import TransActionComponent from "./TransActionComponent";
import OverViewComponent from "./OverViewComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  return (
    <section className="container max-w-screen-sm rounded-md border border-gray-200 bg-white p-6 text-2xl drop-shadow-md">
      <OverViewComponent income={income} expense={expense} />
      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
