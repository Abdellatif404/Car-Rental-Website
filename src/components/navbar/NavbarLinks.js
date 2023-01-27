import { Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <div className="collapse navbar-collapse mt-lg-0 mt-4" id="navbarLinks">
      <Link className="navbar-brand " to="#">
        Locavo
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/book_cars">
            Book Cars
          </Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="#">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
