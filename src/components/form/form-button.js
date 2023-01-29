const FormButton = ({ bgColor = "", btnName }) => {
  return (
    <button
      type="submit"
      className={bgColor + " form-btn-primary pt-3"}
    >
      {btnName}
    </button>
  );
};

export default FormButton;
