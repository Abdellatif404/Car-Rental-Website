
const FormButton = ({ styleClass = "", btnName }) => {
  return (
    <button
      type="submit"
      className={styleClass + " btn-primary form-btn-primary pt-3"}
    >
      {btnName}
    </button>
  );
};

export default FormButton;
