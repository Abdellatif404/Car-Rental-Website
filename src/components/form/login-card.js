const LoginCard = (props) => {
  return (
    <div
      className={
        props.styleClass +
        " text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last"
      }
    >
      <div className="text w-100">
        <h2>Welcome to login</h2>
        <p>{props.msg}?</p>
        <a href={props.route} className="btn btn-white btn-outline-white">
          {props.btnMsg}
        </a>
      </div>
    </div>
  );
};

export default LoginCard;
