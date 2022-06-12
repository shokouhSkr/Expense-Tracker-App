import React, { useState, useEffect } from "react";
import TransActionComponent from "./TransActionComponent";
import OverViewComponent from "./OverViewComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    // console.log(formValues);
    const data = { ...formValues, id: Date.now() };
    setTransactions([...transactions, data]);
  };

  useEffect(() => {
    let inc = 0;
    let exp = 0;

    transactions.forEach((t) => {
      t.type === "income" ? (inc = inc + parseFloat(t.amount)) : (exp = exp + parseFloat(t.amount));
    });

    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <section className="container max-w-screen-sm rounded-md border border-gray-200 bg-white p-6 text-2xl drop-shadow-md">
      <OverViewComponent income={income} expense={expense} addTransaction={addTransaction} />
      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
