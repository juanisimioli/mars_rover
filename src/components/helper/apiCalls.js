import { data } from "../../data/data";
import { generateManifestUrl, generateGetPhotosUrl } from "./getUrls";
import {
  GET_MANIFESTS,
  UPDATE_PHOTOS,
  LOAD_PHOTOS,
} from "../../reducer/AppReducer";

export async function getManifests(dispatch) {
  const rovers = data.nasa_api.types.rover;

  const fetchManifest = async ({ slug }) => {
    const manifestUrl = generateManifestUrl(slug);
    const response = await fetch(manifestUrl);
    const manifestData = await response.json();

    return manifestData.photo_manifest;
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

  dispatch({
    type: LOAD_PHOTOS,
  });

  const params = {
    rover: state.filters.rover,
    camera: state.filters.camera,
    earth:  state.filters.currentDate,
    sol: null,
    page: 1,
  };

  const url = generateGetPhotosUrl(params);
  console.log('URL ---> ', url)
  const response = await fetch(url);
  const photosData = await response.json();

  dispatch({
    type: UPDATE_PHOTOS,
    payload: photosData.photos ?? [],
  });
}
