import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavbarLoginButtons = () => {
  const { t } = useTranslation();
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
        {t("navbarLoginButtons.login")}
      </button>
      <button
        type="button"
        className="btn-primary"
        onClick={() => navigate("/signup")}
      >
        {t("navbarLoginButtons.signup")}
      </button>
    </div>
  );
};

export default NavbarLoginButtons;
