const Card = (props) => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">{props.component}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
