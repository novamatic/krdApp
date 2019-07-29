import debtListRestService from "../debtsList/debtListRestService";

export const fetchFilteredDebts = (filter, setDebts, setFetching) => {
  setFetching(true);
  debtListRestService.getFilteredDebts(filter).subscribe(
    ({ response }) => {
      setDebts(response);
      setFetching(false);
    },
    () => {
      setFetching(false);
    }
  );
};
