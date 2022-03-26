// ACTIONS
export const GET_MANIFESTS = "GET_MANIFESTS";
export const UPDATE_FILTER_ROVER = "UPDATE_FILTER_ROVER";
export const UPDATE_PHOTOS = "UPDATE_PHOTOS";
export const LOAD_PHOTOS = "LOAD_PHOTOS";

// REDUCER
const Reducer = (state, action) => {
  switch (action.type) {
    case GET_MANIFESTS:
      return {
        ...state,
        manifests: action.payload,
        isLoadingApp: false,
      };

    case UPDATE_FILTER_ROVER:
      const newRover = action.payload;
      const currentTypeDate = state.filters.dateType;

      const manifestRover = state.manifests.find(
        (manifest) => manifest.name.toLowerCase() === newRover
      );

      const minDate = manifestRover.landing_date;
      const maxDate = manifestRover.max_date;
      const maxSolDate = manifestRover.max_sol;
      const totalPhotos = manifestRover.total_photos;

      let newCurrentDay;

      switch (currentTypeDate) {
        case "sol":
          newCurrentDay = maxSolDate;
          break;
        case "earth":
          newCurrentDay = maxDate;
          break;
        default:
          newCurrentDay = maxSolDate;
      }

      const newFilters = {
        ...state.filters,
        rover: newRover,
        camera: null,
        currentDate: newCurrentDay,
      };

      const camerasAvailable =
        currentTypeDate === "sol"
          ? manifestRover.photos.find((day) => maxSolDate === day.sol).cameras
          : manifestRover.photos.find((day) => maxDate === day["earth_date"])
              .cameras ?? [];

      return {
        ...state,
        filters: { ...newFilters },
        currentRover: {
          camerasAvailable,
          currentPage: 1,
          minDate,
          maxDate,
          maxSolDate,
          totalPhotos,
        },
      };

    case "LOAD_PHOTOS":
      return {
        ...state,
        isLoadingPhotos: true,
      };

    case "UPDATE_PHOTOS":
      return {
        ...state,
        photos: action.payload,
        isLoadingPhotos: false,
      };

    default:
      return state;
  }
};

export default Reducer;
