import React, { useContext } from "react";
import { Context } from "../../store/Store";

// ACTIONS
import {
  UPDATE_FILTER_ROVER,
  UPDATE_FILTER_CAMERA,
  UPDATE_FILTER_EARTH_DATE,
  UPDATE_FILTER_SOL_DATE,
} from "../../reducer/constants";

import { data } from "../../data/data";

import { ALL } from "../../constants/constants";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Autocomplete from "@mui/material/Autocomplete";

const Filters = () => {
  const [state, dispatch] = useContext(Context);
  const {
    filters: {
      rover: roverSelected,
      camera: cameraSelected,
      currentEarthDate,
      currentSolDate,
    },
    currentRover: {
      minEarthDate,
      maxEarthDate,
      camerasAvailable,
      availableSolDate,
      availableEarthDate,
    },
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
      type: UPDATE_FILTER_EARTH_DATE,
      payload: newDate,
    });
  };

  const cameraForRoverSelected = roverList.find(
    (rover) => rover.slug === roverSelected
  )?.camerasId;

  const handleChangeSol = (e, valuex) => {
    valuex &&
      dispatch({
        type: UPDATE_FILTER_SOL_DATE,
        payload: valuex,
      });
  };

  function disableWeekends(date) {
    return !availableEarthDate?.includes(date.toISOString().slice(0, 10));
  }

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
      )}
      <br></br>
      {/* EARTH DATE */}
      {currentEarthDate && (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            format="DD-MM-YYYY"
            label="Earth Date"
            shouldDisableDate={disableWeekends}
            disabled={!roverSelected}
            value={new Date(currentEarthDate?.replace(/-/g, "/"))}
            minDate={new Date(minEarthDate?.replace(/-/g, "/"))}
            maxDate={new Date(maxEarthDate?.replace(/-/g, "/"))}
            onChange={handleChangeEarthDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      )}
      {/* SOL DATE */}
      {currentSolDate && (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={availableSolDate}
          value={currentSolDate?.toString()}
          onChange={handleChangeSol}
          sx={{ width: 300 }}
          disableClearable={true}
          renderInput={(params) => <TextField {...params} label="Sol Days" />}
        />
      )}
    </>
  );
};

export default Filters;
