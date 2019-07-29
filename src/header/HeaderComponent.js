import React, { useState } from "react";
import DebtCounter from "./debtCount/debtCountComponent.js";
import {fetchFilteredDebts} from './header';
import {fetchTopDebts} from "../debtsList/debtList";

const Header = ({setDebts, setFetching}) => {
  const [filter, setFilter] = useState("");

  const handleInputChange = value => setFilter(value);

  const handleFilterSearch = (e) => {
    e.preventDefault();
    filter ? fetchFilteredDebts(filter, setDebts, setFetching) : fetchTopDebts(setDebts)
  };

  return (
    <div className="container-fluid bg-dark navbar-bg">
      <nav className="navbar navbar-expand-sm navbar-bg navbar-dark px-3">
        <div className="col-sm-6">
          <form className="my-2">
            <h5 style={{ color: "white" }}>
              PODAJ NUMER SPRAWY, NAZWĘ LUB NIP DŁUŻNIKA
            </h5>
            <div className="form-inline my-2">
              <input
                onChange={e => handleInputChange(e.target.value)}
                type="text"
                id="listFilter"
                className="form-control w-75"
                placeholder="Fraza powinna zawierać przynajmniej 3 znaki..."
              />
              <button
                className="btn btn-danger ml-1"
                onClick={e => handleFilterSearch(e)}
                disabled={filter.length > 0 && filter.length < 3}
              >
                Szukaj
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-6">
          <DebtCounter />
        </div>
      </nav>
    </div>
  );
};

export default Header;
