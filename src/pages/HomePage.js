import OutlineButton from "../components/ui/outline-button";
import Header from "../layouts/header/Header";
import { useNavigate } from "react-router-dom";

function Home() {
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };
  return (
    <>
      <Header
        component={
          <div className="signin-options d-flex align-items-center">
            <button
              type="button"
              className="btn btn-link px-3 me-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-primary me-3"
              onClick={() => navigate("/signup")}
            >
              Sign up for free
            </button>
          </div>
        }
      />
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
