const Card = ({ children }) => {
  return (
    <div className="card">
      <div className="row">
        <div className="d-md-flex">{children}</div>
      </div>
    </div>
  );
};

export default Card;
