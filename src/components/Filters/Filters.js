import React, { useContext } from "react";
import { Context } from "../../store/Store";

import FilterRover from "./FilterRover/FilterRover";
import FilterDate from "./FilterDate/FilterDate";
import FilterCamera from "./FilterCamera/FilterCamera";

const Filters = () => {
  const [state, ] = useContext(Context);
  const {
    filters: { rover: roverSelected, camera: currentSolDate },
  } = state;

  return (
    <>
        Rover
      <FilterRover />

      <br></br>

      {roverSelected && <FilterDate />}
      <br></br>
      Camera
      {roverSelected && <FilterCamera />}
    </>
  );
};

export default Filters;
