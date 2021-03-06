export const data = {
  title: "Mars Rover Photos",
  nasa_api: {
    types: {
      rover: [
        {
          id: 5,
          label: "Curiosity",
          slug: "curiosity",
          camerasId: [20, 21, 22, 23, 24, 25, 29],
        },
        {
          id: 6,
          label: "Opportunity",
          slug: "opportunity",
          camerasId: [20, 21, 29, 30, 31],
        },
        {
          id: 7,
          label: "Spirit",
          slug: "spirit",
          camerasId: [20, 21, 29, 30, 31],
        },
      ],
      camera: [
        {
          id: 20,
          label: "Front Hazard Avoidance Camera",
          slug: "fhaz",
          abbreviation: "FHAZ",
        },
        {
          id: 21,
          label: "Rear Hazard Avoidance Camera",
          slug: "rhaz",
          abbreviation: "RHAZ",
        },
        {
          id: 22,
          label: "Mast Camera",
          slug: "mast",
          abbreviation: "MAST",
        },
        {
          id: 23,
          label: "Chemistry and Camera Complex",
          slug: "chemcam",
          abbreviation: "CHEMCAM",
        },
        {
          id: 24,
          label: "Mars Hand Lens Imager",
          slug: "mahli",
          abbreviation: "MAHLI",
        },
        {
          id: 25,
          label: "Mars Descent Imager",
          slug: "mardi",
          abbreviation: "MARDI",
        },
        {
          id: 29,
          label: "Navigation Camera",
          slug: "navcam",
          abbreviation: "NAVCAM",
        },
        {
          id: 30,
          label: "Panoramic Camera",
          slug: "pancam",
          abbreviation: "PANCAM",
        },
        {
          id: 31,
          label: "Miniature Thermal Emission Spectrometer (Mini-TES)",
          slug: "minites",
          abbreviation: "MINITES",
        },
      ],
    },
  },
};
