const PlayerModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={movie.embedUrl}
          width="100%"
          height="400"
          allowFullScreen
          frameBorder="0"
          title={movie.title}
        ></iframe>
        <button className="close-btn" onClick={onClose}>
          ❌ Close
        </button>
      </div>
    </div>
  );
};

export default PlayerModal;
