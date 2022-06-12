import React from "react";

const TransActionComponent = ({ transactions }) => {
  return (
    <section>
      {transactions.map((t) => (
        <div key={t.id} className="text-lg">
          {t.description}
        </div>
      ))}
    </section>
  );
};

export default TransActionComponent;
