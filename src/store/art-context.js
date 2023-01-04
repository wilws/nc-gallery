import React from 'react';

const ArtContext = React.createContext({
  artworks: [],
  currentArtWorkIndex: null,
  nextArtWorkIndex: null,
  previousArtWorkIndex: null,
  moveForward: () => {},
  moveBackward: () => {},
});

export default ArtContext;