import { Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <div className="collapse navbar-collapse mt-lg-0 mt-4" id="navbarLinks">
      <Link className="navbar-brand" to="#">
        Locavo
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/cars">
            Book Cars
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default NavbarLinks;

/*
<li className="nav-item mx-2">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>

*/