const ArtDetails = ({artists, title}) => {
    return (
      <div className="arts_details">
        <p className="artist">{artists}</p>
        <q>{title}</q>
      </div>
    );
}

export default ArtDetails;