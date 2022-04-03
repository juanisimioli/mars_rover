import React, { useContext } from "react";
import { Context } from "../../../store/Store";
import {
  UPDATE_FILTER_SOL_DATE,
  UPDATE_FILTER_EARTH_DATE,
} from "../../../reducer/constants";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const FilterDate = () => {
  const [state, dispatch] = useContext(Context);
  const {
    filters: { rover: roverSelected, currentSolDate, currentEarthDate },
    currentRover: {
      availableSolDate,
      availableEarthDate,
      minEarthDate,
      maxEarthDate,
    },
  } = state;

  const handleChangeSolDate = (e, valuex) => {
    valuex &&
      dispatch({
        type: UPDATE_FILTER_SOL_DATE,
        payload: valuex,
      });
  };

  const handleChangeEarthDate = (e) => {
    const newDate = e?.toISOString().slice(0, 10);

    dispatch({
      type: UPDATE_FILTER_EARTH_DATE,
      payload: newDate,
    });
  };

  function disableDates(date) {
    return !availableEarthDate?.includes(date.toISOString().slice(0, 10));
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          format="DD-MM-YYYY"
          label="Earth Date"
          shouldDisableDate={disableDates}
          disabled={!roverSelected}
          value={new Date(currentEarthDate?.replace(/-/g, "/"))}
          minDate={new Date(minEarthDate?.replace(/-/g, "/"))}
          maxDate={new Date(maxEarthDate?.replace(/-/g, "/"))}
          onChange={handleChangeEarthDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={availableSolDate}
        value={currentSolDate?.toString()}
        onChange={handleChangeSolDate}
        sx={{ width: 300 }}
        disableClearable={true}
        renderInput={(params) => <TextField {...params} label="Sol Days" />}
      />
    </>
  );
};

export default FilterDate;
