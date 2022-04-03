import React, { useContext } from "react";
import { Context } from "../../../store/Store";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { UPDATE_FILTER_ROVER } from "../../../reducer/constants";

import { data } from "../../../data/data";
const { rover: roverList } = data.nasa_api.types;

const FilterRover = () => {
  const [state, dispatch] = useContext(Context);
  const {
    filters: { rover: roverSelected },
  } = state;

  const handleChange = (e) => {
    const newRover = e.target.value;

    dispatch({
      type: UPDATE_FILTER_ROVER,
      payload: newRover,
    });
  };
  return (
    <ToggleButtonGroup
      color="primary"
      value={roverSelected}
      onChange={handleChange}
    >
      {roverList.map(({ label, slug, id }) => (
        <ToggleButton key={`rover_${id}`} value={slug}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterRover;
