import debtCountRestService from "./debtCountRestService";

export const fetchDebtCount = setCount => {
  debtCountRestService.getDebtCount().subscribe(
    response => setCount(response)
  );
};
