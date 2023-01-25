function Login() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Welcome to login</h2>
                  <p>Don't have an account?</p>
                  <a href="/signup" className="btn btn-white btn-outline-white">
                    Sign Up
                  </a>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <form action="#" className="signin-form">
                  <div className="form-group mb-3">
                    <label className="label" for="email">
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
                    <label className="label" for="password">
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
                    <button
                      type="submit"
                      className="form-control btn btn-primary submit px-3 my-3"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
