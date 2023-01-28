
const Card = ({ component }) => {
  return (
    <section className="container d-flex mt-5 justify-content-center">
      <div className="card mt-lg-5">
        <div className="row justify-content-center">
          <div className="col-md-0 col-lg-0">
            <div className="wrap d-md-flex">{component}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
