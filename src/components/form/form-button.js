const FormButton = (props) => {
  return (
    <button
      type="submit"
      className={props.styleClass+" form-control btn btn-primary submit px-3 my-3"}
    >
      {props.btnMsg}
    </button>
  );
}

export default FormButton;
