import ArtContext from './art-context';
import { useState, useEffect } from "react";

const ArtProvider = (props) => {

    const [artworks, setArtWorks] = useState([]);
    const [currentArtWorkIndex, setCurrentArtWorkIndex] = useState(0);
    const [nextArtWorkIndex, setNextArtWorkIndex] = useState(1);
    const [previousArtWorkIndex, setPreviousArtWorkIndex] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);
    const [isFetchingData, setIsFetchingData] = useState(false);

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

    const fetchFurtherData = () => {
        setIsFetchingData(true);
        fetch(nextUrl)
          .then((data) => {
            return data.json();
          })
          .then((_artworks) => {
            setNextUrl(_artworks.pagination.next_url);
            setArtWorks((prevStatus) => {
              return prevStatus.concat(_artworks.data);
            });
            setIsFetchingData(false);
          });
    };

    useEffect(() => {
      setIsFetchingData(true);
      fetch("https://api.artic.edu/api/v1/artworks")
        .then((data) => {
          return data.json();
        })
        .then((_artworks) => {
          setNextUrl(_artworks.pagination.next_url);
          setArtWorks(_artworks.data);
          setIsFetchingData(false);
        });
    }, []);

    const artContext = {
      artworks: artworks,
      currentArtWorkIndex: currentArtWorkIndex,
      nextArtWorkIndex: nextArtWorkIndex,
      previousArtWorkIndex: previousArtWorkIndex,
      nextUrl: nextUrl,
      moveForward: moveForwardHandler,
      moveBackward: moveBackwardHandler,
      fetchData: fetchFurtherData,
      isFetching: isFetchingData,
    };

    return (
      <ArtContext.Provider value={artContext}>
        {props.children}
      </ArtContext.Provider>
    );
}

export default ArtProvider;