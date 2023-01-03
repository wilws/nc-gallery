const ArtDetails = ({artists, title}) => {
    return (
      <div className="arts_details">
        <p className="artist">{artists}</p>
        <q>{title}</q>
        {/* <p className="year">1509 – 1511</p> */}
      </div>
    );
}

export default ArtDetails;