const LoginCard = ({ styleClass = "", msg, route, btnMsg }) => {
  return (
    <div
      className={
        styleClass +
        " text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last"
      }
    >
      <div className="text w-100">
        <h2>Welcome to login</h2>
        <p>{msg}?</p>
        <a href={route} className="btn btn-white btn-outline-white">
          {btnMsg}
        </a>
      </div>
    </div>
  );
};

export default LoginCard;
