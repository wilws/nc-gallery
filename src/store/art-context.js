import React from 'react';

const ArtContext = React.createContext({
  artworks: [],
  currentArtWorkIndex: null,
  nextArtWorkIndex: null,
  previousArtWorkIndex: null,
  nextUrl: null,
  moveForward: () => {},
  moveBackward: () => {},
  fetchData: () => {},
  isFetching: null
});

export default ArtContext;