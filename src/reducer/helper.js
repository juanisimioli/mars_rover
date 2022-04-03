export const getRoverManifest = (state, rover) =>
  state.manifests.find((manifest) => manifest.name.toLowerCase() === rover);

export const getAvailableDates = (manifest, dateType) => [
  ...new Set(manifest.photos.map((day) => day[dateType].toString())),
];

export const getDayFromManifest = (manifest, typeDate, newDate) =>
  manifest.photos.find((date) => date[typeDate]?.toString() === newDate?.toString());
