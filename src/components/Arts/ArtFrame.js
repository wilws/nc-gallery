import './Arts.css';
import ArtContainer from './ArtContainer.js/ArtContainer';
import { useContext } from "react";
import ArtContext from '../../store/art-context';

const ArtFrame = () => {

    const artCtx = useContext(ArtContext);
    let index = 0;

        //   console.log(
        //     artCtx.currentArtWorkIndex,
        //     artCtx.nextArtWorkIndex,
        //     artCtx.previousArtWorkIndex
        //   );

    

    return (
      <div className="arts_frame">
        {artCtx.artworks.map((artwork) => { 
          return <ArtContainer {...artwork} key={artwork.id} index={index++} />;
        })}
      </div>
    );
}

export default ArtFrame;