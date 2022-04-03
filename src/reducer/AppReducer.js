// CONSTANTS
import { SOL, ALL, EARTH_DATE } from "../constants/constants";

// ACTIONS
import {
  GET_MANIFESTS,
  UPDATE_FILTER_ROVER,
  UPDATE_FILTER_CAMERA,
  UPDATE_FILTER_EARTH_DATE,
  UPDATE_FILTER_SOL_DATE,
  UPDATE_PHOTOS,
  UPDATE_MORE_PHOTOS,
  LOADER_PHOTOS_ON,
  LOADER_PHOTOS_OFF,
  UPDATE_CURRENT_PAGE,
} from "../reducer/constants";

import {
  getAvailableDates,
  getRoverManifest,
  getDayFromManifest,
} from "./helper";

// REDUCER
const Reducer = (state, action) => {
  switch (action.type) {
    case GET_MANIFESTS: {
      return {
        ...state,
        manifests: action.payload,
        isLoadingApp: false,
      };
    }

    case UPDATE_FILTER_ROVER: {
      const newRover = action.payload;

      // select manifest for current rover
      const manifestRover = getRoverManifest(state, newRover);

      // generate arrays fot earth and sol dates availables for selected rover
      const earthAvailable = getAvailableDates(manifestRover, EARTH_DATE);
      const solAvailable = getAvailableDates(manifestRover, SOL);

      const minEarthDate = manifestRover.landing_date;
      const maxEarthDate = manifestRover.max_date;
      const maxSolDate = manifestRover.max_sol;

      // cameras available for selected rover
      const camerasAvailable =
        manifestRover.photos.find((day) => maxSolDate === day[SOL]).cameras ??
        [];

      // total photos for selected rover in latest available day
      const currentDay = getDayFromManifest(manifestRover, SOL, maxSolDate);

      return {
        ...state,
        filters: {
          ...state.filters,
          rover: newRover,
          camera: ALL,
          currentEarthDate: maxEarthDate,
          currentSolDate: maxSolDate,
        },
        currentRover: {
          currentPage: 1,
          camerasAvailable,
          minEarthDate,
          maxEarthDate,
          maxSolDate,
          totalPhotos: currentDay.total_photos,
          availableEarthDate: [...earthAvailable],
          availableSolDate: [...solAvailable],
        },
      };
    }

    case UPDATE_FILTER_SOL_DATE: {
      // no action if is still loading photos
      if (state.isLoadingPhotos) return { ...state };

      const manifestRover = getRoverManifest(state, state.filters.rover);
      const newSolDate = action.payload;
      const currentDay = getDayFromManifest(manifestRover, SOL, newSolDate);

      return {
        ...state,
        filters: {
          ...state.filters,
          currentEarthDate: currentDay.earth_date,
          currentSolDate: action.payload,
          camera: ALL,
        },
        currentRover: {
          ...state.currentRover,
          camerasAvailable: [...currentDay.cameras],
          currentTypeDate: SOL,
          totalPhotos: currentDay.total_photos,
          currentPage: 1,
        },
      };
    }

    case UPDATE_FILTER_EARTH_DATE: {
      // no action if is still loading photos
      if (state.isLoadingPhotos) return { ...state };

      const manifestRover = getRoverManifest(state, state.filters.rover);
      const newEarthDate = action.payload;

      const currentDay = getDayFromManifest(
        manifestRover,
        EARTH_DATE,
        newEarthDate
      );

      return {
        ...state,
        filters: {
          ...state.filters,
          currentEarthDate: action.payload,
          currentSolDate: currentDay.sol.toString(),
          camera: ALL,
        },
        currentRover: {
          ...state.currentRover,
          camerasAvailable: [...currentDay.cameras],
          currentTypeDate: EARTH_DATE,
          totalPhotos: currentDay.total_photos,
          currentPage: 1,
        },
      };
    }

    case UPDATE_FILTER_CAMERA: {
      if (state.isLoadingPhotos) return { ...state };

      return {
        ...state,
        filters: { ...state.filters, camera: action.payload },
        currentRover: {
          ...state.currentRover,
          currentPage: 1,
        },
      };
    }

    case LOADER_PHOTOS_ON: {
      return {
        ...state,
        isLoadingPhotos: true,
      };
    }

    case LOADER_PHOTOS_OFF: {
      return {
        ...state,
        isLoadingPhotos: false,
      };
    }

    case UPDATE_PHOTOS: {
      return {
        ...state,
        photos: action.payload,
        isLoadingPhotos: false,
      };
    }

    case UPDATE_MORE_PHOTOS: {
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        isLoadingPhotos: false,
      };
    }

    case UPDATE_CURRENT_PAGE: {
      return {
        ...state,
        currentRover: {
          ...state.currentRover,
          currentPage: state.currentRover.currentPage + 1,
        },
      };
    }

    default:
      return state;
  }
};

export default Reducer;
