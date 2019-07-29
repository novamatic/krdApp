import React, { useEffect } from "react";
import DebtItem from "./debtItem/DebtItemComponent";
import { fetchTopDebts } from "./debtList";
import Loader from "../loader/LoaderComponent";

const DebtsList = ({ debtItems, setDebtItems, fetching }) => {

  useEffect(() => {
    fetchTopDebts(setDebtItems);
  }, []);

  return (
    <div className="container-fluid px-5 accordion" id="accordionId">
      <table className="table container-fluid px-5">
        <thead >
          <tr className="row">
            <th className="col-sm-5">DŁUŻNIK</th>
            <th className="col-sm-3">NIP</th>
            <th className="col-sm-4">KWOTA ZADŁUŻENIA</th>
          </tr>
        </thead>
        <tbody>
          {
            fetching ?
              <Loader />
              : debtItems.map(debt => (
                  <DebtItem key={debt.Id} debt={debt} />
                ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default DebtsList;
