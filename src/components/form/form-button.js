const FormButton = ({ bgColor = "", btnText }) => {
  return (
    <button type="submit" className={bgColor + " form-btn-primary pt-3"}>
      {btnText}
    </button>
  );
};

export default FormButton;
