import { useEffect, useContext } from "react";
import { Context } from "../../store/Store";
import GridImages from "../GridImages/GridImages";
import { getManifests, updatePhotos } from "../helper/apiCalls";
import Filters from "../Filters/Filters";

const NasaApp = () => {
  const [state, dispatch] = useContext(Context);
  console.log("STATE", state);

  useEffect(() => {
    console.log("FIRST TIME");
    getManifests(dispatch);
  }, []);

  useEffect(() => {
    console.log("FILTER UPDATED", state.filters);
    updatePhotos(state, dispatch);
  }, [state.filters]);

  useEffect(() => {
    console.log("LOADING MORE CHANGED", state);
    updatePhotos(state, dispatch);
  }, [state.currentRover.currentPage]);

  return (
    <>
      <Filters />
      <GridImages />
    </>
  );
};

export default NasaApp;
