function Home() {
  return (
    <div>
      <div className="flex-container">
        <div className="title">
          <h1>
            <span>Rent a car</span> and find <br />
            great deals with us
          </h1>
          <p>
            Choose from a collection of brand new cars,
            <br /> low prices are part of our every day offer.
          </p>
          <button
            type="submit"
            className="signup-button btn btn-primary submit px-5 "
          >
            Book online now!
          </button>
        </div>
        <div className="car-shape">
          <div className="shape"></div>
          <img className="car img-responsive" src="assets/images/ford.png" />
        </div>
      </div>
    </div>
  );
}

export default Home;
