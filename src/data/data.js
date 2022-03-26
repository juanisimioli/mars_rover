export const data = {
  title: "Mars Rover Photos",
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
  nasa_api: {
    types: {
      rover: [
        {
          id: 1,
          label: "Curiosity",
          slug: 'curiosity',
          camerasId: [1, 2, 3, 4, 5, 6, 7],
        },
        {
          id: 2,
          label: "Opportunity",
          slug: 'opportunity',
          camerasId: [1, 2, 7, 8, 9],
        },
        {
          id: 3,
          label: "Spirit",
          slug: 'spirit',
          camerasId: [1, 2, 7, 8, 9],
        },
      ],
      dateType: [
        { id: 1, label: 'Martian Sol', slug: "martian_sol" },
        { id: 2, label: 'Earth Date', slug: "earth_date" },
      ],
      camera: [
        {
          id: 1,
          label: "Front Hazard Avoidance Camera",
          slug: 'fhaz',
          abbreviation: "FHAZ",
        },
        {
          id: 2,
          label: "Rear Hazard Avoidance Camera",
          slug: 'rhaz',
          abbreviation: "RHAZ",
        },
        {
          id: 3,
          label: "Mast Camera",
          slug: 'mast',
          abbreviation: "MAST",
        },
        {
          id: 4,
          label: "Chemistry and Camera Complex",
          slug: 'chencam',
          abbreviation: "CHEMCAM",
        },
        {
          id: 5,
          label: "Mars Hand Lens Imager",
          slug: 'mahli',
          abbreviation: "MAHLI",
        },
        {
          id: 6,
          label: "Mars Descent Imager",
          slug: 'mardi',
          abbreviation: "MARDI",
        },
        {
          id: 7,
          label: "Navigation Camera",
          slug: 'navcam',
          abbreviation: "NAVCAM",
        },
        {
          id: 8,
          label: "Panoramic Camera",
          slug: 'pancam',
          abbreviation: "PANCAM",
        },
        {
          id: 9,
          label: "Miniature Thermal Emission Spectrometer (Mini-TES)",
          slug: 'minities',
          abbreviation: "MINITES",
        },
      ],

    },
  },
};
