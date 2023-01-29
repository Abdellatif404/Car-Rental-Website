const LoginSubCard = ({textColor="", bgColor, question, route, btnName }) => {
  return (
    <div
      className={
        bgColor +
        " p-4 p-lg-5 text-white text-center d-flex align-items-center order-md-last"
      }
    >
      <div className="p-lg-5 p-md-0 p-4 w-100">
        <h2>Welcome to Locavo</h2>
        <p className="mb-4">{question}?</p>
        <a href={route} className={textColor+" subcard-btn-outline"}>
          {btnName}
        </a>
      </div>
    </div>
  );
};

export default LoginSubCard;
