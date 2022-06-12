import React from "react";
import ExpenseApp from "./components/ExpenseApp";

const App = () => {
  return (
    <div className="h-screen bg-gray-100 p-4">
      <header className="mb-8 mt-10 flex justify-center text-3xl">
        <h1>Expense Tracker</h1>
      </header>
      <ExpenseApp />
    </div>
  );
};

export default App;
