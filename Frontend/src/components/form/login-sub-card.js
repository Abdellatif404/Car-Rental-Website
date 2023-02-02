const LoginSubCard = ({ bgColor, msg, route, btnMsg }) => {
  return (
    <div
      className={
        bgColor +
        " p-4 p-lg-5 text-white text-center d-flex align-items-center order-md-last"
      }
    >
      <div className="p-lg-5 p-md-0 p-4 w-100">
        <h2>Welcome to Locavo</h2>
        <p className="mb-4">{msg}?</p>
        <a href={route} className="subcard-btn-outline">
          {btnMsg}
        </a>
      </div>
    </div>
  );
};

export default LoginSubCard;
