import './Arts.css';
import ArtContainer from './ArtContainer.js/ArtContainer';
import { useState, useEffect } from "react";

const ArtFrame = () => {

    const [artworks, setArtWorks] = useState([]);

    useEffect(() => {
      fetch("https://api.artic.edu/api/v1/artworks")
        .then((data) => {
          return data.json();
        })
        .then((artworks) => {
          setArtWorks(artworks.data);
        });
    });
    
    return (
    <div className='arts_container'>
        {artworks.map((artwork) => {
            return <ArtContainer  key={artwork.id} {...artwork} />;
        })}
    </div>
    )
}

export default ArtFrame;