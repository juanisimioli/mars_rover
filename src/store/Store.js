import { createContext, useReducer } from "react";
import { EARTH_DATE, ALL } from "../constants/constants";

import AppReducer from "../reducer/AppReducer";

const initialState = {
  isLoadingApp: true,
  isLoadingPhotos: false,
  filters: {
		rover: undefined,
		camera: ALL,
		currentEarthDate: undefined,
    currentSolDate: undefined,    
	},
  currentRover: {		
    currentTypeDate: EARTH_DATE,
    availableEarthDate: [],
		minEarthDate: undefined,
		maxEarthDate: undefined,
		maxSolDate: undefined,
    availableSolDate: [],
    currentPage: 1,
    totalPhotos: undefined,
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
