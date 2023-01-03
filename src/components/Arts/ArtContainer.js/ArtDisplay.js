import defaultImg from "../../../assets/front.jpeg";

const ArtDisplay = ({ imageUrl }) => {
  return (
    <div className="arts_display">
      <img src={imageUrl} alt={defaultImg} />
    </div>
  );
};

export default ArtDisplay;
