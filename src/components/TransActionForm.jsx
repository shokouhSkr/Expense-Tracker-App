import React, { useEffect, useRef, useState } from "react";

const TransActionForm = ({ addTransaction, setIsShow }) => {
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
    setIsShow(false);
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
          className="w-46 m-2 rounded border border-gray-200 p-1 focus:border-gray-400 focus:outline-none"
          onChange={changeHandler}
          ref={inputRef}
        />
        <input
          type="text"
          name="description"
          value={formValuse.description}
          placeholder="Description"
          className="w-46 m-2 rounded border border-gray-200 p-1 focus:border-gray-400 focus:outline-none"
          onChange={changeHandler}
        />
        <div className="mb-6 flex gap-x-4">
          <div>
            <input
              type="radio"
              value="expense"
              id="expense"
              name="type"
              className="mr-1"
              onChange={changeHandler}
              checked={formValuse.type === "expense"}
            />
            <label htmlFor="expense">Expense</label>
          </div>

          <div>
            <input
              type="radio"
              value="income"
              id="income"
              name="type"
              className="mr-1"
              onChange={changeHandler}
              checked={formValuse.type === "income"}
            />
            <label htmlFor="income">Income</label>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="m-2 mb-2 w-full rounded border border-gray-300 bg-gray-700 px-4 py-1.5 text-base text-white active:translate-x-[1px] active:translate-y-[1px] active:transform"
          >
            Add transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransActionForm;
