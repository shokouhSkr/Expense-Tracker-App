import React, { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <span>Balance: {income - expense}</span>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className="w-20 rounded border border-red-300 bg-red-200 px-4 py-2 text-base transition-all duration-300 hover:bg-red-300 focus:bg-red-300 active:bg-red-300"
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionForm addTransaction={addTransaction} />}
      <div className="mb-4 flex justify-between text-xl">
        <div className="flex w-64 flex-col gap-y-2 rounded border border-gray-200 bg-gray-100 px-5 py-2">
          <span>Expense</span>
          <span className="font-semibold text-red-600"> {expense} $</span>
        </div>
        <div className="flex w-64 flex-col gap-y-2 rounded border border-gray-200 bg-gray-100 px-5 py-2">
          <span>Income</span>
          <span className="font-semibold text-green-600"> {income} $</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
