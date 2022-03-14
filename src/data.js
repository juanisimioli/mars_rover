export const data = {
  title: "Nasa App",
  filters: {
    buttonSave: "Save Filters",
    buttonLoad: "Load Filters",
    types: [
      {
        id: 1,
        label: 'Rover',
        slug: "rovers",
      },
      {
        id: 2,
        label: 'Camera',
        slug: "camera",
      },
      {
        id: 3,
        label: 'Date Type',
        slug: "dateType",
      },
    ],
  },
  nasa: {
    types: {
      dateType: [
        { id: 1, slug: "sol" },
        { id: 2, slug: "earth_date" },
      ],
      camera: [
        {
          id: 1,
          label: "Front Hazard Avoidance Camera",
          abbreviation: "FHAZ",
        },
        {
          id: 2,
          label: "Rear Hazard Avoidance Camera",
          abbreviation: "RHAZ",
        },
        {
          id: 3,
          label: "Mast Camera",
          abbreviation: "MAST",
        },
        {
          id: 4,
          label: "Chemistry and Camera Complex",
          abbreviation: "CHEMCAM",
        },
        {
          id: 5,
          label: "Mars Hand Lens Imager",
          abbreviation: "MAHLI",
        },
        {
          id: 6,
          label: "Mars Descent Imager",
          abbreviation: "MARDI",
        },
        {
          id: 7,
          label: "Navigation Camera",
          abbreviation: "NAVCAM",
        },
        {
          id: 8,
          label: "Panoramic Camera",
          abbreviation: "PANCAM",
        },
        {
          id: 9,
          label: "Miniature Thermal Emission Spectrometer (Mini-TES)",
          abbreviation: "MINITES",
        },
      ],
      rovers: [
        {
          id: 1,
          label: "Curiosity",
          camerasId: [1, 2, 3, 4, 5, 6, 7],
        },
        {
          id: 2,
          label: "Opportunity",
          camerasId: [1, 2, 7, 8, 9],
        },
        {
          id: 3,
          label: "Spirit",
          camerasId: [1, 2, 7, 8, 9],
        },
      ],
    },
  },
};
