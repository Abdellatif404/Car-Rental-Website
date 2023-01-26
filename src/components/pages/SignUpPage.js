function SignUp() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="signup text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Welcome to login</h2>
                  <p>Already a user?</p>
                  <a href="/login" className="btn btn-white btn-outline-white">
                    Log In
                  </a>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <form action="#" className="signin-form">
                  <div className="form-group mb-3">
                    <label className="label" for="fullname">
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
                    <label className="label" for="phone">
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
                      className="signup-button form-control btn btn-primary submit px-3 my-3"
                    >
                      Create account
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

export default SignUp;
