import React, { useContext } from "react";
import { Context } from "../../store/Store";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import { data } from "../../data/data";
import {
  UPDATE_FILTER_ROVER,
  UPDATE_EARTH_DATE,
  UPDATE_FILTER_CAMERA,
} from "../../reducer/AppReducer";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const Filters = () => {
  const [state, dispatch] = useContext(Context);
  const {
    filters: { rover: roverSelected, camera: cameraSelected, currentDate },
    currentRover: { minDate, maxDate, camerasAvailable },
  } = state;

  const { rover: roverList, camera: cameraList } = data.nasa_api.types;

  const handleChangeRover = (e) =>
    dispatch({
      type: UPDATE_FILTER_ROVER,
      payload: e.target.value,
    });

  const handleChangeCamera = (e) => {
    const newCamera = e.target.value === "" ? null : e.target.value;

    dispatch({
      type: UPDATE_FILTER_CAMERA,
      payload: newCamera,
    });
  };

  const handleChangeEarthDate = (e) => {
    const newDate = e?.toISOString().slice(0, 10);

    dispatch({
      type: UPDATE_EARTH_DATE,
      payload: newDate,
    });
  };

  const cameraForRoverSelected = roverList.find(
    (rover) => rover.slug === roverSelected
  )?.camerasId;

  return (
    <>
      {/* ROVERS */}
      <ToggleButtonGroup
        color="primary"
        value={roverSelected}
        onChange={handleChangeRover}
      >
        {roverList.map(({ label, slug, id }) => (
          <ToggleButton key={`rover_${id}`} value={slug}>
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <br></br>
      {/* CAMERAS */}
      {roverSelected && (
        <ToggleButtonGroup
          color="primary"
          value={cameraSelected}
          onChange={handleChangeCamera}
        >
          {cameraList.map(({ label, slug, id, abbreviation }) => {
            if (cameraForRoverSelected?.includes(id)) {
              return (
                <ToggleButton
                  disabled={!camerasAvailable?.includes(abbreviation)}
                  value={slug}
                >
                  {/* <Tooltip key={`camera_${id}`} title={label}> */}
                  {slug}
                  {/* </Tooltip> */}
                </ToggleButton>
              );
            }
            return null;
          })}
          <ToggleButton value={null}>All</ToggleButton>
        </ToggleButtonGroup>
      )}
      <br></br>
      {/* EARTH DATE */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Earth Date"
          disabled={!roverSelected}
          value={new Date(currentDate?.replace(/-/g, "/"))}
          minDate={new Date(minDate?.replace(/-/g, "/"))}
          maxDate={new Date(maxDate?.replace(/-/g, "/"))}
          onChange={handleChangeEarthDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default Filters;
