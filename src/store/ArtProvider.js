import ArtContext from './art-context';
import { useState, useEffect } from "react";

const ArtProvider = (props) => {


    const [artworks, setArtWorks] = useState([]);
    const [currentArtWorkIndex, setCurrentArtWorkIndex] = useState(0);
    const [nextArtWorkIndex, setNextArtWorkIndex] = useState(1);
    const [previousArtWorkIndex, setPreviousArtWorkIndex] = useState(null);

    const moveForwardHandler = () => {
        if (nextArtWorkIndex > artworks.length - 1) {
          return;
        }
        setPreviousArtWorkIndex(currentArtWorkIndex);
        setCurrentArtWorkIndex(nextArtWorkIndex);
        setNextArtWorkIndex(nextArtWorkIndex + 1);
    };

    const moveBackwardHandler = () => {
        if (previousArtWorkIndex < 0) {
          return;
        }
        setNextArtWorkIndex(currentArtWorkIndex);
        setCurrentArtWorkIndex(previousArtWorkIndex);
        setPreviousArtWorkIndex(previousArtWorkIndex - 1);
    };

    useEffect(() => {
      fetch("https://api.artic.edu/api/v1/artworks")
        .then((data) => {
          return data.json();
        })
        .then((_artworks) => {
          setArtWorks(_artworks.data);
        });
    }, []);




    const artContext = {
      artworks: artworks,
      currentArtWorkIndex: currentArtWorkIndex,
      nextArtWorkIndex: nextArtWorkIndex,
      previousArtWorkIndex: previousArtWorkIndex,
      moveForward: moveForwardHandler,
      moveBackward: moveBackwardHandler,
    };

    return (
      <ArtContext.Provider value={artContext}>
        {props.children}
      </ArtContext.Provider>
    );
}

export default ArtProvider;