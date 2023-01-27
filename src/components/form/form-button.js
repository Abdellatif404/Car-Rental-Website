const FormButton = ({ styleClass="", btnMsg }) => {
  return (
    <button
      type="submit"
      className={styleClass + " form-control btn btn-primary submit px-3 my-3"}
    >
      {btnMsg}
    </button>
  );
};

export default FormButton;
