import FormButton from "./form-button";

function SignInForm() {
  return (
    <div className="login-wrap p-4 p-lg-5">
      <form action="#" className="signin-form">
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
          <FormButton styleClass="" btnMsg="Sign In" />
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
