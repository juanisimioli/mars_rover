import { data } from "../../data/data";
import { ALL } from "../../constants/constants";
import { generateManifestUrl, generateGetPhotosUrl } from "./getUrls";
import {
  GET_MANIFESTS,
  UPDATE_PHOTOS,
  UPDATE_MORE_PHOTOS,
  LOADER_PHOTOS_ON,
  LOADER_PHOTOS_OFF,
  SHOW_ERROR,
} from "../../reducer/constants";
import { setFiltersFromLocalStorage } from "../helper/localStorage";

export async function getManifests(dispatch) {
  const rovers = data.nasa_api.types.rover;

  const fetchManifest = async ({ slug }) => {
    try {
      const manifestUrl = generateManifestUrl(slug);
      const response = await fetch(manifestUrl);
      const manifestData = await response.json();

      return manifestData.photo_manifest;
    } catch (e) {
      dispatch({
        type: SHOW_ERROR,
      });
    }
  };

  const manifests = await Promise.all(
    rovers.map(async (rover) => await fetchManifest(rover))
  );

  dispatch({
    type: GET_MANIFESTS,
    payload: manifests ?? [],
  });
}

export async function updatePhotos(state, dispatch) {
  if (!state.filters.rover) return null;

  const {
    pagination: { hasMorePhotos },
  } = state;

  const cameraToUse =
    state.filters.camera === ALL ? null : state.filters.camera;

  dispatch({
    type: LOADER_PHOTOS_ON,
  });

  const params = {
    rover: state.filters.rover,
    camera: cameraToUse,
    page: state.pagination.currentPage,
    typeDate: state.currentRover.currentTypeDate,
    earth: state.filters.currentEarthDate,
    sol: state.filters.currentSolDate,
  };

  const saveFilters = {
    rover: params.rover,
    camera: params.camera,
    currentEarthDate: params.earth,
    currentSolDate: params.sol,
  };
  setFiltersFromLocalStorage(saveFilters);

  const url = generateGetPhotosUrl(params);
  try {
    const response = await fetch(url);
    const photosData = await response.json();

    if (state.pagination.currentPage === 1) {
      dispatch({
        type: UPDATE_PHOTOS,
        payload: photosData.photos ?? [],
      });
    } else if (hasMorePhotos) {
      dispatch({
        type: UPDATE_MORE_PHOTOS,
        payload: photosData.photos ?? [],
      });
    } else {
      dispatch({
        type: LOADER_PHOTOS_OFF,
      });
    }
  } catch (e) {
    dispatch({
      type: SHOW_ERROR,
    });
  }
}
