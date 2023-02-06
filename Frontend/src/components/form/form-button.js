const FormButton = ({ bgColor = "", btnText }) => {
  return (
    <button type="submit" className={bgColor + " form-btn-primary"}>
      {btnText}
    </button>
  );
};

export default FormButton;
