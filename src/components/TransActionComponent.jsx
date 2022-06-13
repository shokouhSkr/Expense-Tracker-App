import React, { useEffect, useState } from "react";

const TransActionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transactions);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  if (!transactions.length) return <h2>Track your transactions!</h2>;

  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="Search"
        className="mb-6 rounded border border-gray-200 px-4 py-2 text-base focus:border focus:border-gray-200 focus:outline-none"
      />
      <div className="max-h-64 overflow-auto">
        {filteredTnx.length
          ? filteredTnx.map((t) => (
              <div
                key={t.id}
                className={`mb-2 flex justify-between rounded-md border border-r-4 border-gray-200 bg-gray-50 p-2 px-5 text-lg ${
                  t.type === "income" ? "border-r-green-600" : "border-r-red-500"
                } `}
              >
                <span>{t.description}</span>
                <span>$ {t.amount}</span>
              </div>
            ))
          : "No item matches"}
      </div>
    </section>
  );
};

export default TransActionComponent;
