
import OutlineButton from "../components/ui/outline-button";
import Navbar from "../components/navbar/Navbar";
import NavbarLoginButtons from "../components/navbar/navbar-login-buttons";

function Home() {
  
  return (
    <>
      <Navbar component={<NavbarLoginButtons />} />
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
          <OutlineButton />
        </div>
        <div className="car-shape">
          <div className="shape"></div>
          <img className="car img-responsive" src="assets/images/ford.png" />
        </div>
      </div>
    </>
  );
}

export default Home;
