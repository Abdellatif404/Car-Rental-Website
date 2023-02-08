const FormButton = ({ bgColor = "", btnText }) => {
  return (
    <div className="form-group">
      <button type="submit" className={bgColor + " form-btn-primary"}>
        {btnText}
      </button>
    </div>
  );
};

export default FormButton;
