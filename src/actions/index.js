//Where I will list all action creators inside of my project
//in this project, we'll only have a single action creator.

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
