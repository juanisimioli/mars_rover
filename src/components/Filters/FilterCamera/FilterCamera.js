import React, { useContext } from "react";
import { Context } from "../../../store/Store";

import { ALL } from "../../../constants/constants";
import { data } from "../../../data/data";

import { UPDATE_FILTER_CAMERA } from "../../../reducer/constants";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const FilterCamera = () => {
  const [state, dispatch] = useContext(Context);
  const {
    filters: { rover: roverSelected, camera: cameraSelected },
    currentRover: { camerasAvailable },
  } = state;

  const { rover: roverList, camera: cameraList } = data.nasa_api.types;

  const cameraForRoverSelected = roverList.find(
    (rover) => rover.slug === roverSelected
  )?.camerasId;

  const handleChange = (e) => {
    const newCamera = e.target.value === "" ? null : e.target.value;

    dispatch({
      type: UPDATE_FILTER_CAMERA,
      payload: newCamera,
    });
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={cameraSelected}
      onChange={handleChange}
    >
      {cameraList.map(({ label, slug, id, abbreviation }) => {
        if (cameraForRoverSelected?.includes(id)) {
          return (
            <ToggleButton
              disabled={!camerasAvailable?.includes(abbreviation)}
              value={slug}
              key={`camera_${id}`}
            >
              {slug}
            </ToggleButton>
          );
        }
        return null;
      })}
      <ToggleButton value={ALL}>All</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default FilterCamera;
