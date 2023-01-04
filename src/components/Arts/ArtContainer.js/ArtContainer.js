import ArtDisplay from "./ArtDisplay";
import ArtDetails from "./ArtDetails";
import { useEffect, useState, useContext } from "react";
import ArtContext from "../../../store/art-context";

const ArtContainer = (props) => {

    const artCtx = useContext(ArtContext); 
    const { artist_title, image_id, title, index } = props;
    const [classList, setClassList] = useState('arts_artwork flip-R');
    const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/1686,/0/default.jpg`;


    useEffect(() => {
      if (index === artCtx.currentArtWorkIndex) {
        // setClassList('arts_artwork');
        setClassList((prevState)=>{
            if (prevState === "arts_artwork flip-R") {
                return "arts_artwork axisR";
            } else if (prevState === "arts_artwork flip-L") {
                return "arts_artwork axisL";
            } else {
                return "arts_artwork";
            }
        });
      }

      if (index < artCtx.currentArtWorkIndex) {
        setClassList("arts_artwork flip-L");
      }
      if (index > artCtx.currentArtWorkIndex) {
        setClassList("arts_artwork flip-R");
      }
    }, [artCtx.currentArtWorkIndex,index]);


    return (
      <div className={classList} >
        <ArtDisplay imageUrl={imageUrl} />
        <ArtDetails artists={artist_title} title={title} />
      </div>
    );
};

export default ArtContainer;