import { useNavigate } from "react-router-dom";

const NavbarLoginButtons = () => {
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };
  return (
    <div className="login-buttons d-flex align-items-center">
      <button
        type="button"
        className="btn-outline-secondary px-3 me-2"
        
        onClick={() => navigate("/login")}
      >
        Login
      </button>
      <button
        type="button"
        className="btn-primary"
        onClick={() => navigate("/signup")}
      >
        Sign up for free
      </button>
    </div>
  );
};

export default NavbarLoginButtons;
