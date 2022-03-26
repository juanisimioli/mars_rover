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
  page = 1,
}) => {
  const cameraQP = generateQuery("camera", camera);
  const solDateQP = generateQuery("sol", sol);
  const earthDateQP = generateQuery("earth", earth);
  const dateQP = solDateQP || earthDateQP;
  const pageQP = generateQuery("page", page);

  return `${process.env.REACT_APP_BASE_URL_NASA_API}/rovers/${rover}/photos?${cameraQP}${dateQP}${pageQP}${apiKeyQP}`;
};
