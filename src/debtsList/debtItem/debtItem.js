import { parseStringToBoolean } from "../../utils/utils";

export const getRowExpandAttribute = id => {
  const elem = document.getElementById(`button${id}`);
  const attribute = elem ? elem.getAttribute("aria-expanded") : null;
  return attribute && parseStringToBoolean(attribute);
};