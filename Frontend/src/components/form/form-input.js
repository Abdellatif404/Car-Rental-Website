const FormInput = ({ name, type, refe }) => {
  const nameCapitalized = name[0].toUpperCase() + name.substring(1);
  return (
    <div className="form-group mb-3">
      <label className="form-label" htmlFor={name}>
        {nameCapitalized}
      </label>
      <input
        className="form-input"
        type={type}
        id={name}
        placeholder={nameCapitalized}
        ref={refe}
      />
    </div>
  );
};

export default FormInput;
