// CONSTANTS
import { SOL, ALL, EARTH_DATE, ERROR_MESSAGE } from "../constants/constants";

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
  UPDATE_FILTERS_FROM_LOCAL_STORAGE,
  SHOW_ERROR,
} from "../reducer/constants";

import {
  getAvailableDates,
  getRoverManifest,
  getDayFromManifest,
  checkHasMorePhotos,
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

    case UPDATE_FILTERS_FROM_LOCAL_STORAGE: {
      if (!state.manifests.length) return { ...state };

      const { rover, camera, currentEarthDate, currentSolDate } =
        action.payload;

      const manifestRover = getRoverManifest(state.manifests, rover);

      // generate arrays fot earth and sol dates availables for selected rover
      const earthAvailable = getAvailableDates(manifestRover, EARTH_DATE);
      const solAvailable = getAvailableDates(manifestRover, SOL);

      const minEarthDate = manifestRover.landing_date;
      const maxEarthDate = manifestRover.max_date;
      const maxSolDate = manifestRover.max_sol;

      // cameras available for selected rover
      const camerasAvailable =
        manifestRover.photos.find(
          (day) => currentSolDate.toString() === day[SOL].toString()
        )?.cameras ?? [];

      // total photos for selected rover in latest available day
      const currentDay = getDayFromManifest(manifestRover, SOL, currentSolDate);

      return {
        ...state,
        filters: {
          ...state.filters,
          rover,
          camera,
          currentEarthDate,
          currentSolDate,
        },
        currentRover: {
          ...state.currentRover,
          camerasAvailable,
          minEarthDate,
          maxEarthDate,
          maxSolDate,
          availableEarthDate: [...earthAvailable],
          availableSolDate: [...solAvailable],
        },
        pagination: {
          ...state.pagination,
          currentPage: 1,
          totalPhotos: currentDay.total_photos,
        },
      };
    }

    case UPDATE_FILTER_ROVER: {
      if (!state.manifests.length) return { ...state };

      const newRover = action.payload;
      // select manifest for current rover
      const manifestRover = getRoverManifest(state.manifests, newRover);

      // generate arrays fot earth and sol dates availables for selected rover
      const earthAvailable = getAvailableDates(manifestRover, EARTH_DATE);
      const solAvailable = getAvailableDates(manifestRover, SOL);

      const minEarthDate = manifestRover.landing_date;
      const maxEarthDate = manifestRover.max_date;
      const maxSolDate = manifestRover.max_sol;

      // cameras available for selected rover
      const camerasAvailable =
        manifestRover.photos.find(
          (day) => maxSolDate.toString() === day[SOL].toString()
        ).cameras ?? [];

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
          ...state.currentRover,
          camerasAvailable,
          minEarthDate,
          maxEarthDate,
          maxSolDate,
          availableEarthDate: [...earthAvailable],
          availableSolDate: [...solAvailable],
        },
        pagination: {
          ...state.pagination,
          currentPage: 1,
          totalPhotos: currentDay.total_photos,
        },
      };
    }

    case UPDATE_FILTER_SOL_DATE: {
      // no action if is still loading photos
      if (state.isLoadingPhotos) return { ...state };

      const manifestRover = getRoverManifest(
        state.manifests,
        state.filters.rover
      );
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
        },
        pagination: {
          ...state.pagination,
          totalPhotos: currentDay.total_photos,
          currentPage: 1,
        },
      };
    }

    case UPDATE_FILTER_EARTH_DATE: {
      // no action if is still loading photos
      if (state.isLoadingPhotos) return { ...state };

      const manifestRover = getRoverManifest(
        state.manifests,
        state.filters.rover
      );
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
        },
        pagination: {
          ...state.pagination,
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
        pagination: {
          ...state.pagination,
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
      const hasMorePhotos = checkHasMorePhotos(
        action.payload.length,
        state.pagination.totalPhotos
      );
      return {
        ...state,
        photos: action.payload,
        isLoadingPhotos: false,
        pagination: {
          ...state.pagination,
          hasMorePhotos,
        },
        errorMessage: null,
      };
    }

    case UPDATE_MORE_PHOTOS: {
      const photos = [...state.photos, ...action.payload];
      const hasMorePhotos = checkHasMorePhotos(
        photos.length,
        state.pagination.totalPhotos
      );
      return {
        ...state,
        photos,
        isLoadingPhotos: false,
        pagination: {
          ...state.pagination,
          hasMorePhotos,
        },
        errorMessage: null,
      };
    }

    case UPDATE_CURRENT_PAGE: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: state.pagination.currentPage + 1,
        },
      };
    }

    case SHOW_ERROR: {
      return {
        ...state,
        errorMessage: ERROR_MESSAGE,
      };
    }

    default:
      return state;
  }
};

export default Reducer;
