import { EARTH_DATE, SOL } from '../../constants/constants';

const baseUrl = process.env.REACT_APP_BASE_URL_NASA_API;
const apiKey = process.env.REACT_APP_NASA_API_KEY;

const generateQuery = (param, query) => (query ? `&${param}=${query}` : "");

const apiKeyQP = generateQuery('api_key', apiKey)

export const generateManifestUrl = (rover) => {
  return `${baseUrl}/manifests/${rover}/?${apiKeyQP}`;
};

export const generateGetPhotosUrl = ({
  rover,
  camera,
  earth,
  sol,
  typeDate,
  page = 1,
}) => {
  const cameraQP = generateQuery("camera", camera);
  const solDateQP = generateQuery(SOL, sol);
  const earthDateQP = generateQuery(EARTH_DATE, earth);
  const dateQP = typeDate === SOL ? solDateQP : earthDateQP;
  const pageQP = generateQuery("page", page);

  return `${process.env.REACT_APP_BASE_URL_NASA_API}/rovers/${rover}/photos?${cameraQP}${dateQP}${pageQP}${apiKeyQP}`;
};
