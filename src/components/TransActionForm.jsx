import React, { useEffect, useRef, useState } from "react";

const TransActionForm = ({ addTransaction }) => {
  const [formValuse, setFormValues] = useState({
    type: "expense",
    amount: 0,
    description: "",
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormValues({ ...formValuse, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValuse);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="mb-3 rounded border border-gray-200 bg-gray-100 p-2 text-lg"
      >
        <input
          type="number"
          name="amount"
          value={formValuse.amount}
          placeholder="Amount"
          className="w-46 m-2 mr-4 rounded border border-gray-200 p-1 focus:border-gray-400 focus:outline-none"
          onChange={changeHandler}
          ref={inputRef}
        />
        <input
          type="text"
          name="description"
          value={formValuse.description}
          placeholder="Description"
          className="w-46 rounded border border-gray-200 p-1 focus:border-gray-400 focus:outline-none"
          onChange={changeHandler}
        />
        <div className="flex gap-x-4 p-2">
          <div>
            <input
              type="radio"
              value="expense"
              name="type"
              className="mr-1"
              onChange={changeHandler}
              checked={formValuse.type === "expense"}
            />
            <label>Expense</label>
          </div>

          <div>
            <input
              type="radio"
              value="income"
              name="type"
              className="mr-1"
              onChange={changeHandler}
              checked={formValuse.type === "income"}
            />
            <label>Income</label>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="mb-2 rounded border border-red-300 bg-red-200 px-4 py-1 text-base transition-all duration-300 hover:bg-red-300 active:bg-red-300"
          >
            Add transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransActionForm;
