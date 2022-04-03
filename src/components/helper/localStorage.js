import { UPDATE_FILTERS_FROM_LOCAL_STORAGE } from "../../reducer/constants";
import { FILTERS_LOCAL_STORAGE } from "../../constants/constants";

export const getFiltersFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(FILTERS_LOCAL_STORAGE));
};

export const setFiltersFromLocalStorage = (filters) =>
  localStorage.setItem(FILTERS_LOCAL_STORAGE, JSON.stringify(filters));

export const checkFiltersOnLocalStorage = (state, dispatch) => {
  const filters = getFiltersFromLocalStorage();

  if (filters && typeof filters === "object") {
    dispatch({
      type: UPDATE_FILTERS_FROM_LOCAL_STORAGE,
      payload: filters,
    });
  }
};
