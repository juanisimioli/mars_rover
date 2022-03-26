import { useEffect, useContext } from "react";
import { Context } from "../../store/Store";
import GridImages from "../GridImages/GridImages";
import { getManifests, updatePhotos } from "../helper/apiCalls";

import { UPDATE_FILTER_ROVER } from "../../reducer/AppReducer";

const NasaApp = () => {
  const [state, dispatch] = useContext(Context);
  console.log("STATE", state);

  useEffect(() => {
    console.log("FIRST TIME");
    getManifests(dispatch);
  }, []);

  useEffect(() => {
    console.log("FILTER UPDATED");
    updatePhotos(state, dispatch);
  }, [state.filters]);

  return (
    <>
      NASA APP
      <button
        onClick={() =>
          dispatch({
            type: UPDATE_FILTER_ROVER,
            payload: "opportunity",
          })
        }
      >
        OPORTUNITY
      </button>
      <button
        onClick={() =>
          dispatch({
            type: UPDATE_FILTER_ROVER,
            payload: "curiosity",
          })
        }
      >
        CURIOSITY
      </button>
      <button
        onClick={() =>
          dispatch({
            type: UPDATE_FILTER_ROVER,
            payload: "spirit",
          })
        }
      >
        SPIRIT
      </button>
      <GridImages />
    </>
  );
};

export default NasaApp;
