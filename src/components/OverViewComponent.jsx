import React, { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span>Balance: {income - expense}</span>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className="w-20 rounded border border-red-300 bg-red-200 px-4 py-2 text-base transition-all duration-300 hover:bg-red-300 focus:bg-red-300 active:bg-red-300"
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionForm addTransaction={addTransaction} />}
      <div className="flex justify-between">
        <span>Expense {expense}</span>
        <span>Income {income}</span>
      </div>
    </div>
  );
};

export default OverViewComponent;
