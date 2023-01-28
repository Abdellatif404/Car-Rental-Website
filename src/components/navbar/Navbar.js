import NavbarTogglerButton from "./navbar-toggler-button";
import NavbarLinks from "./NavbarLinks";

const Navbar = ({ component }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white mx-lg-5 mx-sm-5 mx-2 my-3">
      <div className="container-fluid">
        <NavbarTogglerButton />
        <NavbarLinks />
        {component}
      </div>
    </nav>
  );
};

export default Navbar;
