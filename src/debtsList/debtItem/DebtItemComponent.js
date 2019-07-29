import React, { useState } from "react";
import { getRowExpandAttribute } from "./debtItem";

const DebtItem = ({ debt }) => {
  const { Address, DocumentType, Id, NIP, Name, Number, Price, Value } = debt;

  const [btnText, setBtnText] = useState("WIĘCEJ");
  const [expandedRow, setExpandedRow] = useState(false);

  const handleRowExpand = expanded => {
    expanded ? setBtnText("MNIEJ") : setBtnText("WIĘCEJ");
    setExpandedRow(expanded);
  };

  return (
    <tr className="container px-5">
      <div id={`parent${Id}`} className="row">
        <th className="col-sm-5">
          {expandedRow ? <div className="table-cell">DŁUŻNIK</div> : null}
          <div className="d-block">{Name}</div>
        </th>
        <th className="col-sm-3">
          {expandedRow ? <div className="table-cell">NIP</div> : null}
          <div className="d-block">{NIP}</div>
        </th>
        <th className="col-sm-3">
          {expandedRow ? (
            <div className="table-cell">KWOTA ZADŁUŻENIA</div>
          ) : null}
          <div className="d-block">{Value}</div>
        </th>
        <th className="col-sm-1">
          <button
            id={`button${Id}`}
            className="btn btn-link btn--toggle"
            data-toggle="collapse"
            data-target={`#collapse${Id}`}
            aria-expanded="false"
            aria-controls={`collapse${Id}`}
            onClick={() => handleRowExpand(getRowExpandAttribute(Id))}
          >
            {btnText}
          </button>
        </th>
      </div>
      <div
        id={`collapse${Id}`}
        className="row collapse"
        aria-labelledby={`#parent${Id}`}
        data-parent="#accordionId"
      >
        <th style={{ border: "none" }} className="col-sm-5">
          <div className="table-cell">ADRES</div>
          <div className="d-block">{Address}</div>
        </th>
        <th style={{ border: "none" }} className="col-sm-3">
          <div className="table-cell">
            RODZAJ/TYP DOKUMENTU STANOWIĄCY PODSTAWĘ DLA WIERZYTELNOŚCI
          </div>
          <div className="d-block">{DocumentType}</div>
        </th>
        <th style={{ border: "none" }} className="col-sm-1">
          <div className="table-cell">CENA ZADŁUŻENIA</div>
          <div className="d-block">{Price}</div>
        </th>
        <th style={{ border: "none" }} className="col-sm-3">
          <div className="table-cell">NUMER</div>
          <div className="d-block">{Number}</div>
        </th>
      </div>
    </tr>
  );
};

export default DebtItem;
