import FormButton from "./form-button";

const SignUpForm = () => {
  return (
    <div className="col-md-6 col-lg-6 p-md-5 px-4 py-5">
      <form>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="fullname">
            Fullname
          </label>
          <input
            className="form-input"
            type="text"
            id="fullname"
            placeholder="Fullname"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="tel">
            Phone number
          </label>
          <input
            className="form-input"
            type="tel"
            id="tel"
            placeholder="Phone number"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <FormButton bgColor="btn-secondary" btnText="Create account" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
