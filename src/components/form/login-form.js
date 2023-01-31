import FormButton from "./form-button";

const LoginForm = () => {
  return (
    <div className="col-md-6 col-lg-6 p-md-5 px-4 py-5">
      <form>
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
          <FormButton bgColor="btn-primary" btnText="Sign In" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
