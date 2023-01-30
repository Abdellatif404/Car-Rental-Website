import { useNavigate } from "react-router-dom";

function Header() {
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-4 m-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler mt-2 mb-1"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0 mr-5" href="#">
            Kriit
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ml-4">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link" href="/book_cars">
                Book Cars
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
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
      </div>
    </nav>
  );
}

export default Header;
