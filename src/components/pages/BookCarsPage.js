function BookCars() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white mx-4 m-2">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
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
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ml-4">
                <a className="nav-link" href="#">
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
          <div className="d-flex align-items-center">
            <div className="container-fluid">
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="badge badge-pill bg-danger">1</span>
                    <span>
                      <i className="fa fa-shopping-cart"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0 dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default BookCars;
