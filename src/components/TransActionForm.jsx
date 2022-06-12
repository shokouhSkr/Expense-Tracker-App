import React from "react";

const TransActionForm = () => {
  return (
    <div>
      <form className="text-lg">
        <input
          type="text"
          name="description"
          className="w-46 m-2 border border-gray-200 p-1 focus:outline-none"
        />
        <input
          type="number"
          name="amount"
          className="w-46 border border-gray-200 p-1 focus:outline-none"
        />
        <div className="flex gap-x-4 p-2">
          <div>
            <input type="radio" value="expense" name="type" className="mr-1" />
            <label>Expense</label>
          </div>

          <div>
            <input type="radio" value="income" name="type" className="mr-1" />
            <label>Income</label>
          </div>
        </div>

        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default TransActionForm;
