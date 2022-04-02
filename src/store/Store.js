import { createContext, useReducer } from "react";

import AppReducer from "../reducer/AppReducer";

const initialState = {
  isLoadingApp: true,
  isLoadingPhotos: false,
  filters: {
		rover: null,
		camera: 'all',
		dateType: 'earth',
		currentDate: null
	},
  currentRover: {
		currentPage: null,
		minDate: null,
		maxDate: null,
		maxSolDate: null,
    totalPhotos: null,
	},
  manifests: [],
  photos: []
}

const FormStore = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext();

export default FormStore;
