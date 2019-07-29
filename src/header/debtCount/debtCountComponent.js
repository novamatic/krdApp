import React, { useState } from "react";
import { fetchDebtCount } from "./debtCount";

const DebtCounter = () => {
  const [debtCount, setDebtCount] = useState(0);

  fetchDebtCount(setDebtCount);

  return debtCount ? (
    <div className="d-flex flex-column align-items-end">
      <h5 style={{ color: "white" }}>Całkowita ilość spraw</h5>
      <h3 style={{ color: "red" }}>{debtCount}</h3>
    </div>
  ) : null;
};

export default DebtCounter;
