import './Arts.css';
import ArtContainer from './ArtContainer.js/ArtContainer';
import { useContext } from "react";
import ArtContext from '../../store/art-context';

const ArtFrame = () => {

    const artCtx = useContext(ArtContext);
    let index = 0;

    if (artCtx.isFetching) {
       <h1>Fetch Data</h1>
    }

    return (
      <div className="arts_frame">
        {artCtx.artworks.map((artwork) => { 
          return <ArtContainer {...artwork} key={`artwork.id${index}`} index={index++} />;
        })}
      </div>
    );
}

export default ArtFrame;