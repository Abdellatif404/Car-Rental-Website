import FormButton from "./form-button";

function SignUpForm() {
  return (
    <div className="login-wrap p-4 p-lg-5">
      <form action="#" className="signin-form">
        <div className="form-group mb-3">
          <label className="label" htmlFor="fullname">
            Fullname
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Fullname"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="label" htmlFor="phone">
            Phone number
          </label>
          <input
            type="tel"
            className="form-control"
            placeholder="Phone number"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <FormButton styleClass="signup-button" btnMsg="Create account" />
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
