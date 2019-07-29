import React, { useState } from "react";
import Header from "./header/HeaderComponent";
import DebtsList from "./debtsList/DebtsListComponent";

import "./style/App.scss";

const App = () => {
  const [debtItems, setDebtItems] = useState([]);
  const [fetching, setFetching] = useState(false);

  return (
    <>
      <Header setDebts={setDebtItems} setFetching={setFetching}/>
      <DebtsList fetching={fetching} debtItems={debtItems} setDebtItems={setDebtItems} />
    </>
  );
};

export default App;
