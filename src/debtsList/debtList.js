import debtListRestService from "./debtListRestService";

export const fetchTopDebts = setTopDebts => {
  debtListRestService
    .getTopDebts()
    .subscribe(response => setTopDebts(response));
};
