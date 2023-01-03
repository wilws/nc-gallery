import ArtDisplay from "./ArtDisplay";
import ArtDetails from "./ArtDetails";
// import { useEffect, useState } from 'react';

const ArtContainer = (props) => {

    const {artist_title,  image_id, title } = props;
    const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/1686,/0/default.jpg`;

    return (
      <div className="arts_artwork">
        <ArtDisplay imageUrl={imageUrl} />
        <ArtDetails artists={artist_title} title={title} />
      </div>
    );
};

export default ArtContainer;