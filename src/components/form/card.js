const Card = ({ children }) => {
  return (
    <section>
      <div className="card">
        <div className="row">
          <div className="">
            <div className="wrap d-md-flex">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
