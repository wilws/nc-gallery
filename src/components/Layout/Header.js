import './Header.css'
import CustomButton from './CustomButton';
import { useContext, useEffect, useState } from "react";
import ArtContext from '../../store/art-context';

const Header = () => {

    const artCtx = useContext(ArtContext);
    const [ backWardBtnActive, setBackwardBtnActive] = useState(false);
    // const [ forWardBtnActive, setForwardBtnActive] = useState(true);

    function moveForward(){
        artCtx.moveForward();
        if (artCtx.currentArtWorkIndex >= artCtx.artworks.length-1){
            artCtx.fetchData();
        };
    };

    function moveBackward(){
        artCtx.moveBackward();
    };


    useEffect(() => {
      if (artCtx.currentArtWorkIndex <= 0) {
        setBackwardBtnActive(false);
      } else {
        setBackwardBtnActive(true);
      }

    //   if (artCtx.currentArtWorkIndex >= artCtx.artworks.length - 1) {
    //     setForwardBtnActive(false);
    //   } else {
    //     setForwardBtnActive(true);
    //   }
    }, [artCtx.currentArtWorkIndex, artCtx.artworks.length]);

    return (
      <div className="header_container">
        <h1>NC-GALLERY</h1>
        <div className="header_control">
          <CustomButton
            func={moveBackward}
            title="prev"
            active={backWardBtnActive}
          />
          <CustomButton
            func={moveForward}
            title="next"
            // active={forWardBtnActive}
            active={true}
          />
        </div>
      </div>
    );
};

export default Header;
